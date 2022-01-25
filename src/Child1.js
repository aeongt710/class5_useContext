import React, {useContext, useReducer} from "react";
import ValueContext from "./ValueContext";
import valueReducer from "./ValueReducer";

function Child1(props) {

    let [state, dispatch]=useReducer(valueReducer,20);

    return (
        <div>
            <p>Child 1: using Reducer  <strong>{state}</strong></p>
            <button onClick={()=>{ dispatch({type:"INCREMENT"}); }}>click</button>
        </div>
    );
}

export default Child1;
