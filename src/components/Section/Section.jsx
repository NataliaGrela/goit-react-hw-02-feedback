// import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
    return (
        <>
<h3>{title}</h3>
<div>{children}</div>
        </>
    )
    }