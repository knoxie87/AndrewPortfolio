
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'
import PreviousJobs from './Pages/PreviousEmployment';
import Navbar from './Layout/Navbar';
import Sidebar from './Layout/Sidebar';
import Contact from './Pages/Contact';
function App() {

  const [displaySideBar, setSideBar] = useState(false)

  return (
    <Router>
      <div className="App">
      <Navbar displayIcon={displaySideBar} setSideBar={() => setSideBar(!displaySideBar)} />
        <div className="content flex flex-row">
          <Routes>
            <Route path="/" element={<Home displaySideBar = {displaySideBar} setSideBar={ () => setSideBar(!displaySideBar)}/>}>
            </Route>
            <Route path="/experience" element={<PreviousJobs/>}>
            </Route>
            <Route path="/contact" element={<Contact/>}>
            </Route>
          </Routes>
          <Sidebar closeNavBar={() => setSideBar(!displaySideBar)} displaySideBar={displaySideBar} />
        </div>
      </div>
    </Router>
  );
}

export default App;