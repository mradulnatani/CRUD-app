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
      <form>
       <input placeholder='Enter Data' style={{height:'100px',width:'500px',borderRadius:'5px',marginTop:'100px',marginLeft:'500px'}}type="text" value={data} onChange={settingData} />
        <br /><br />
        <button onClick={showData} style={{height:'50px',width:'100px',borderRadius:'5px',marginLeft:'700px',backgroundColor:'blue',color:'white'}} type="button">Save</button>
      </form>
      {show ? <h1 style={{marginLeft:'700px'}}>{data}</h1> : <h1>No Data</h1>}
      {taskArray.map((task, index) => (
        <h3 key={index}>{task}<button onClick={()=>{deleteTask(index)}} style={{height:'50px',width:'100px',borderRadius:'5px',marginLeft:'700px',backgroundColor:'red',color:'white'}}>Delete</button><button style={{height:'50px',width:'100px',borderRadius:'5px',marginLeft:'2px',backgroundColor:'blue',color:'white'}} onClick={() => editTask(index, prompt('Enter updated task:'))}>Edit</button>
</h3>
      ))}
    </>
  );
}
