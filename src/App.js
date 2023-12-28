import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section heading={'Top Albums'} api={'top'} tabs={false} />
      <Section heading={'New Albums'} api={'new'} tabs={false} />
      <Section heading={'Songs'} api={'songs'} tabs={true} />
    </div>
  );
}

export default App;
