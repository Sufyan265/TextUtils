import './App.css';
import './Components/style.css'
// components ko other page sy import krny k liya ↓ 
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

// let name = 'Sufyan';
function App() {

  const [theme, setTheme] = useState("dark");
  const [bodyMode, setBodyMode] = useState("darkBody");
  const [alert, setAlert] = useState(null);
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleBodyClick = () => {
    // Uncheck the checkbox when clicking on the body
    if (!isChecked) {
      setIsChecked(true);
    }
  };

  const setMode = (cls) => { // Dark mode 
    // if (cls) {
    handleBodyClick();
    setTheme("dark");
    setBodyMode(cls);
    showAlert("success", "Dark mode activated successfully");
  }

  const switchDarkMode = () => {
    if (bodyMode === "darkBody" || bodyMode === "darkBlueBody" || bodyMode === "darkGreenBody" || bodyMode === "darkBrownBody" || bodyMode === "darkPurpleBody") {
      setTheme("info");
      setBodyMode("lightBody")
      showAlert("success", "Light mode activated successfully");
    }
    else {
      setTheme("dark");
      setBodyMode("darkBody");
      showAlert("success", "Dark mode activated successfully");
    }
  }

  const [animationState, setAnimationState] = useState(true);

  const showAlert = (type, messege) => {
    setAlert({
      msg: messege,
      type: type,
    })
    repeatAnimation();
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }

  const repeatAnimation = () => {
    setAnimationState(false);
    setTimeout(() => setAnimationState(true), 2);
  }

  return (
    <>
      <Router basename='/TextUtils'>
        <div className={bodyMode} style={{ transitionDuration: '0.5s', minHeight: '100vh' }}>

          {/* 'Navbar' me custamizable text is tra add kr skty he (props) ↓ */}
          <Navbar title="TextUtils" theme={theme} toggleMode={setMode} switchDarkMode={switchDarkMode} isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />

          <div className="container">
            <Alert alertText={alert} animationState={animationState} />

            {/* <About/> */}
            {/* <TextForm showAlert={showAlert} heading="Type text to analyze" /> */}

            <Routes>
              {/* "exact" likhny sy react router exact path match krta ha (Good practice) ↓  */}
              <Route exact path="/" element={
                <TextForm showAlert={showAlert} heading="Type text to analyze" theme={theme} />
              } />
              <Route exact path="/about" element={
                <About />
              } />

            </Routes>

          </div>

          {/* jo hm curly brases me likh de wo as a JS exicute ho gi ↓ */}
          {/* <p>The name is {name}</p> */}

          {/* closing tag /> lazmi lgana ha ↓ */}
          <img src="/" alt="" />

        </div>
      </Router>
    </>
  );
}

export default App;
