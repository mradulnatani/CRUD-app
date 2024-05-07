import './App.css';
import Header from "./MyComponents/Header.js";
import Todos from "./MyComponents/Todos.js";
import Footer from "./MyComponents/Footer.js";
function App() {
  /*
  let curdItems =[ {
    sno : 1,
    title : "First demo statement",
    desc : "Description about the first demo statement"
},
{
  sno : 2,
  title : "Second demo statement",
  desc : "Description about the second demo statement"
},
{
    sno : 3,
    title : "Third demo statement",
    desc : "Description about the third demo statement"
},
]
*/
  return (
   <>
  <Header title= "CURD-App" searchBar = {true}/>
  <Todos/>
  <Footer/>
   </>
  );
}

export default App;
