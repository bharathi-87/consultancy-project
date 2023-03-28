import React, { useState } from 'react';
import './styles/register.css';
import Register from './register';
function Login(){
    // const [reg,setReg]=useState("false");
    // const click=()=>
    // {
    //     setReg("true");

    // }
    return (
        <div class="container-fluid con">
        <div class="card card-container ">
            <h1 class="roomtron">CREATE ACCOUNT</h1>
            <p id="profile-name" class="profile-name-card"></p>
            <form  class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <h5 style={{textAlign:"left"}}>FIRST NAME</h5>
                <input type="text" id="inputFname" class="form-control" name="Fname" placeholder="firstname" required autofocus/><br/>
                <h5 style={{textAlign:"left"}}>LAST NAME</h5>
                <input type="text" id="inputLname" class="form-control" name="Lname" placeholder="lastname" required autofocus/><br/>
                <h5 style={{textAlign:"left"}}>MOBILE NUMBER</h5>
                <input type="number" id="inputnum" class="form-control" name="mob" placeholder="mobile number" required autofocus/><br/>
                <h5 style={{textAlign:"left"}}>EMAIL</h5>
                <input type="email" id="inputEmail" class="form-control" name="username" placeholder="email" required autofocus/><br/>
                <h5 style={{textAlign:"left"}}>PASSWORD</h5>
                <input type="password" id="inputPassword" class="form-control" name="password" placeholder="Password" required/>
                <h5 style={{textAlign:"left"}}>Password must be atleast of 6 characters</h5><br/>
                <a href="/signin"><button class="btn btn-lg btn-primary btn-block btn-signin" type="button">Continue</button></a>
                <h5 style={{textAlign:"left",display:"inline"}}>Already have an account?</h5>
                <a href="/signin"style={{fontSize:"20px"}}> Sign in</a>
                {/* {reg} && <Register/> */}
            </form>
        </div>
        </div>
    );
}

export default Login;