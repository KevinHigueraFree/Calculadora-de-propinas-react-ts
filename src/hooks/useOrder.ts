import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types';
//import OrderTotals from '../components/OrderTotals';

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {
        //verificamos si el elemnto ya existe
        const itemExtist = order.find(orderItem => {
            return orderItem.id === item.id;
        })
        if (itemExtist) {
            //comparamos cual es el elemento repetido
            // en caso de que exista  se toma una copia de orderItem en la propiedad quantity toma la cantidad y le suma 1
            //si no se retorna tal cual como es el orderItem
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem);
            setOrder(updateOrder)
        } else {
            // el OrderItem es para castearlo (convertir el valor de newItem a typo de OrderItem
            // const newItem:OrderItem={...item,quantity:1};
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        }
    }
    const removeItem = (item: MenuItem) => {

        //forma 1 juan
        setOrder(order.filter(orderItem => orderItem.id !== item.id))
        //forma 2 kevin
        /* const itemContinua = order.filter(orderItem => {
             return orderItem.id !== item.id;
         })
         setOrder([...itemContinua]);
      */
    }
    const increaseQuantity = (item: MenuItem) => {
        const updateOrder = order.map(orderItem => orderItem.id === item.id ? {
            ...orderItem, quantity: orderItem.quantity < 10 ? orderItem.quantity + 1 : orderItem.quantity

        } : orderItem);
        setOrder(updateOrder)
    }
    const decreaseQuantity = (item: MenuItem) => {
        const updateOrder = order.map(orderItem => orderItem.id === item.id ? {
            ...orderItem, quantity: orderItem.quantity > 1 ? orderItem.quantity - 1 : orderItem.quantity

        } : orderItem);
        setOrder(updateOrder)
    }
    const placeOrder=()=>{
        setOrder([])
        setTip(0)
    }
    


    //exportaciones
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        placeOrder
    }
}