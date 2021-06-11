import React from "react";

function Slide({ title, img, subtitle, label, label1 }) {
  return (
    <div>
      <div className="box">
        <h3 className="title">{title}</h3>
        <p className="subtitle">{subtitle}</p>
        <div>
          <button className="btn">{label}</button>
          {label1 ? <button className="btn">{label1}</button> : null}
        </div>
      </div>
      <img className="banner" src={img} />
    </div>
  );
}
export default Slide;
