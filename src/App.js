import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section heading={"Top Albums"}/>
    </div>
  );
}

export default App;
