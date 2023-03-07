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

  const getServices = () => {
    axios
      .get("https://expressjs-server.vercel.app/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getClients = () => {
    axios
      .get("https://expressjs-server.vercel.app/clients")
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => console.log(err));
  };

  const createService = (jobObj) => {
    axios
      .post("https://expressjs-server.vercel.app/services", jobObj)
      .then((res) => {
        getServices();
      })
      .catch((err) => console.log(err));
  };

  const deleteService = (id) => {
    axios
      .delete(`https://expressjs-server.vercel.app/services/${id}`)
      .then((res) => {
        getServices(res.data);
      })
      .catch((err) => console.log(err));
  };

  const updateService = (id, jobObj) => {
    console.log("Updating job:", jobObj);
    axios
      .patch(`https://expressjs-server.vercel.app/services/${id}`, { ...jobObj })
      .then((res) => {
        console.log("Service updated:", res.data);
        getServices(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getServices();
    getClients();
  }, []);


  return (
    <div className="App">
      <h1 style={{ marginLeft: "50px", fontSize: "40px" }}>
        Clients and orders
      </h1>
      <hr />
      <Navbar />
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/clients"
          element={<Clients  clients={clients} />}
        />
        <Route
          path="/services"
          element={
            <Services
              services={services}
              createService={createService}
              deleteService={deleteService}
              updateService={updateService}
            />
          }
        />
        <Route path="/results" element={<Results  />} />
        <Route path="/" element={<Home  />} />
      </Routes>
    </div>
  );
}

export default App;
