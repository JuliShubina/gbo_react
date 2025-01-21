import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "../../scss/base.css";
import services_1 from "../../images/services_1.webp";
import services_2 from "../../images/services_2.jpg";
import services_3 from "../../images/services_3.jpg";
import Hero from "../../components/hero/Hero";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка страницы к началу /** ? может и не нужна?**/
  }, []);
  return (
    <main className="main">
      <Hero styleBg={{ "--bg-height": "100vh" }} title="car-service" titlePlus="надійність, економія, комфорт" />
      <section className="services">
        <div className="container">
          <div className="services__text">
            <p>
              Ласкаво просимо на сайт нашого СТО, що спеціалізується на установці, обслуговуванні та ремонті ГБО (пропан-бутану та метану), автоелектрики та систем охолодження автомобілів! Ми маємо
              багаторічний досвід роботи та високу кваліфікацію, що гарантує надійність та якість виконанних робіт. Довіряючи нам, ви вибираєте якість, безпеку та професійний підхід до кожного етапу
              роботи з вашим автомобілем.
            </p>
          </div>
          <h2 className="services__title">Повний спектр послуг</h2>
          <div className="services__cards">
            <div className="services__card">
              <div className="services__card-img">
                <img src={services_1} alt="Ілюстрація роботи механіка" />
              </div>
              <Link to={"/services/gbo"} className="services__card-link">
                <h3 className="services__card-title">ГБО</h3>
              </Link>
            </div>
            <div className="services__card">
              <div className="services__card-img">
                <img src={services_2} alt="Ілюстрація роботи механіка" />
              </div>
              <Link to={"/services/autoelectric"} className="services__card-link">
                <h3 className="services__card-title">Автоелектрика</h3>
              </Link>
            </div>
            <div className="services__card">
              <div className="services__card-img">
                <img src={services_3} alt="Ілюстрація роботи механіка" />
              </div>
              <Link to={"/services/cooling-system"} className="services__card-link">
                <h3 className="services__card-title">Система охолодження</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
