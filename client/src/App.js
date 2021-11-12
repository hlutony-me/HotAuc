import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Items from "./components/item-component/Items";
import Register from "./components/auth-component/Register";
import Login from "./components/auth-component/Login";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Sidebar />

      <section className="container">
        <Routes>
          <Route exact path="/" element={<Items />} />

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </section>
    </Fragment>
  </Router>
);

export default App;
