import React from "react";







    function Button ({className, children}) {
        return (
            <button
                className={'button ' + ' ' + className}
            >
                {children}
            </button>
            )
        }

export default Button;