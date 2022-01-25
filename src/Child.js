import React, {useContext} from "react";
import ValueContext from "./ValueContext";

function Child(props) {
    let value = useContext(ValueContext);
    return (
        <div>
            <p>This is Child {value[0]}</p>
            {console.log(value)}
            <button onClick={()=>{value[1](++value[0])}}>Child Button</button>
        </div>
    );
}

export default Child;
