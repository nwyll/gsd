import React from 'react';

const TaskList = (props) => {
  return (
    <div className="task-list">
      {
        props.tasks.slice(0).reverse().map((task, index) => <TaskItem key={index} taskText={task} />)
      }
      <button className="btn btn-secondary"
        onClick={props.handleClearList}
        disabled={!props.hasTasks}
      >
        Clear Task List
      </button>
    </div>
  );
};

const TaskItem = (props) => <p>{props.taskText}</p>;

export default TaskList;
