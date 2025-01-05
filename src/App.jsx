
import Nav from "./Nav.jsx"
import Home from "./Home/Home.jsx"
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Adoption from './Adoption';
import Breed from './Breed';
import Facts from './Facts.jsx';
function App() {


  return (
    <>
  <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element ={<Home/>}/>
        <Route path="/dogs/home" element ={<Home/>}/>
        <Route path="/dogs/adoption" element ={<Adoption/>}/>
        <Route path="/dogs/breed" element ={<Breed/>}/>
        <Route path="/dogs/facts" element ={<Facts/>}/>

        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
