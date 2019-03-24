import React from "react";


const Task = (props) => {
 
  const { title, id } = props.task;
  return (
    <li className="task--item">
      <div className="task">
        <p className="task--title">{title}</p>
        <a href="#" onClick={props.delTask.bind(this, id)}>X</a>
      </div>
    </li>
  )
}


export default Task;