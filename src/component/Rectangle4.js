import React, { useState, useRef, useEffect } from "react";
import "./phase.css";

const Rectangle4 = () => {
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
    const scrollPositions = [200, 400, 800]; // Scroll positions where the height changes
    const heights = [0, 50, 200, 360, 500]; // Corresponding heights for each scroll position

    let height;
    if (scrollPosition <= scrollPositions[0]) {
      height = heights[0];
    } else if (scrollPosition >= scrollPositions[scrollPositions.length - 1]) {
      height = heights[heights.length - 1];
    } else {
      for (let i = 0; i < scrollPositions.length - 1; i++) {
        if (
          scrollPosition >= scrollPositions[i] &&
          scrollPosition < scrollPositions[i + 1]
        ) {
          const scrollRange = scrollPositions[i + 1] - scrollPositions[i];
          const heightRange = heights[i + 1] - heights[i];
          const scrolledAmount = scrollPosition - scrollPositions[i];
          const heightIncrease = (scrolledAmount / scrollRange) * heightRange;
          height = heights[i] + heightIncrease;
          break;
        }
      }
    }

    divRef.current.style.height = `${height}px`;
  }, [scrollPosition]);

  return (
    <div className="landing-109">
    <img class="vector-icon16" alt="" src="vector4.svg" />

      <div class="landing-109-child"></div>

      <img class="landing-109-item" alt="" src="vector-9.svg" />

      <img class="landing-109-inner" alt="" src="polygon-1.svg" />

      <img class="landing-109-child1" alt="" src="polygon-2.svg" />

      <img class="landing-109-child2" alt="" src="star-15.svg" />

      <img class="landing-109-child3" alt="" src="star-15.svg" />

      <img class="landing-109-child4" alt="" src="star-17.svg" />

      <img class="landing-109-child5" alt="" src="star-18.svg" />

      <img class="landing-109-child6" alt="" src="star-19.svg" />

      <img class="landing-109-child7" alt="" src="star-20.svg" />

      <img class="landing-109-child8" alt="" src="star-21.svg" />

      <img class="landing-109-child9" alt="" src="star-22.svg" />

      <img class="landing-109-child10" alt="" src="star-23.svg" />

      <img class="landing-109-child11" alt="" src="star-24.svg" />

      <img class="landing-109-child12" alt="" src="star-25.svg" />

      <img class="landing-109-child13" alt="" src="star-26.svg" />

      <img class="landing-109-child14" alt="" src="star-27.svg" />

      <img class="landing-109-child15" alt="" src="star-28.svg" />

      <img class="vector-icon17" alt="" src="vector1.svg" />

      <img class="vector-icon18" alt="" src="vector2.svg" />

      <img class="vector-icon19" alt="" src="vector3.svg" />

      <img class="landing-109-child16" alt="" src="ellipse-61.svg" />

      <img class="landing-109-child17" alt="" src="ellipse-62.svg" />

      <img class="landing-109-child18" alt="" src="vector-10.svg" />

      <div
        class="we-help-you4"
        style={{
          top: "50%",
          left: "50%",
          marginTop: scrollPosition >= 600 ? "-100px" : "10px",
          transform: "translate(-50%, -50%)",
           transition: "margin-top 0.5s ease",
          fontFamily:"Poppins"
        }}
      >
        WE HELP YOU GROW
      </div>
      <div
        class="while-we-already4"
        style={{
          top: "77%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        While we already took care of your pre-seed investment needs, our team
        of Investment Consultants would help you raise more money for different
        stages of your startup and catapult your business to the next level
        through our network of 2000+ VC firms and Angel Investors.
      </div>
      <div className="rectangle-parent1">
        <div
          className="group-child6"
          style={{ marginLeft: "-10rem", height: "460px", marginTop: "-4rem" }}
        ></div>
        <div
          className="group-child7"
          style={{
            marginLeft: "-10rem",
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

export default Rectangle4;
