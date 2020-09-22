import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/HorizontalSlider.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const HorizontalSlider = ({ ArraySlide, title, linktext, to, position }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div
      className="horizontalslider"
      style={
        position === "last"
          ? { margin: 0, paddingTop: "40px", paddingBottom: "40px" }
          : null
      }
    >
      {position === "last" ? <hr></hr> : null}
      <div
        className="horizontalslider__title"
        style={position === "last" ? { justifyContent: "center" } : null}
      >
        <h5>{title}</h5>
        <Link to={to} className="horizontalslider__title__link">
          {linktext}
        </Link>
      </div>

      <div className="horizontalslider__btnContainer">
        {position === "last" ? (
          <Button className="horizontalslider__button">
            Sign in to see personalized recommendations
          </Button>
        ) : null}
      </div>

      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {ArraySlide.map((slide) => (
          <Link to={`/product/${slide.id}`} key={slide.id}>
            <img src={slide.src} />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default HorizontalSlider;
