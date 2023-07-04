
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from './components/LandingPage/Components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/about" element={<h1>About</h1>}/>

        </Routes>
      </Router>
      {/* routes */}
    </div>
  );
}

export default App;
