import React from "react";
import "./Modal.css"

export default function Modal (props) {
    return (
        <div className="modal">
            <div className="content">
                <h2>Are you sure?</h2>
               {props.children}
            </div>
        </div>
    )
}