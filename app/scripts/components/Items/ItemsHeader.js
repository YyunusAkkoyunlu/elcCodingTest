
import React from 'react'

const headerText = (amount) => {
    return amount < 4
        ? `Displaying ${amount} of ${amount} items`
        : `Displaying 4 of ${amount} items`

}

const ItemsHeader = ({itemsAmount}) =>{
    return(
        <div className="header-result">
            <span>
                {headerText(itemsAmount)}
            </span>
        </div>
    )
}

export default ItemsHeader
