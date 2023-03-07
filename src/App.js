import React, { useState, useEffect } from "react";
import "./App.css";
import Routers from "./Routers";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import Services from "./pages/services/Services";
import Home from "./pages/home/Home";
import Clients from "./pages/clients/Clients";
import Orders from "./pages/orders/Orders";
import Results from "./pages/results/Results";

function App() {
  const [jobs, setJobs] = useState([]);
  const [orders, setOrders] = useState([]);
  const [clients, setClients] = useState([]);
  const [services, setServices] = useState([]);
  const [result, setResults] = useState([]);

  const getJobs = () => {
    axios
      .get("https://expressjs-server.vercel.app/orders")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="App">
      <h1 style={{ marginLeft: "50px", fontSize: "40px" }}>
        Clients and orders
      </h1>
      <hr />
      <Navbar />
      <Routes>
        <Route path="/orders" element={<Orders jobs={jobs} />} />
        <Route path="/clients" element={<Clients jobs={jobs} />} />
        <Route path="/services" element={<Services jobs={jobs} />} />
        <Route path="/results" element={<Results jobs={jobs} />} />
        <Route path="/" element={<Home jobs={jobs} />} />
      </Routes>
      {/* <Services jobs={jobs} /> */}
    </div>
  );
}

export default App;
