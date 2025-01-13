
import Nav from "./Nav.jsx"
import Home from "./Home/Home.jsx"
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Adoption from './Adoption';
import Breed from './Breed';
import Facts from './Facts.jsx';
import GetBreedById from "./GetBreedById.jsx";
import { useState } from 'react';
function App() {
  const [dogId , setDogId] = useState() 
 const [filteredDog ,setFilteredDog] = useState([])
  return (
    <>
  <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element ={<Home/>}/>
        <Route path="/dogs/home" element ={<Home/>}/>
        <Route path="/dogs/adoption" element ={<Adoption/>}/>
        <Route path="/dogs/breed" element ={<Breed dogId={dogId} setDogId={setDogId} setFilteredDog={setFilteredDog}/>}/>
        <Route path="/dogs/facts" element ={<Facts/>}/>
        <Route path={`/dogs/breed/${dogId}`} element={<GetBreedById filteredDog={filteredDog}/>} />
        <Route path="*" element={<Navigate to="/dogs/breed  " />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
