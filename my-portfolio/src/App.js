import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavBar';
import Home from './components/Home';
import Experience from './components/Experience';
import { createRef } from 'react';

function App() {
  const expRef = createRef()
  const scrollToSection =(ref)=>{
    if(ref && ref.current){
      ref.current.scrollIntoView({behaviour:'smooth'})

    }

  }
  return (
    <div className="App">
      <NavigationBar onLinkClick={scrollToSection} expRef={expRef}/>
      <div id="home">
      <Home/>

      </div>
      <div ref={expRef}>
        <Experience/>
      </div>
     
    </div>
  );
}

export default App;
