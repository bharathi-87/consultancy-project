import React from 'react';
function Signin(){
    
    return (
        <div class="container-fluid con">
        <div class="card card-container ">
            <h1 class="roomtron">SIGN IN</h1>
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <h5 style={{textAlign:"left"}}>EMAIL</h5>
                <input type="email" id="inputEmail" class="form-control" name="username" placeholder="Enter email" required autofocus/><br/>
                <h5 style={{textAlign:"left"}}>PASSWORD</h5>
                <input type="password" id="inputPassword" class="form-control" name="password" placeholder="Password" required/><br/>
                <a href="/page"><button class="btn btn-lg btn-primary btn-block btn-signin" type="button">Continue</button></a>
                <a href="/page"></a>
            </form>
            </div>
            </div>
     );
    }
    
    export default Signin;           