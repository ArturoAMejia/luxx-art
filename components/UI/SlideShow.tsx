import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./SlideShow.module.css";

const fadeImages = [
  {
    url: "/img/carrusel/c2.jpg",
    caption: "Second Slide",
  },
  {
    url: "/img/carrusel/c2.jpeg",
    caption: "Second Slide",
  },
  {
    url: "/img/carrusel/c3.jpeg",
    caption: "Second Slide",
  },
  {
    url: "/img/carrusel/c5.jpeg",
    caption: "Second Slide",
  },
  {
    url: "/img/carrusel/c5.jpg",
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
