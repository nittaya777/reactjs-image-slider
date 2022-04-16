import ImageData from "../ImageData";
import "./ImageSlider.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useState } from "react";
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const imageLength = ImageData.length;
  const prevSlide = () => {
    current === 0 ? setCurrent(0) : setCurrent(current - 1);
  };
  const nextSlide = () => {
    current === imageLength - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  return (
    <section className="slider-content">
      <div className="slider">
        <BsFillArrowLeftCircleFill
          className={current===0?'slider-nav left-arrow disabled':'slider-nav left-arrow'}
          onClick={prevSlide}
        />
        <BsFillArrowRightCircleFill
          className="slider-nav right-arrow"
          onClick={nextSlide}
        />
        {ImageData.map((data, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div>
                  <img src={data.image} alt={data.title} className="image" />
                  <p>{data.title}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ImageSlider;
