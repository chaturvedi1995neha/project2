import React, { useRef, useEffect, useState } from "react";
import "./dev.css";

function Rectangle2() {
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

  // useEffect(() => {
  //   const scrollPositions = [200, 600, 1000]; // Scroll positions where the height changes
  //   const heights = [0,50, 100, 260, 500]; // Corresponding heights for each scroll position

  //   let height;
  //   if (scrollPosition <= scrollPositions[0]) {
  //     height = heights[0];
  //   } else if (scrollPosition >= scrollPositions[scrollPositions.length - 1]) {
  //     height = heights[heights.length - 1];
  //   } else {
  //     for (let i = 0; i < scrollPositions.length - 1; i++) {
  //       if (scrollPosition >= scrollPositions[i] && scrollPosition < scrollPositions[i + 1]) {
  //         const scrollRange = scrollPositions[i + 1] - scrollPositions[i];
  //         const heightRange = heights[i + 1] - heights[i];
  //         const scrolledAmount = scrollPosition - scrollPositions[i];
  //         const heightIncrease = (scrolledAmount / scrollRange) * heightRange;
  //         height = heights[i] + heightIncrease;
  //         break;
  //       }
  //     }
  //   }

  //   divRef.current.style.height = `${height}px`;
  // }, [scrollPosition]);

  return (
    <div className="landing-97">
      <img
        className="landing-97-child"
        alt=""
        src="rectangle-11@2x.png"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="we-market-your4"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: scrollPosition >= 600 ? "-100px" : "10px",
          transition: "margin-top 0.5s ease",
        }}
      >
        WE MARKET YOUR PRODUCT
      </div>
      <div
        className="if-an-investment4"
        style={{
          top: "77%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        If an investment and a technical team wasnʼt enough, we also give you a
        full stack digital marketing team consisting of social media experts,
        graphic designers, PR consultants and anything else you could possibly
        need to get the word out there about your product.
      </div>
      <div className="rectangle-parent16">
        <div
          className="group-child36"
          style={{ left: "-12rem", marginTop: "-4rem", height: "500px" }}
        ></div>
        <div
          className="group-child37"
          style={{
            // left: "-12rem",
            // marginTop: "-4rem",
            height: `${scrollPosition * 0.1}px`,
            transition: "height 0.5s ease",
          }}
          ref={divRef}
        ></div>
      </div>
    </div>
  );
}

export default Rectangle2;
