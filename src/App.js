import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from "./MyComponents/Header.js";
import Todos from "./MyComponents/Todos.js";
import Footer from "./MyComponents/Footer.js";
function App() { 
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/getData').then((response) => {
          setDataList(response.data);
      });
  }, []);

  return (
   <>
  <Header title= "CURD-Application" searchBar = {true}/>
  <Todos title="Curd-Operations"/>
  <Footer/>
      <div className="App">
          {dataList.map((val, key) => {
              return <div> Email: {val.emailid}, Data: {val.data} </div>
          })}
      </div>
   </>
  );
}
export default App;
