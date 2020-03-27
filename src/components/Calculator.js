import React, {useState} from 'react'
import KeyboardButton from './KeyboardButton'
import Display from './Display'
import './keyboard-grid.css'

const Calculator = () =>{

    const [total, setTotal] = useState(0)
    const [sequence, setSequence] = useState("0")
    const [controlEqual, setControlEqual] = useState(false)

    const handleResult = () =>{

        try {

            setTotal(eval(sequence))  //eval, change the string for a mathematical expression  
            setSequence(sequence + "=" + eval(sequence)) 
            setControlEqual(true)
            
        } catch (error) {
            setSequence('ERROR')
        }

    }    

    const handleClear = () =>{     

        setTotal(0)
        setSequence("0")
        setControlEqual(false)          
    }

    const handleNumber = e =>{  

        if(total[total.length-1] === "." && e.target.value ==="."){
            return;
        }
        
        if(total.toString().includes(".")  && e.target.value ==="."){
            return;
        }

        if(total === 0 && sequence === "0"){

            if(e.target.value === "0"){

                return;

            }else if(e.target.value === '.'){

                setTotal(total + e.target.value)
                setSequence(sequence + e.target.value) 

            }else{

                setTotal(e.target.value)
                setSequence(e.target.value)
            }
        }else{

            setTotal(total + e.target.value)
            setSequence(sequence + e.target.value)             
        }

        setControlEqual(false)
    }

    const handleOperation = e =>{         

        const symbols = ['*', '/', '-', '+']

        if(controlEqual){
            
            setSequence(total + e.target.value)

        }else{

            setTotal(e.target.value)

            if(symbols.includes(sequence[sequence.length-1]) && e.target.value === '-'){

                setSequence(sequence + e.target.value)

            }else if(symbols.includes(sequence[sequence.length-1]) && symbols.includes(e.target.value)){
            
                let i = sequence.length-1
                let text = sequence

                while(symbols.includes(text[i])){

                    text=text.slice(0, -1)
                    i--
                }   

                setSequence(text + e.target.value)    

            }else{

                setSequence(sequence + e.target.value)                
            }
            
        }
        setControlEqual(false)    
    }

    return(
        <div className="grid-container">  
            <Display 
                idAndClass={'display'} 
                total={total}
                sequence={sequence}                
            />
            <KeyboardButton 
                value={'AC'} 
                idAndClass={'clear'}
                keyType={'clear'}
                handleClear={handleClear}
            />
            <KeyboardButton 
                value={'/'} 
                idAndClass={'divide'}
                keyType={'operator'}
                handleOperation={handleOperation}  
            />
            <KeyboardButton 
                value={'*'} 
                idAndClass={'multiply'}
                keyType={'operator'}
                handleOperation={handleOperation}
            />
            <KeyboardButton 
                value={7} 
                idAndClass={'seven'}
                handleNumber={handleNumber}                
            />
            <KeyboardButton 
                value={8} 
                idAndClass={'eight'}
                handleNumber={handleNumber}
            />
            <KeyboardButton 
                value={9}
                idAndClass={'nine'}
                handleNumber={handleNumber}   
            />
            <KeyboardButton 
                value={'-'} 
                idAndClass={'subtract'}
                keyType={'operator'}
                handleOperation={handleOperation}      
            />
            <KeyboardButton 
                value={4} 
                idAndClass={'four'}
                handleNumber={handleNumber}   
            />
            <KeyboardButton 
                value={5} 
                idAndClass={'five'}
                handleNumber={handleNumber}   
            />
            <KeyboardButton 
                value={6} 
                idAndClass={'six'}
                handleNumber={handleNumber}   
            />
            <KeyboardButton 
                value={'+'} 
                idAndClass={'add'}
                keyType={'operator'}
                handleOperation={handleOperation}  
            />
            <KeyboardButton 
                value={1} 
                idAndClass={'one'}
                handleNumber={handleNumber}   
            />
            <KeyboardButton 
                value={2} 
                idAndClass={'two'}
                handleNumber={handleNumber}   
            />
            <KeyboardButton 
                value={3} 
                idAndClass={'three'}
                handleNumber={handleNumber}   
            />
            <KeyboardButton 
                value={0} 
                idAndClass={'zero'}
                handleNumber={handleNumber} 
            />
            <KeyboardButton 
                value={'.'} 
                idAndClass={'decimal'}
                handleNumber={handleNumber}   
            />
            <KeyboardButton 
                value={'='} 
                idAndClass={'equals'}
                keyType={'operator'}
                handleResult={handleResult}
            />
        </div>
    )
}

export default Calculator