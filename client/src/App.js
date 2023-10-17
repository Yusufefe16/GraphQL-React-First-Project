import React from "react";
import { Routes, Route } from "react-router-dom";
import Event from "./components/Event/Event";
import Detail from "./pages/EventDetail/Detail";
import Update from "./pages/EventUpdate/Update";
import NewEvent from "./pages/NewEvent/NewEvent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Event/>} />
        <Route path="/event/:id" element={<Detail/>}/>
        <Route path="/event/update/:id" element={<Update/>}/>
        <Route path="/newEvent" element={<NewEvent/>}/>
      </Routes>
    </div>
  );
}

export default App;
