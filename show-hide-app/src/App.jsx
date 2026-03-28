import {useState}from "react";
function App(){
  const[show, setshow]=useState(false);
  return(
    <div>
      <button onClick={()=>setshow(true)}>Show Text</button>
      {show && <h1>Hello React😊</h1>}
    </div>
  ); 
}
export default App;