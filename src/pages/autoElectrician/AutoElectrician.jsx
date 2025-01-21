import Hero from "../../components/hero/Hero";
import styles from "../../scss/servicesPage.module.css";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import elect_1 from "../../images/elect_1.jpg";
import elect_2 from "../../images/elect_2.jpg";
import elect_3 from "../../images/elect_3.jpg";
import elect_4 from "../../images/elect_4.jpg";
import elect_5 from "../../images/elect_5.jpg";
import elect_6 from "../../images/elect_6.jpg";
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
                <img className={styles.img} src={elect_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={elect_2} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={elect_3} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={elect_4} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={elect_5} />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.img} src={elect_6} />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
};

export default AutoElectrician;
