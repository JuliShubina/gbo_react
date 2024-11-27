import React from "react";
import Hero from "../../components/hero/Hero";
import styles from "./contacts.module.css";

const Contacts = () => {
  return (
    <main className="main">
      <Hero title="Наші контакти" />
      <section className="contacts">
        <div className="container">
          <div className={styles.workingHours}>
            <p>
              <span>
                Щоб записатись, зателефонуйте або напишіть нам:{" "}
                <a className={styles.workingHours__phone} href="tel:+380992665168">
                  +38 099 548 57 67
                </a>
              </span>
            </p>
            <p>Понеділок – п'ятниця: 9:00–15:00</p>
            <p>Субота: 9:00–15:00</p>
            <p>Неділя: вихідний</p>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="container">
          <div className={styles.map__content}>
            <p className={styles.map__contentText}>
              <span>Ми знаходимося за адресою м. Дніпро, вул. Марії Лисиченко, 10. З нетерпінням чекаємо на вас!</span>
            </p>
            <div className={styles.map_responsive}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.5999247731484!2d35.03440857594106!3d48.5217336243398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958bea63a0a01%3A0xc90a5f6c52c074c5!2z0YPQuy4g0JzQsNGA0LjQuCDQm9C40YHQuNGH0LXQvdC60L4sIDEwLCDQlNC90LXQv9GALCDQlNC90LXQv9GA0L7Qv9C10YLRgNC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1730793941810!5m2!1sru!2sua"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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

export default Contacts;
