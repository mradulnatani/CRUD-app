import './App.css';
import Header from "./MyComponents/Header.js";
import Todos from "./MyComponents/Todos.js";
import Footer from "./MyComponents/Footer.js";
import { useState } from 'react';
function App() { 
function updateData(){
   const[user,setUer] = useState({
    email:" ",
    Data:" "
   })

  return (
   <>
  <Header title= "CURD-Application" searchBar = {true} updateData={updateData}/>
  <Todos title="Curd-Operations"/>
  <Footer/>

   </>
  );
}
}
export default App;
