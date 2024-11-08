import  {Dispatch} from 'react';
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { MenuItem } from "../types"
import { OrderActions } from '../reducers/order-reducer';

type OrderContentProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>
    decreaseQuantity: (item: MenuItem) => void,
    increaseQuantity: (item: MenuItem) => void


}

// el parametro que tome sera tipado como la propiedad order de el type OrderContentProps
export default function OrderContents({ order,dispatch
}: OrderContentProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-5">
                {order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between  items-center border-t border-gray-200 py-5 last-of-type:border-b"
                    >

                        <div>

                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <div className="p-4 flex flex-row gap-5">
                            <div className="flex flex-col gap-2">
                                <button
                                    className="bg-green-500 h-8 w-8 mr-0 rounded-full text-white font-black"
                                    onClick={() => dispatch({type:'increase-quantity',payload:{id:item.id}})}
                                >
                                    +
                                </button>
                                <button
                                    className="bg-yellow-500 h-8 w-8 mr-0 rounded-full text-white font-black"
                                    onClick={() => dispatch({type:'decrease-quantity',payload:{id:item.id}})}
                                >
                                    -
                                </button>
                            </div>
                            <div className="h-full self-center">

                                <button
                                    className="bg-red-500 h-8 w-8 rounded-full text-white font-black"
                                    onClick={() => dispatch({type:'remove-item',payload:{id:item.id}})}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    )

}
