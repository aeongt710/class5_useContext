import './App.css';
import Parent from "./Parent";
import ValueContext from "./ValueContext";
import {useState} from "react";
import SubParent from "./SubParent";

function App() {

    return (
        // <ValueContext.Provider value={val}>
            <div>
                <Parent></Parent>
                <SubParent></SubParent>
            </div>
        // </ValueContext.Provider>
    );
}

export default App;
