import Hero from "../../components/hero/Hero";
import Spoiler from "../../components/spoiler/Spoiler";
import styles from "../../scss/servicesPage.module.css";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gbo_1 from "../../images/gbo_1.jpg";
import gbo_2 from "../../images/gbo_2.jpg";
import gbo_3 from "../../images/gbo_3.jpg";
import gbo_4 from "../../images/gbo_4.jpg";
import gbo_5 from "../../images/gbo_5.jpg";

const GboPage = () => {
  return (
    <>
      <main>
        <Hero title="ГБО" />
        <section className="gbo">
          <div className="container">
            <p className={styles.text}>
              Ми пропонуємо повний спектр послуг з обслуговування ГБО: від встановлення системи до її регулярного технічного обслуговування та діагностики. Ми маємо багаторічний досвід роботи та
              високу кваліфікацію, що гарантує надійність та безпеку вашого автомобіля при використанні газу як альтернативного виду палива.
            </p>
            <Spoiler from="GboPage" />
            <h3 className={styles.title}>Наша робота</h3>
            <Swiper
              style={{ width: "100%", height: "500px", marginBottom: "20px" }}
              slidesPerGroup={1}
              slidesPerView={1}
              navigation={true}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              modules={[Keyboard, Navigation, Pagination]}
              onSwiper={(swiper) => console.log("Active Index:", swiper.activeIndex)}
              onSlideChange={(swiper) => console.log("Active Index:", swiper.activeIndex)}
            >
              <SwiperSlide>
                <img className={styles.img} src={gbo_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={gbo_2} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={gbo_3} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={gbo_4} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={gbo_5} />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
};

export default GboPage;
