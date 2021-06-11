import React from "react";

const Dot = ({ active }) => (
  <span className="dot" style={{ opacity: active ? "0.3" : "1" }} />
);

const Dots = ({ slides, current }) => (
  <div className="dots">
    {slides.map((slide, i) => (
      <Dot key={slide} active={current === i} />
    ))}
  </div>
);

export default Dots;
