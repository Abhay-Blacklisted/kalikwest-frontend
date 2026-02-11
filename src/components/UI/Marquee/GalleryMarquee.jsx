import Marquee from "react-fast-marquee";
import { useMemo } from "react";
import styles from './GalleryMarquee.module.scss';

const GalleryMarquee = ({
    images= [],
    speed=40,
}) => {
    
    if (!images.length) return null;
    const repeatedImages = useMemo(() => Array(6).fill(images).flat(), [images]);

    return (
        <>
        <div className={`${styles.marqueeContainer}`}>
            <Marquee
            speed={speed}
            pauseOnHover={true}           
            >
                {repeatedImages.map((item,index) => (
                    <div key={`${item.id}-${index}`} className={`${styles.marqueeItem} ${index % 2 !== 0 ? styles.offsetTop : "" }`}>
                  <img src={item.item} alt="" className={`img-fluid w-100`} style={{width: 318, height: 350}}/>
                    </div>
                ))}
            </Marquee>
        </div>
        </>
    )
}

export default GalleryMarquee;