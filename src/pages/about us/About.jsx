import styles from "./about.module.css";
import Hero from "../../components/hero/Hero";

const About = () => {
  return (
    <main className="main">
      <Hero title="Про нас" />
      <section className="advantages">
        <div className="container">
          <div className={styles.advantages__texts}>
            <p className={styles.advantages__textsItem}>
              <span>Професіоналізм:</span> Наші фахівці мають глибокі знання та досвід у галузі обслуговування та налаштування ГБО. Ми уважно підходимо до кожного автомобіля, забезпечуючи точне
              налаштування та високу продуктивність обладнання.
            </p>
            <p className={styles.advantages__textsItem}>
              <span>Відповідальність:</span> Ми розуміємо важливість безпеки, тому ретельно перевіряємо всі компоненти системи ГБО, усуваємо будь-які несправності та проводимо регулярне обслуговування
              з урахуванням усіх технічних норм.
            </p>
            <p className={styles.advantages__textsItem}>
              <span>Комплексний підхід:</span> Від встановлення та налаштування до ремонту та модернізації – ми надаємо повний спектр послуг для вашого комфорту та економії. У нас є рішення для
              будь-яких запитів щодо обслуговування ГБО.
            </p>
            <p className={styles.advantages__textsItem}>
              <span>Індивідуальні консультації:</span> Ми завжди готові надати професійні поради щодо експлуатації ГБО та підібрати найкращі рішення для вашого автомобіля.
            </p>
          </div>
        </div>
      </section>
      {/* <section className={styles.our_work}>
        <div className="container">
          <h3 className={styles.about__title}>Наша робота</h3>
          <div className={styles.about__cards}>
            <div className={styles.about__card}>
              <div className={styles.about__cardImg}>
                <img src={our_work1} alt="Монтаж газових форсунок" />
              </div>
              <p className={styles.about__cardTitle}>Монтаж газових форсунок</p>
            </div>

            <div className={styles.about__card}>
              <div className={styles.about__cardImg}>
                <img src={our_work2} alt="Монтаж газового редуктора" />
              </div>
              <p className={styles.about__cardTitle}>Монтаж газового редуктора</p>
            </div>

            <div className={styles.about__card}>
              <div className={styles.about__cardImg}>
                <img src={our_work3} alt="Монтаж заправного пристрою" />
              </div>
              <p className={styles.about__cardTitle}>Монтаж заправного пристрою</p>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default About;
