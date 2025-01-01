import SlideTopping from "./toppingslide";
import { useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ToppingList = ({ productData, quantityMap, handleQuantityChange }) => {
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    desktop: { breakpoint: { max: 1024, min: 800 }, items: 3 },
    tablet: { breakpoint: { max: 800, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // 화면 크기 변경 시 첫 번째 슬라이드로 이동
  useEffect(() => {
    const goToFirstSlide = () => {
      if (carouselRef.current) {
        carouselRef.current.goToSlide(0);
      }
    };

    //  초기화 시
    goToFirstSlide();

    window.addEventListener("resize", goToFirstSlide);
    return () => {
      window.removeEventListener("resize", goToFirstSlide);
    };
  }, []);

  return (
    <Carousel
      ref={carouselRef} // Carousel에 ref 연결
      responsive={responsive}
      containerClass="carousel-container"
      itemClass="carousel-item"
    >
      {productData.map((item) => (
        <SlideTopping
          key={item.id}
          item={item}
          quantityMap={quantityMap}
          handleQuantityChange={handleQuantityChange}
        />
      ))}
    </Carousel>
  );
};

export default ToppingList;
