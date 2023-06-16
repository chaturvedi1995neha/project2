import React, { useState } from "react";
import "./phase4.css";
import Phase5 from "./Phase5";

function Phase4() {
  const [isHovered, setIsHovered] = useState(false);
  const [showPhase5, setShowPhase5] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLetsTalkClick = () => {
    setShowPhase5(true);
  };

  return (
    <div className="landing-115">
      {/* <img
        class="incuwise-logo-final-14"
        alt=""
        src="incuwise-logo-final-11@2x.png"
      />
      <div class="contact4" id="contactText">Contact</div> */}
      {!showPhase5 && (
        <>
          <i className="got-an-idea1">GOT AN IDEA?</i>
          <div
            id="letsTalkText"
            className={`lets-talk1 ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleLetsTalkClick}
          >
            Let’s Talk
          </div>
          {isHovered && (
            <img
              src="line3.png"
              alt="Your Image"
              style={{
                marginLeft: "38rem",
                marginBottom: "-21.5rem",
                color: "white",
              }}
            />
          )}
        </>
      )}

      {showPhase5 && <Phase5 />}
      <div className="landing-115-child"></div>
    </div>
  );
}

export default Phase4;