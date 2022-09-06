import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from "./components/Header"
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import CallMe from "./pages/CallMe";
import Projcts from "./pages/Projcts";
function App() {
  return (
    <>
        <Header />
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/CallMe" element={<CallMe />}/>
             <Route path="/AboutMe" element={<AboutMe />}/>
             <Route path="/Projects" element={<Projcts />} />
             <Route path="/*" element={<><h1 style={{position: "absolute", top: "50%"}}>sorry something error</h1></>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;