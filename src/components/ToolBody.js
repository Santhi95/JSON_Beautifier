import React from "react";
import GitBody from "./GitBody";
import JSONBeautifier from "./JSONBeautifier";

const ToolBody = (props) => {
    const { state } = props
    const { activeItem } = state
    switch (activeItem) {
        case "JSONBeautifier": return <JSONBeautifier {...props}/>
        // case "JSONFormatter": return <div>{activeItem} is in Progress</div>
        // case "JSBeautifier": return <div>{activeItem} is in Progress</div>
        // case "XMLBeautifier": return <div>{activeItem} is in Progress</div>
        case "GITlink": return <GitBody {...props}/>
        default: return <JSONBeautifier {...props}/>
    }

}

export default ToolBody