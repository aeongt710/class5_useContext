import './App.css';
import Parent from "./Parent";
import ValueContext from "./ValueContext";
import {useState} from "react";

function App() {
    // let value=1;
        let val=useState(30);
    return (
        <ValueContext.Provider value={val}>
            <div>
                <Parent/>
                <button>Parent Button</button>
            </div>
        </ValueContext.Provider>
    );
}

export default App;
