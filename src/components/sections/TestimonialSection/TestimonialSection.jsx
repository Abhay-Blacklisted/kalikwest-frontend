import TestimonialCard from "@/components/Cards/TestimonialCard/TestimonialCard";
import styles from "./TestimonialSection.module.scss";
import { Container} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";



const TestimonialSection = ({testimonials =[],  error}) => {
    const nextRef = useRef(null);
    const prevRef = useRef(null);

  //  Show error first
  if (error) {
    return (
      <section className={styles.testimonialSectionSlider}>
        <div className="text-center w-100 py-4 primary-description">
          Oops! Testimonials couldn’t load. Please try again later.
        </div>
      </section>
    );
  }

    return (
      <section className={`${styles.testimonialSectionSlider} position-relative`}>
        <Container>
          <div className={`${styles.navigationsCustom}`}>
            <button ref={prevRef} aria-label="previous" className={`${styles.customBtn}`}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.29406 8.00023L10.5874 11.2936L9.65406 12.2402L5.41406 8.00023L9.65406 3.76023L10.5874 4.7069L7.29406 8.00023Z" fill="white"/>
            </svg>
            </button>

            <button ref={nextRef} aria-label="Next" className={`${styles.customBtn}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
           <path d="M8.7074 8.00023L5.41406 4.7069L6.3474 3.76023L10.5874 8.00023L6.3474 12.2402L5.41406 11.2936L8.7074 8.00023Z" fill="white"/>
            </svg>
            </button>
            </div>

      <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
      navigation = {{
        prevEl : prevRef.current,
        nextEl : nextRef.current
      }}

      breakpoints = {{
        768: {
            slidesPerView: 2
        }
      }}>     
                {testimonials.map((item) => (
                          <SwiperSlide key={item.id} >
                            <TestimonialCard
                            text={item.text}
                            image={item.image}
                            userTitle={item.userTitle}
                           designation={item.designation}/>
                            </SwiperSlide>
                ))}             
            </Swiper>
        </Container>

      </section>
    )
}

export default TestimonialSection;