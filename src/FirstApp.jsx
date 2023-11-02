import PropTypes from 'prop-types'

// const getResult = (a, b) => {
//     return a + b;
// }

export const FirstApp = ({title, subTitle, name}) => {
    return (
        <>
            <h1 data-testid = "test-title">{title}</h1>
            {/*<code>{JSON.stringify(newMessage)}</code>*/}
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'Borja Aday Guadalupe Luis',
    subTitle: 'No hay subtítulo',
    // title: 'No hay título'
}