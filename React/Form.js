import React from "react";
import "./Form.css";

const Form = ({value,onaChange,onaCreate}) =>{
    return(
        <div className="form">
            <input value={value} onChange={onaChange}/>
            <button className="addButton" onClick={onaCreate}>ADD</button>
        </div>
    )
}

export default Form;