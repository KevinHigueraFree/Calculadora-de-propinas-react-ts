import { Fragment } from "react/jsx-runtime"
import type { MenuItem } from "../types"
type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}
export default function MenuItem({ item, addItem }: MenuItemProps) {
    //export default function MenuItem(item: MenuItem) {
    return (
        <Fragment>
            <button
                onClick={() => addItem(item)}
                className="w-full border-2 rounded-md border-teal-400 hover:bg-teal-200 p-2 flex flex-row  justify-between ">
                <p>{item.name}</p>
                <p className="font-black">{`$${item.price}`}</p>
            </button>

        </Fragment >
    )
}

