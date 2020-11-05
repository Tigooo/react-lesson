import React from "react";
import {Alert} from "react-bootstrap";

function Task(props) {
    return (
        <li>
            <Alert variant='success'>
                {props.data}
            </Alert>
        </li>
    )
}

export default Task;