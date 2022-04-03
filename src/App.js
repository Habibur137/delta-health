import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Services from "./components/Services/Services";

export const MyContext = createContext("");

const App = () => {
  const [services, setServices] = useState([]);
  return (
    <MyContext.Provider value={[services, setServices]}>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/detail/:id" element={<ServiceDetail />} />
        </Routes>
      </>
    </MyContext.Provider>
  );
};

export default App;
