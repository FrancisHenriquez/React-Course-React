import PropTypes from 'prop-types';
import {useState} from 'react';
export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(20);
    const handleAdd = ()=> {
        // setCounter(counter + 1);
        setCounter((c)=> c + 1 )


    }

    
    return (
        <>
        <h1>CunterApp</h1>
        <p>{counter}</p>
        <button onClick={handleAdd}> +1 </button>
       
        </>
    )
}

CounterApp.PropTypes  = {
    value: PropTypes
}