import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import InfoIcon from "./components/info icon/InfoIcon";
import Services from "./pages/services/Services";
import About from "./pages/about us/About";
import Contacts from "./pages/contacts/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
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
