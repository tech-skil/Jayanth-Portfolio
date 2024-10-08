import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index element={<Welcome />} />
    <Route path="home" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
