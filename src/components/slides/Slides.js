import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import { productContext } from "../../context/ProductContext";
import "./Slide.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Slides = () => {
  const [slide, setSlide] = useState(0);
  const { allProducts } = useContext(productContext);

  return (
    <div className="section">
      <div className="container">
        <Swiper navigation autoplay className="slider" >
          {allProducts.map((product) => {
            return (
              <SwiperSlide className="slide">
                <img src={product.image} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        
      </div>
    </div>
  );
};

export default Slides;
