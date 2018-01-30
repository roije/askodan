import React from 'react';

const ErrorMessageComponent = (props) => {
    return(
        <p className="error-message">{props.message}</p>
    )
}

export default ErrorMessageComponent;