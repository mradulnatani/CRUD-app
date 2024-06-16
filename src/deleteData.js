import React from 'react'

export default function deleteData() {
  return (
    <div>
      Enter id of data to be deleted: <input type='text' style={{margin:20, height:20, width:400, padding:0}}></input>
      <button style={{backgroundColor:'red',width:200}}>Delete</button>
    </div>
  )
}
