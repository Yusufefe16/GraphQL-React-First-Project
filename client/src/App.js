import React from "react";
import { Routes, Route } from "react-router-dom";
import Event from "./components/Event/Event";
import Detail from "./pages/EventDetail/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Event/>} />
        <Route path="/event/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
