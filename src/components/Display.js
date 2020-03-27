import React from 'react'
import './display.css'

const Display = ({idAndClass, total, sequence }) =>{

    return(
        <div className={`display ${idAndClass}`}>
            <p>{sequence}</p>
            <p id={idAndClass}>{total}</p>
        </div>
    )
}

export default Display