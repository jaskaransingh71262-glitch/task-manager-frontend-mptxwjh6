import React from 'react';
const TaskList = ({ tasks }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item">
          <h5>{task.title}</h5>
          <p>{task.description}</p>
        </li>
      ))}
    </ul>
  );
};
export default TaskList;