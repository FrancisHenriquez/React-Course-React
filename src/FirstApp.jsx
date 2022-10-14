import PropTypes from 'prop-types';

export const FirstApp = ({title, Subtitulo}) => {
    // console.log(props);

    
    return (
        <>
        <h1>{title}</h1>
        <p>{Subtitulo}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    Subtitulo: PropTypes.number.isRequired
}