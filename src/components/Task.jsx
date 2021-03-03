import React from 'react';

function Task(props) {
    return(
        <li onClick={() => props.remove(props.id)}>{props.content}</li>
    )
}

export default Task;