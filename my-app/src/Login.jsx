import { useState } from "react";
function Login(){
    const[islogin,setIsLogin]=useState(false);
    return(
        <div style={{textAlign:"center",paddingTop:"50px"}}>
            <input type="text" placeholder="enter your name"></input><br/><br/>
            <input type="password" placeholder="Enter Password"></input><br/><br/>
            <button onClick={()=>setIsLogin(!islogin)}>{islogin?"Logout":"Login"}</button>
            {islogin?<h1>Welcome</h1>:<h1>Please Login</h1>}
        </div>
    );
}
export default Login;