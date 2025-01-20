import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import InfoIcon from "./components/info icon/InfoIcon";
import About from "./pages/about us/About";
import Contacts from "./pages/contacts/Contacts";
import { Routes, Route } from "react-router-dom";
import GboPage from "./pages/gbo/GboPage";

import CoolingSystem from "./pages/coolingSystem/CoolingSystem";
import AutoElectrician from "./pages/autoElectrician/AutoElectrician";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services">
            <Route path="gbo" element={<GboPage />} />
            <Route path="autoelectric" element={<AutoElectrician />} />
            <Route path="cooling-system" element={<CoolingSystem />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
        <InfoIcon />
      </div>
    </>
  );
}

export default App;
