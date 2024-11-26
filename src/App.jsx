import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import InfoIcon from "./components/info icon/InfoIcon";
import Services from "./pages/services/Services";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        {/* <Home /> */}
        <Services />
        <Footer />
        <InfoIcon />
      </div>
    </>
  );
}

export default App;
