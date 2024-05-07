import React from 'react'
import Todos from "../MyComponents/Todos.js";

export default function DisplayData() {
    let btnEvent = document.querySelector("#create");
    btnEvent.addEventListener("click",()=>{
        document.querySelectorAll(".mailid").values;
})
  return (
    <div>
      <Todos/>
    </div>
  )
}
