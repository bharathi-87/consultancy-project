import React from 'react';
import Meter from './meter.jpeg';
import Pipe from './pipe.png';
import Switch from './swithces.jpeg';
// import Adapter from './Adaptor.jpeg';
function Page(){
    
        return(
            
            <div class="slider">
              <figure>
  
  
   <img src={Meter} />
  <img src={Pipe} />
  <img src={Switch}/>
  {/* <img src={Adapter}/> */}
  </figure>
  {/* <a href="/app" style={{float:"right",}}><button style={{backgroundColor:"royalblue",borderRadius:"20px",color:"white",fontSize:"30px",marginRight:"40px",padding:"10px",marginBottom:"20px"}}>WEATHER REPORT</button></a> */}
  
</div>
);

}
export default Page; 