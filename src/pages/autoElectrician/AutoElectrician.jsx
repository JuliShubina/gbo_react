import Hero from "../../components/hero/Hero";
import styles from "../../scss/servicesPage.module.css";
// import elect_1 from "../../images/elect_1.jpg";
// import elect_2 from "../../images/elect_2.jpg";
// import elect_3 from "../../images/elect_3.jpg";
// import elect_4 from "../../images/elect_4.jpg";
// import elect_5 from "../../images/elect_5.jpg";
// import elect_6 from "../../images/elect_6.jpg";
import Spoiler from "../../components/spoiler/Spoiler";

const AutoElectrician = () => {
  return (
    <>
      <main>
        <Hero title="Автоелектрик" />
        <section className="electrician">
          <div className="container">
            <p className={styles.text}>
              Ми пропонуємо повний спектр послуг з обслуговування автомобільної електрики: від діагностики та ремонту до налаштування та заміни компонентів. Ми гарантуємо професійне виконання робіт,
              приділяючи увагу навіть найдрібнішим деталям, щоб забезпечити надійність та безпеку вашого автомобіля.
            </p>
            <Spoiler from="AutoElectrician" />
            <h3 className={styles.title}>Наша робота</h3>
          </div>
        </section>
      </main>
    </>
  );
};

export default AutoElectrician;
