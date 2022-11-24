import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import Calendar from "./components/Calendar/Calendar";
import Taskbar from "./components/Taskbar/Taskbar";
import React from "react";
import {useState} from "react";
import {ModalContext} from "./Context";

function App() {
    const [showModal, setShowModal] = useState({
        show: false,
        userId: 1,
        date: ''
    })
  return (
      <ModalContext.Provider value={[showModal, setShowModal]}>
        <div className="App">
            <Sidebar/>
            <Taskbar/>
            <Calendar/>
        </div>
      </ModalContext.Provider>
  );
}

export default App;
