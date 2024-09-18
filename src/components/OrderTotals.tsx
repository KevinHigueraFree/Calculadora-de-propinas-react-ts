import { Fragment } from "react/jsx-runtime";
import { OrderItem } from "../types";
import { useMemo, useCallback } from "react";
import { formatCurrency } from "../helpers";
type OrderTotalsProp = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}
export default function OrderTotals({order, tip, placeOrder}:OrderTotalsProp) {
    //todo la funcion reduce crea la variable total e item. se retornara la variable total como resultado de quantity*price, en un inicio total sera 0
    const subtotalAmount=useMemo(()=>order.reduce((total,item)=>total+(item.quantity*item.price),0),[order]);// use memo hace que este codigo solo se ejecute cunado cambie la dependiencia order
    const tipAmount=useMemo(()=>subtotalAmount*tip,[tip,order]) // se ejecutara cunando cambie tip o order
    const totalAmount=useCallback(()=>subtotalAmount+tipAmount,[subtotalAmount, tipAmount]) // se ejecutara cunando cambie tip o order
    return (
        <Fragment>
            
            
            <div className='space-y-3'>
                <h2 className="font-black text-2xl">Total y propina</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>Propina : {}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a pagar : {}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
                </p>

            </div>
            <button
             className="rounded-lg p-2  bg-teal-200 hover:bg-teal-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
             disabled={totalAmount() ===0}
             onClick={placeOrder}
             >
                Guardar Orden
            </button>
        </Fragment>
    )
}

