import React from 'react'
import './keyboardButton.css'

const KeyboardButton = (
    {
        idAndClass, 
        value, 
        handleNumber, 
        handleOperation, 
        handleResult, 
        handleClear,
        keyType
    }) =>{

    return(
        <input 
            type="button" 
            id={idAndClass} 
            className={`keys ${idAndClass} ${keyType}`} 
            value={value}
            onClick={handleNumber || handleOperation || handleResult || handleClear }
        />
    )
}

export default KeyboardButton