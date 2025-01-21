import Hero from "../../components/hero/Hero";
import Spoiler from "../../components/spoiler/Spoiler.jsx";
import styles from "../../scss/servicesPage.module.css";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cooler_1 from "../../images/cooler_1.png";
import cooler_2 from "../../images/cooler_2.png";
import cooler_3 from "../../images/cooler_3.png";
import cooler_4 from "../../images/cooler_4.png";
import cooler_5 from "../../images/cooler_5.png";
import cooler_6 from "../../images/cooler_6.png";

const CoolingSystem = () => {
  return (
    <>
      <main>
        <Hero title="Система охолодження" />
        <section className="coolingSystem">
          <div className="container">
            <p className={styles.text}>
              Ми пропонуємо повний спектр послуг з обслуговування систем охолодження. Наші співробітники мають великий досвід і професіоналізм, щоб гарантувати надійність і комфорт вашого авто.
            </p>
            <Spoiler from="CoolingSystem" />
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
                <img className={styles.img} src={cooler_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={cooler_2} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={cooler_3} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={cooler_4} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={cooler_5} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={cooler_6} />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
};

export default CoolingSystem;
