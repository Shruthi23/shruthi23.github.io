import React, {useRef} from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Home =()=>{
    console.log("home compo")
    const gradientStyle = {
        background: 'linear-gradient(to bottom, #1c1c1c, #353535)',
        /* Specify your gradient colors and direction */
        width: '100%',
        height: '700px',
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
         
      }
      return(
    <div style={gradientStyle} >
        <div style={infoSectionStyle}>
       <h1 style={{fontSize:40}}> Hey, I'm Shruthi Srinivasan</h1>
       <h6 style={{fontSize:20}}>A passionate Full Stack developer and Mobile App developer having an experience of building web applications with Javascript/ React/ NodeJS/Python and other cool libraries and Cross platform mobile applications with React Native</h6>
    </div>
    </div>
      )

}
export default Home