import React, { useState, useRef, useEffect } from "react";
import "./rectangle.css";

const Rectangle3 = () => {
  const divRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollPoints = [0, 600, 1200, 1800, 2400]; // Scroll positions where height changes
    const heightPoints = [0, 50, 200, 360, 500]; // Corresponding height values for each scroll position

    let height = 0;
    for (let i = 1; i < scrollPoints.length; i++) {
      if (scrollPosition >= scrollPoints[i - 1] && scrollPosition < scrollPoints[i]) {
        const scrollRange = scrollPoints[i] - scrollPoints[i - 1];
        const heightRange = heightPoints[i] - heightPoints[i - 1];
        const scrolledAmount = scrollPosition - scrollPoints[i - 1];
        const heightIncrease = (scrolledAmount / scrollRange) * heightRange;
        height = heightPoints[i - 1] + heightIncrease;
        break;
      }
    }

    divRef.current.style.height = `${height}px`;
  }, [scrollPosition]);

  return (
    <div class="landing-102">
    <img
        class="landing-102-child"
        alt=""
        src="rectangle-1@2x.png"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
        }}
      />
      <div
        class="we-help-you9"
        style={{
          top: "40%",
          left: "50%",
          marginTop: scrollPosition >= 600 ? "-100px" : "10px",
          transform: "translate(-50%, -50%)",
          fontFamily:"Poppins",
          transition: "margin-top 0.5s ease",
        }}
      >
        WE HELP YOU SCALE
      </div>
      <div
        class="carefully-planned-user4"
        style={{
          top: "77%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Carefully planned user acquisition strategies laid out by our in-house
        team of experts results in increased user base and downloads for your
        apps and websites almost overnight, we leave no stone unturned
      </div>
      <div class="rectangle-parent6">
        <div
          class="group-child16"
          style={{ marginLeft: "-10rem", height: "500px", marginTop: "-4rem" }}
        ></div>
        <div
          class="group-child17"
          style={{
            left: "-10rem",
            marginTop: "-4rem",
            height: `${scrollPosition * 0.1}px`,
            transition: "height 0.5s ease",
          }}
          ref={divRef}
        ></div>
      </div>
    </div>
  );
};

export default Rectangle3;
