import React from "react";


const MyNewComponent = (props) => {
    return (
        <div>
            {props.children}
            <h5>
                {props.header}
            </h5>
        </div>
    );
}

export default MyNewComponent;