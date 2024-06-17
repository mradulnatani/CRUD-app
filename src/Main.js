import React,{useState} from 'react';
export default function Main() {
    const [data,setData] = useState(null);
    const [print,setPrint] = useState(false);
    function getData(val){
        setData(val.target.value);
    }
    return(
        <> 
        Enter Data:<input type='text'onChange={getData} style={{margin:20, height:20, width:400, padding:0}}></input>
        <button onClick={()=>{setPrint(true)}} style={{width:200}}>Submit</button>
        {
            print?
            <p>{data}</p>
            :null
        }
        <br/> <br/>
              Enter id to read the data: <input type='text' style={{margin:20, height:20, width:400, padding:0}}></input>
              <button style={{width:200}}>Read</button>
              <br/> <br/>
              Enter id of data to be deleted: <input type='text' style={{margin:20, height:20, width:400, padding:0}}></input>
              <button style={{backgroundColor:'red',width:200}}>Delete</button>

        </>
    )
}