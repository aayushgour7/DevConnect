import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";

const App = () => (
  <Router>
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={
          <section className="container">
            <Register />
          </section>
        } />
        <Route path='/login' element={
          <section className="container">
            <Login />
          </section>
        } />
      </Routes>
    </>
  </Router>
);

export default App;
