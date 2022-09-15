import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./SlideShow.module.css";

const fadeImages = [
  {
    url: "/img/carrusel/collar.webp",
    caption: "Second Slide",
  },
  {
    url: "/img/carrusel/collar2.webp",
    caption: "Second Slide",
  },
  {
    url: "/img/carrusel/retrato1.webp",
    caption: "Second Slide",
  },
  {
    url: "/img/carrusel/retrato2.webp",
    caption: "Second Slide",
  },
  {
    url: "/img/carrusel/cover1.webp",
    caption: "Second Slide",
  },
];

export const SlideShow = () => {
  return (
    <Slide easing="ease" duration={5000} indicators>
      {fadeImages.map((image) => {
        return (
          <div className={styles[`each-slide`]} key={image.caption}>
            <div
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
};
