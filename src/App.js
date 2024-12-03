import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Slider from './components/Slider';
import Store from './components/Store';
import Lower from './components/Lower';
import Jacket from './components/Jacket';

function App() {
  return (
    <>
      <Nav />
      <Home/>
      <Slider/>
      <Store/>
      <Jacket/>
      <Lower/>
    </>
  );
}

export default App;
