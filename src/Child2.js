import React, {useContext, useReducer, useState} from "react";
import ValueContext from "./ValueContext";
import ValueReducer from "./ValueReducer";

function Child2(props) {
    let c=useContext(ValueContext);

    return (
            <div>
                <p>Child 2: using Context <strong>{c}</strong></p>
                <button onClick={()=>{c[1](++c[0])}}>Click here</button>
            </div>
    );
}

export default Child2;
