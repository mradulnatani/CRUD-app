import React, { useState } from 'react';
import './main.css'
export default function Main() {
  const [data, setData] = useState('');
  const [show, setShow] = useState(false);
  const [taskArray, setTaskArray] = useState([]); 

  const deleteTask=(index)=>{
    const updateTask = taskArray.filter((_,i)=> i !==index)
    setTaskArray(updateTask)
  }
  
  const editTask = (index, updatedData) => {
    const updatedTasks = [...taskArray];
    updatedTasks[index] = updatedData;
    setTaskArray(updatedTasks);
  };

  function settingData(e) {
    e.preventDefault();
    setData(e.target.value);
  }

  function showData() {
    setShow(true);
    setTaskArray([...taskArray, data]); 
    setData('');
  }

  return (
    <>
      <form style={{border:'1px solid blue',borderRadius:'1px',backgroundColor:'red'}}>
        <h1 style={{marginTop:'170px',color:'white'}}>Enter data:</h1>
       <input placeholder='Enter Data' style={{height:'100px',width:'500px',borderRadius:'5px', marginTop:'10px',marginLeft:'100px'}}type="text" value={data} onChange={settingData} />
        <br />
        <button onClick={showData} style={{height:'40px',width:'100px',borderRadius:'5px',marginLeft:'500px',backgroundColor:'blue',color:'white'}} type="button">Save</button>
      </form>
      <br/>
      <h3>Output:</h3>
      {show ? <h1 style={{marginLeft:'700px'}}>{data}</h1> : <h1>No Data</h1>}
      {taskArray.map((task, index) => (
        <h3 key={index}>{task}<button onClick={()=>{deleteTask(index)}} style={{height:'40px',width:'100px',borderRadius:'5px',marginLeft:'10px',backgroundColor:'red',color:'white'}}>Delete</button><button style={{height:'40px',width:'100px',borderRadius:'5px',marginLeft:'2px',backgroundColor:'blue',color:'white'}} onClick={() => editTask(index, prompt('Enter updated task:'))}>Edit</button>
        <hr/>
</h3>
      ))}
    </>
  );
}
