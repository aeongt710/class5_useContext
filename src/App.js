import './App.css';
import Parent from "./Parent";
import ValueContext from "./ValueContext";
import {useState} from "react";
import SubParent from "./SubParent";

function App() {

    return (
        // <ValueContext.Provider value={val}>
            <div>
                <h2>useContext & useReducer by Muhammad Ahmad</h2>
                <Parent></Parent>
                <hr style={{marginLeft:"30%", marginRight:"30%"}}/>
                <SubParent></SubParent>
            </div>
        // </ValueContext.Provider>
    );
}

export default App;
