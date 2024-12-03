// import styles from "./services.module.css";

import Hero from "../../components/hero/Hero";
import Spoiler from "../../components/spoiler/spoiler";

const Services = () => {
  return (
    <main className="main">
      <Hero title="Послуги" />
      <section className="services">
        <div className="container">
          <Spoiler />
        </div>
      </section>
      <div id="popup" className="popup">
        <div className="popup__content">
          <div className="popup__text">
            <a className="popup__phone" href="tel:+380992665168">
              Зателефонувати нам: 099 548 57 67
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
