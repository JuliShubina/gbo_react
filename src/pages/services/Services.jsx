import React from "react";
import styles from "./services.module.css";
import HeroIcon from "../../components/hero icon/HeroIcon";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <main className="main">
      <section className={`${styles.hero} ${styles.intersection} ${styles.hero__background}`}>
        {/* <section className="hero intersection hero__background"> */}
        <div className="container">
          <div className={styles.hero__content}>
            <h1 className={styles.hero__contentTitle}>Послуги</h1>
            <HeroIcon />
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className={styles.services__cards}>
            <div className={styles.services__card}>
              <h3 className={styles.services__cardTitle}>Налаштування та діагностика ГБО</h3>
              <FontAwesomeIcon className={styles.iconArrow} icon={faChevronDown} />
              <ul id="arrow1" className={styles.services__text}>
                <li className={styles.services__textItem}>Налаштування електронного блоку керування для оптимальної роботи на газі.</li>
                <li className={styles.services__textItem}>Налаштування подачі газу для економії палива та збереження потужності в системах євро 2.</li>
                <li className={styles.services__textItem}>Коригування роботи форсунок та редуктора.</li>
                <li className={styles.services__textItem}>Комп'ютерна діагностика роботи газового обладнання євро 2 та євро 4.</li>
                <li className={styles.services__textItem}>Діагностика мультиклапану та клапанів безпеки.</li>
                <li className={styles.services__textItem}>Діагностика стану газового балона (на наявність корозії чи пошкоджень).</li>
                <li className={styles.services__textItem}>Перевірка на витік газу з використанням газоаналізаторів.</li>
              </ul>
            </div>

            <div className={styles.services__card}>
              <h3 className={styles.services__cardTitle}>Обслуговування та заміна компонентів ГБО</h3>
              <FontAwesomeIcon className={styles.iconArrow} icon={faChevronDown} />
              {/* <i data-target="arrow2" className="fa-solid fa-chevron-down icon-arrow"></i> */}
              <ul id="arrow2" className={styles.services__text}>
                <li className={styles.services__textItem}>Регулярне технічне обслуговування ГБО кожні 10-15 тисяч кілометрів.</li>
                <li className={styles.services__textItem}>Заміна фільтрів грубого та тонкого очищення газу.</li>
                <li className={styles.services__textItem}>Заміна свічок запалювання (рекомендується використовувати спеціальні свічки для ГБО).</li>
                <li className={styles.services__textItem}>Перевірка та чищення газових форсунок.</li>
                <li className={styles.services__textItem}>Діагностика та чищення редуктора.</li>
                <li className={styles.services__textItem}>Перевірка тиску в системі та герметичності всіх з'єднань.</li>
                <li className={styles.services__textItem}>Заміна редуктора (випарника).</li>
                <li className={styles.services__textItem}>Заміна чи ремонт газових форсунок.</li>
                <li className={styles.services__textItem}>Заміна чи ремонт газового мультиклапану.</li>
                <li className={styles.services__textItem}>Заміна або ремонт перемикача палива (газ/бензин).</li>
                <li className={styles.services__textItem}>Заміна чи ремонт електронного блоку керування (ЕБУ).</li>
              </ul>
            </div>

            <div className={styles.services__card}>
              <h3 className={styles.services__cardTitle}>Модернізація ГБО та додаткові послуги</h3>
              <FontAwesomeIcon className={styles.iconArrow} icon={faChevronDown} />
              {/* <i data-target="arrow3" className="fa-solid fa-chevron-down icon-arrow"></i> */}
              <ul id="arrow3" className={styles.services__text}>
                <li className={styles.services__textItem}>Встановлення додаткових датчиків та систем контролю.</li>
                <li className={styles.services__textItem}>Модернізація системи для покращення продуктивності та економічності.</li>
                <li className={styles.services__textItem}>Перенесення газового балона (наприклад, з багажника під днище).</li>
                <li className={styles.services__textItem}>Зняття та демонтаж ГБО, якщо потрібне повернення автомобіля на роботу тільки на бензині.</li>
                <li className={styles.services__textItem}>Консультації з питань експлуатації ГБО.</li>
                <li className={styles.services__textItem}>Швидка діагностика та усунення витоків газу.</li>
                <li className={styles.services__textItem}>Постгарантійне обслуговування та ремонт компонентів ГБО.</li>
                <li className={styles.services__textItem}>Комп'ютерна діагностика електронних систем автомобілів.</li>
                <li className={styles.services__textItem}>Промивання бензинових форсунок.</li>
                <li className={styles.services__textItem}>Діагностика та промивання системи охолодження автомобіля.</li>
              </ul>
            </div>
          </div>
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
