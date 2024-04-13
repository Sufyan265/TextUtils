import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alertText && <div className={`toast align-items-center text-bg-${props.alertText.type} border-0 alert-msg ${props.animationState ? "alertAnimationIn" : ""}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    <strong>{capitalize(props.alertText.type)}</strong>: {props.alertText.msg}
                </div>
            </div>
        </div>
    )
}

export default Alert
