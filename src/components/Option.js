import React from "react"

const Option = (props) => (
    <div>
        {props.name}
        <button 
            onClick={(e) => {
                props.handleDeleteOption(props.name);
            }}
        >
            Delete
        </button>
    </div>
);

export default Option;