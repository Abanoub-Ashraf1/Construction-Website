import React from "react";

export default function Topimage(props) {
  return (
    <>
      <section
        className={`top-image d-flex`}
        style={{ backgroundImage: `url(${props.image})` }}>
        <div className="container position-relative">
          <div className="top-text">
            <h2 className="fs-1">{props.text1}</h2>
            <p className="fs-5 fw-light">{props.text2}</p>
          </div>
          <div className="contact-card shadow p-3 mb-5 bg-body-tertiary position-absolute">
            <div className="p-2 ps-4">
              <p className="cont-info">
                Call Us Today
                <br />
                <span className="cont-info fw-bolder fs-3">
                  +1 123 4567 789
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
