import React from "react";
import './styles/header.css';
import { Link } from "react-router-dom";
class header extends React.Component{
    render(){
        return <React.Fragment>

  <nav class="navbar navbar-expand-lg" >

  <div class="container-fluid ">
  <img width="100px" height="100px"src="https://img.icons8.com/external-others-inmotus-design/256/external-Plug-rounded-square-icons-others-inmotus-design.png"  / >
    <h1 class="navbar-brand px-5" style={{fontFamily:"roboto",fontSize:"35px",color:"white"}} href="#">SAP HARDWARES AND ELECTRICALS </h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div style={{marginLeft:"40%"}}class="collapse navbar-collapse " id="navbarNav">

      <ul class="navbar-nav " >
      <li class="nav-item">
          <a class="nav-link px-5" aria-current="page" href="/" style={{fontFamily:"roboto",fontSize:"25px",color:"white"}}>REGISTER</a>
        </li>
         {/* <li class="nav-item">
         
          <a class="nav-link px-5" aria-current="page" href="/signin" style={{fontFamily:"monospace",fontSize:"20px"}}>SIGNUP</a>
        </li>  */}
        <li class="nav-item">
          <a class="nav-link px-5" aria-current="page" href="/cart" style={{fontFamily:"roboto",fontSize:"25px",color:"white"}}>CART</a>
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>
 
        </React.Fragment>
    }
}
export default header;