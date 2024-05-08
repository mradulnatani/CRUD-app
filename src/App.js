import './App.css';
import Header from "./MyComponents/Header.js";
import Todos from "./MyComponents/Todos.js";
import Footer from "./MyComponents/Footer.js";
function App() { 

  return (
   <>
  <Header title= "CURD-Application" searchBar = {true}/>
  <Todos title="Curd-Operations"/>
  <Footer/>

   </>
  );
}

export default App;
