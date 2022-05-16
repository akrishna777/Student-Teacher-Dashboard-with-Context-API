import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Pages/Home'
import Dashboard from './components/Pages/Dashboard'
import Students from './components/Pages/Students'
import ManageStudents from './components/Pages/ManageStudents'
import Teachers from './components/Pages/Teachers'
import ManageTeachers from './components/Pages/ManageTeachers'

import AppState from './Contexts/AppState'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  return (
    <AppState>
      <div className="App">
        <div className="wrapper">
          <Sidebar />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/students" element={<Students />} />
            <Route
              exact
              path="/students/ManageStudents"
              element={<ManageStudents />}
            />
            <Route exact path="/teachers" element={<Teachers />} />
            <Route
              exact
              path="/teachers/ManageTeachers"
              element={<ManageTeachers />}
            />
          </Routes>
        </div>
      </div>
    </AppState>
  )
}

export default App
