import logo from './logo.svg';
import './App.css';

import Navbar from './component/navbar/navbar';
import Router from './Routes/Routes';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Router/>
    </div>

  );
}

export default App;
