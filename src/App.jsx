/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Feature from "./Pages/Features";
import Contact from "./Pages/Contact";
import Nopages from "./Pages/Nopages";
import PlaceRoute from "./Pages/PlaceRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.compat.css";
import { motion } from "motion/react";
// import { motions } from "framer-motion";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      {/* <BrowserRouter basename="/azulcorp"> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Feature />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Nopages />} />
            {/* <Route path="/place" element={<PlaceRoute />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
