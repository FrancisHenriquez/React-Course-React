import PropTypes from 'prop-types';
import {useState} from 'react';
export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(20);
    const handleAdd = ()=> {
        // setCounter(counter + 1);
        setCounter((c)=> c + 1 )
    }
    const handleSubstract = () =>{setCounter (counter - 1)}
    const handleRest = ()=> setCounter (value )

    
    return (
        <>
        <h1>CunterApp</h1>
        <p>{counter}</p>
        <button onClick={handleAdd}> +1 </button>
       <button onClick ={handleSubstract}> -1</button>
       <button onClick ={handleRest}> reset</button>
        </>
    )
}

CounterApp.PropTypes  = {
    value: PropTypes
}