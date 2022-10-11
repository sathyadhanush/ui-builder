import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DragAndDrop from './DragAndDrop';
import Header from './Header'
import Buttons from './components/Buttons'
import Colum from "./components/Colum";
import Image from "./components/Image";
import Row from "./components/Row";
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/draganddrop" element={<DragAndDrop/>}/>
      <Route path="/Buttons" element={<Buttons/>}/>
      <Route path="/cloum" element={<Colum/>}/>
      <Route path="/row" element={ <Row/>}/>
      <Route path="/img" element={<Image/>}/>

    </Routes>
    </BrowserRouter>
      )
}
export default App;