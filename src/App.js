
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Projects from './Projects/projects';
import Technologies from './Technologies/Technologies';
import About from './About';
import Contact from './ContactMe/Contact';

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Projects/>
    <Technologies/>
    <About/>
    <Contact/>
    
    
    </div>
  );
}

export default App;
