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
    </main>
  );
};

export default Services;
