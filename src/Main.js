import React,{useState} from 'react';
export default function Main() {
    const[print,setPrint] = useState("");
    const[info,getInfo] = useState("");
    const[dlt,setDlt]=useState("");
    function getFormData1(e){
        e.preventDefault();
        console.log(info);
    }
    function getFormData2(e){
        e.preventDefault();
        console.log(dlt);
    }
    function getFormData0(e){
        e.preventDefault();
        console.log(print);
    }
    return(
        <> 
        Enter Data:<input type='text'onChange={(e)=>{setPrint(e.target.value)}} style={{margin:20, height:20, width:400, padding:0}}></input>
        <button style={{width:200}} onClick={getFormData0}>Submit</button>
        <br/> <br/>
              Enter id to read the data: <input type='text' onChange={(e)=>{getInfo(e.target.value)}}  style={{margin:20, height:20, width:400, padding:0}}></input>
              <button style={{width:200}} onClick={getFormData1}>Read</button>
              <br/> <br/>
              Enter id of data to be deleted: <input type='text' onChange={(e)=>{setDlt(e.target.value)}}style={{margin:20, height:20, width:400, padding:0}}></input>
              <button style={{backgroundColor:'red',width:200}} onClick={getFormData2}>Delete</button>

        </>
    )
}