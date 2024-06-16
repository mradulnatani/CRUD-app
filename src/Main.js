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
        <button onClick={()=>{setPrint(true)}}>Submit</button>
        {
            print?
            <p>{data}</p>
            :null
        }
        </>
    )
}
