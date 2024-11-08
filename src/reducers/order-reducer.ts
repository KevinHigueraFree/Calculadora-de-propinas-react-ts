import { MenuItem, OrderItem } from "../types";

export type OrderActions =
    {
        type: 'add-item',
        payload: { item: MenuItem }
    } |
    {
        type: 'remove-item'
        payload: { id: MenuItem['id'] }
    } |
    {
        type: 'increase-quantity',
        payload: { id: MenuItem['id'] }
    } |
    {
        type: 'decrease-quantity',
        payload: { id: MenuItem['id'] }
    } |
    {
        type: 'place-order'
    } |
    {
        type: 'add-tip', payload: { value: number }
    }


export type OrderState = {
    order: OrderItem[],
    tip: number
}
const initialOrder= (): OrderItem[] => {
    const localStorageOrder = localStorage.getItem('order')
    return localStorageOrder ? JSON.parse(localStorageOrder) : []
}

export const initialState: OrderState = {
    order: initialOrder(),
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {

    if (action.type === 'add-item') {
        console.log('kevin');

        const itemExtist = state.order.find(orderItem => {
            return orderItem.id === action.payload.item.id;
        })

        let updateOrder: OrderItem[] = [];

        if (itemExtist) {
            //comparamos cual es el elemento repetido
            // en caso de que exista  se toma una copia de orderItem en la propiedad quantity toma la cantidad y le suma 1
            //si no se retorna tal cual como es el orderItem
            updateOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem);

        } else {
            // el OrderItem es para castearlo (convertir el valor de newItem a typo de OrderItem
            // 
            const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
            updateOrder = [...state.order, newItem]
        }

        return {
            ...state,
            order: updateOrder
        }
    }

    if (action.type === 'remove-item') {
        const updateOrder = state.order.filter(orderItem => orderItem.id !== action.payload.id);
        return {
            ...state,
            order: updateOrder

        }
    }

    if (action.type === 'increase-quantity') {
        const updateOrder = state.order.map(orderItem => orderItem.id === action.payload.id ? {
            ...orderItem, quantity: orderItem.quantity < 10 ? orderItem.quantity + 1 : orderItem.quantity

        } : orderItem);
        return {
            ...state,
            order: updateOrder

        }
    }

    if (action.type === 'decrease-quantity') {
        const updateOrder = state.order.map(orderItem => orderItem.id === action.payload.id ? {
            ...orderItem, quantity: orderItem.quantity >1 ? orderItem.quantity - 1 : orderItem.quantity

        } : orderItem);
        return {
            ...state,
            order: updateOrder

        }
    }

    if (action.type === 'place-order') {
        return {
            ...state,
            order: [],
            tip:0
        }
    }

    if (action.type === 'add-tip') {
        const tip=action.payload.value
        return {
            ...state,
            tip

        }
    }
}