import React, {useState} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import ValueContext from "./ValueContext";


function SubParent(props) {
    let a=useState(100);
    return (
        <ValueContext.Provider value={a}>
            <p>SubParent Value: <strong>{a}</strong></p>
            <div>
                <Child2></Child2>
            </div>
        </ValueContext.Provider>
    );
}

export default SubParent;
