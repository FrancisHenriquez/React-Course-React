import PropTypes from 'prop-types';

export const FirstApp = (
    {title, 
        subtitulo,
    name}) => {
    // console.log(props);

    
    return (
        <>
        <h1>{title}</h1>
        <p>{subtitulo}</p>
        <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
     Subtitulo: PropTypes.string
}

FirstApp.defaultProps = {
    title : 'no hay titulo',
    subtitulo: 'no hay subtitulo',
    name : 'Francis Henriquez Matos'
}