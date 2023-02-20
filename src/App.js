import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from './components/Highlights';
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  );
}

export default App;
