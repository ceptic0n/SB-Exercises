import React from "react"
import "./ShoppingCart.css"

const ShoppingCart = (props) =>{
    return(
        <div className="ShoppingCart">
            {props.items.map(i =>(
            <div>
                <h4 className="ShoppingCart-header">{i.itemName}</h4>
                <p>{i.price}</p>
            </div>
            ))}
        </div>
    )
}

export default ShoppingCart