import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "../elements/slider_objects";
import "../styles/Slider.css";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextIcon from "@material-ui/icons/NavigateNextOutlined";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBeforeOutlined";

const SliderComponent = () => {
  return (
    <Carousel
      className="carousel"
      indicators={false}
      nextIcon={
        <IconButton>
          <NavigateNextIcon className="carousel__next" />
        </IconButton>
      }
      prevIcon={
        <IconButton>
          <NavigateBeforeIcon className="carousel__prev" />
        </IconButton>
      }
    >
      {slides.map((slide) => (
        <Carousel.Item>
          <img
            key={slide.id}
            className="d-block w-100"
            src={slide.src}
            alt={slide.alt}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SliderComponent;
