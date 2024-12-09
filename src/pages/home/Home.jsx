import React, { useEffect } from "react";
import "./style.css";
import "../../scss/base.css";
import services_1 from "../../images/services_1.webp";
import services_2 from "../../images/services_2.jpg";
import services_3 from "../../images/services_3.jpg";
import HeroIcon from "../../components/hero icon/HeroIcon";
import Hero from "../../components/hero/Hero";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка страницы к началу /** ? может и не нужна?**/
  }, []);
  return (
    <main className="main">
      {/* <section className="hero intersection hero__background">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__content-title">ГБО для вашого авто</h1>
            <h2>надійність, економія, комфорт</h2>
            <HeroIcon />
          </div>
        </div>
      </section> */}
      <Hero styleBg={{ height: "100vh" }} beforeHeight="100vh" title="ГБО для вашого авто" />
      <section className="services">
        <div className="container">
          <h2 className="services__title">Повний спектр послуг</h2>
          <div className="services__cards">
            <div className="services__card">
              <div className="services__card-img">
                <img src={services_1} alt="Ілюстрація роботи механіка" />
              </div>
              <h3 className="services__card-title">Налаштування та діагностика ГБО</h3>
            </div>
            <div className="services__card">
              <div className="services__card-img">
                <img src={services_2} alt="Ілюстрація роботи механіка" />
              </div>
              <h3 className="services__card-title">Обслуговування та заміна компонентів ГБО</h3>
            </div>
            <div className="services__card">
              <div className="services__card-img">
                <img src={services_3} alt="Ілюстрація роботи механіка" />
              </div>
              <h3 className="services__card-title">Модернізація ГБО та додаткові послуги</h3>
            </div>
          </div>
          <div className="services__text">
            <p>
              Ласкаво просимо на сайт нашого СТО, що спеціалізується на установці, обслуговуванні та ремонті газобалонного обладнання (ГБО) для автомобілів з використанням пропан-бутану та метану!
            </p>
            <p>
              Ми пропонуємо повний спектр послуг з обслуговування ГБО: від встановлення системи до її регулярного технічного обслуговування та діагностики. Ми маємо багаторічний досвід роботи та
              високу кваліфікацію, що гарантує надійність та безпеку вашого автомобіля при використанні газу як альтернативного виду палива.
            </p>

            <p>Довіряючи нам, ви вибираєте якість, безпеку та професійний підхід до кожного етапу роботи з вашим автомобілем.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
