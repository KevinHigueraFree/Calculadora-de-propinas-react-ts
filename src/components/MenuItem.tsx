import { Fragment } from "react/jsx-runtime"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"
type MenuItemProps = {
    item: MenuItem,
    dispatch: React.Dispatch<OrderActions>
}
export default function MenuItem({ item, dispatch }: MenuItemProps) {
    //export default function MenuItem(item: MenuItem) {
    return (
        <Fragment>

            <button
                onClick={() => dispatch({type: 'add-item',payload:{item}})}
                className="w-full border-2 rounded-md border-teal-400 hover:bg-teal-200 p-2 flex flex-row  justify-between ">
                
                <p>{item.name}</p>
                <p className="font-black">{`$${item.price}`}</p>
            
            </button>

        </Fragment >
    )
}

