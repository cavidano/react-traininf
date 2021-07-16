import React from 'react';

const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div
                className={`alert alert--${alert.type}--inverse text-align-center`}
                aria-labelledby="alert-label"
                aria-describedby="alert-description"
                role="alert">

                <div className="alert__title">
                    <span className={`icon_${alert.type}`} aria-hidden="true"></span>
                    <span className="alert__title__text" id="alert-label">
                        {alert.message}
                    </span>
                </div>

            </div>
        )
    )
}

export default Alert;