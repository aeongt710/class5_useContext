import React, {useState} from "react";
import Child from "./Child";


function Parent(props) {

  return (
    <div >
        <p>This is Parent</p>
        <Child/>
    </div >
  );
}

export default Parent;
