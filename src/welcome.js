import React from "react";

export function Welcome(props) {
    return (
        <div>
            <h1>Welcome, {props.name}!</h1>
            <p>Age : {props.age}</p>
        </div>
    );
}