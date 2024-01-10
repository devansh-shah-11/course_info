import React from "react";

const Counter = (props) => {
    const digit = props.digit;
    return (
        <div>
            <p>{digit}</p>
        </div>
    );
}



export default Counter;