import { useState } from "react";
import { Button } from "./button";

export function Menu(props) {
    const [item, setNewItem] = useState("")
    const {onClick} = props

    console.log('Menu component rerendered')

    return(
        <div>
            <input
                value={item}
                onChange={e => setNewItem(e.target.value)}
                className="bg-slate-200"
                type="text"
            />
            <Button text='Add' onClick={onClick} item={item} setNewItem={setNewItem}/>
        </div>
    )
}