import React from 'react';

const TaskList = (props) => {
  return (
    <div className="task-list">
      {
        props.tasks.slice(0).reverse().map((task) => <TaskItem key={task} taskText={task} />)
      }
      <button className="btn btn-default"
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
