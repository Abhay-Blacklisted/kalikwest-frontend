import { Container } from "react-bootstrap";
import IndustryCard from "@/components/Cards/IndustryCard/IndustryCard";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { useRef } from "react";
import styles from "./IndustrySection.module.scss"
import Skeleton from "react-loading-skeleton";



const IndustrySection = ({ 
  industries = [],
  heading,
  subHeading,
  description,
  loading,
  error = null
 }) => {

    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const showSkeletons = loading && industries.length === 0;

  return (

    <Container className={styles.IndustryContainer}>
   {showSkeletons ? (
        <div className="text-center mb-40 overflow-hidden">
                <Skeleton width={220} height={46} />
                <Skeleton width={820} height={70} />
                <Skeleton width={820} height={24} />
              </div>
                ) : error ? (  <div className="text-center text-red w-100 d-flex justify-content-center primary-description">
                  Oops! Section couldn’t load. Please try again later.
                </div>) : (
                    <SectionHeader
                    subHeading={subHeading}
                    heading={heading}
                    description={description}
                    />
                      )}
        {showSkeletons ? (
                    <Skeleton
                             height={430}
                             borderRadius={14}
                             baseColor="#e9e8ee"
                             highlightColor="#f4f3f8"
                             style={{ width: "100%", opacity: 0.7 }}
                             className="m-60"
                           />
        ) : (
      <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={30}
      className="m-60"
      onBeforeInit={(Swiper) => {
        Swiper.params.navigation.prevEl = prevRef.current;
        Swiper.params.navigation.nextEl = nextRef.current;

      }}
      navigation= {{
        prevEl : prevRef.current,
        nextEl : nextRef.current
      }}
      >

        {industries.map((item,index) => (
          <SwiperSlide  key={`${index}-${item.id}`}>
            <div className={styles.IndustryCard}>
          <IndustryCard
            image={item.image}
            title={item.title}
            description={item.description}
            subTitle="Clients"
            clientImages={item.clientImages}
          />
           </div>
          </SwiperSlide>
        ))}
                 
                      {/* Swiper Custom Navigation */}

<div className={`${styles.customButtonContainer} gap-3 d-flex position-absolute top-0 end-0`}>
  <button ref={prevRef} aria-label="previous" className={`${styles.buttonDesign}`}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M7.81078 11.9568L16.1703 3.99181C16.3098 3.85884 16.4951 3.78467 16.6878 3.78467C16.8805 3.78467 17.0658 3.85884 17.2053 3.99181L17.2143 4.00081C17.2821 4.06527 17.3362 4.14286 17.3731 4.22886C17.41 4.31486 17.429 4.40747 17.429 4.50106C17.429 4.59465 17.41 4.68726 17.3731 4.77326C17.3362 4.85926 17.2821 4.93685 17.2143 5.00131L9.34228 12.5013L17.2143 19.9983C17.2821 20.0628 17.3362 20.1404 17.3731 20.2264C17.41 20.3124 17.429 20.405 17.429 20.4986C17.429 20.5921 17.41 20.6848 17.3731 20.7708C17.3362 20.8568 17.2821 20.9343 17.2143 20.9988L17.2053 21.0078C17.0658 21.1408 16.8805 21.215 16.6878 21.215C16.4951 21.215 16.3098 21.1408 16.1703 21.0078L7.81078 13.0428C7.73726 12.9728 7.67873 12.8885 7.63874 12.7952C7.59875 12.7018 7.57812 12.6014 7.57812 12.4998C7.57812 12.3983 7.59875 12.2978 7.63874 12.2044C7.67873 12.1111 7.73726 12.0269 7.81078 11.9568Z" fill="#101010"/>
</svg> </button>
  <button ref={nextRef} aria-label="next" className={`${styles.buttonDesign}`}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M17.1931 11.9568L8.83363 3.99181C8.69415 3.85884 8.50884 3.78467 8.31613 3.78467C8.12342 3.78467 7.93811 3.85884 7.79863 3.99181L7.78963 4.00081C7.72178 4.06527 7.66775 4.14286 7.63083 4.22886C7.59391 4.31486 7.57487 4.40747 7.57487 4.50106C7.57487 4.59465 7.59391 4.68726 7.63083 4.77326C7.66775 4.85926 7.72178 4.93685 7.78963 5.00131L15.6616 12.5013L7.78963 19.9983C7.72178 20.0628 7.66775 20.1404 7.63083 20.2264C7.59391 20.3124 7.57487 20.405 7.57487 20.4986C7.57487 20.5921 7.59391 20.6848 7.63083 20.7708C7.66775 20.8568 7.72178 20.9343 7.78963 20.9988L7.79863 21.0078C7.93811 21.1408 8.12342 21.215 8.31613 21.215C8.50884 21.215 8.69415 21.1408 8.83363 21.0078L17.1931 13.0428C17.2666 12.9728 17.3252 12.8885 17.3652 12.7952C17.4052 12.7018 17.4258 12.6014 17.4258 12.4998C17.4258 12.3983 17.4052 12.2978 17.3652 12.2044C17.3252 12.1111 17.2666 12.0269 17.1931 11.9568Z" fill="#101010"/>
</svg> </button>
</div>
               
            </Swiper>
)}
    </Container>
  
  );
};


export default IndustrySection;