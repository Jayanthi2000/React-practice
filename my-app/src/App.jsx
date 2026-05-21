import { useState } from "react";
import Login from "./Login";
function App(){
  const [dark,setDark]=useState(false);
  return(
    <div style={{height:"100vh",
    textAlign:"center",
    paddingTop:"50px",
    backgroundColor:dark?"black":"white",
    color:dark ? "white":"black",
    }}
    >

      <h2 style={{color: dark ? "white" : "black" }}>{dark?"Dark Mode":"White Mode"}</h2>

      <button onClick={()=>setDark(!dark)}>{dark?"switch to light":"Switch to dark"}</button>
    <Login/>
    </div>
  );
}
export default App;