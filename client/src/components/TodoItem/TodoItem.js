import React from 'react';

const TodoItem = (props) => {
  const { item: { _id, body, deadline, status } } = props;

  return (
    <li>
      <div>
        <span>{body}</span>
        <span>{new Date(deadline).toISOString()}</span>
        <span>{status}</span>
        <button onClick={() => props.delCallback(_id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;