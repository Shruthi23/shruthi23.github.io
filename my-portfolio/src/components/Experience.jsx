import React, {useRef} from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Experience =()=>{
    console.log("home compo")
    const gradientStyle = {
        background: 'linear-gradient(to bottom, #1c1c1c, #353535)',
        /* Specify your gradient colors and direction */
        width: '100%',
        height: '100px',
        display:'flex'
      };
      const infoSectionStyle ={
          width:'60%',
          justifyContent:'center',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          paddingLeft:'5%',
          paddingRight:'5%',
          color:'white',
          fontFamily:'Roboto Regular',
          backgroundColor:'red',
         
      }
      return(
    <div style={gradientStyle}>
        Experience
    </div>
      )

}
export default Experience