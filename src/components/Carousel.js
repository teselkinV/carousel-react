import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Dots from "./Dots";

import Slide from "./Slide";

function Carousel() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    fetch("http://gastronomia-api.herokuapp.com/slides")
      .then((res) => res.json())
      .then((data) => {
        setSlides(data);
        console.log("DATA", data);
      })
      .catch((error) => console.log(error));
  }, []);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section>
      <div>
        <IoIosArrowBack onClick={prevSlide} className="arrow left-arrow" />
        <IoIosArrowForward onClick={nextSlide} className="arrow right-arrow" />
      </div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          {index === current && (
            <Slide
              key={slide.id}
              title={slide.title}
              subtitle={slide.subhead}
              img={slide.media.desktop}
              label={slide.cta[0].label}
              label1={slide.cta[1].label}
            />
          )}
        </div>
      ))}
      <Dots slides={slides} current={current} />
    </section>
  );
}

export default Carousel;
