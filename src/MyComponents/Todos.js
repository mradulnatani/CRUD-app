import React from 'react'
import TodoItems from './MyComponents/Todoitem.js'

export default function Todos(porps) {
  return (
    <>
    <div className= "Container">
      <h4>Curd List</h4>
      <TodoItems todo = {porps.curdItems[0]}/>
    </div>
    </>
  )
}
