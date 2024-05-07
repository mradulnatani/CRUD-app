import React from 'react'

const TodoItem = ({curdItems}) => {
  return (
    <div>
      <h4>{curdItems.title}</h4>
      <p>{curdItems.desc}</p>
    </div>
  )
}

export default TodoItem
