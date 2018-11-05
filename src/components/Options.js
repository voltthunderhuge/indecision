import React from "react"
import Option from "./Option"

const Options = (props) => (
    <div>
    {props.options.length === 0 && <p>Please add an option!</p>}
        {
            props.options.map((option, index) => (
                <Option 
                    key={index} 
                    name={option}
                    handleDeleteOption={props.handleDeleteOption}
                />)
            )
        }
        <button onClick={props.handleDeleteAllOptions}>Remove All</button>
    </div>
);

export default Options;