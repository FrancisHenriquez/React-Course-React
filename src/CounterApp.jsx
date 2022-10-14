import PropTypes from 'prop-types';

export const CounterApp = (
    {value}) => {
    // console.log(props);

    
    return (
        <>
        <h1>CunterApp</h1>
        <p>{value}</p>
       
        </>
    )
}

CounterApp.PropTypes  = {
    value: PropTypes
}