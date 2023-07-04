
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/LandingPage/Pages/Home';
import Layout from './components/LandingPage/Components/Layout/Layout';

function App() {
  return (
    <div className="App">
        <Router>
          <Layout>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<h1>About</h1>}/>

              </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
