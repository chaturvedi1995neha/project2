import React, { useEffect, useRef, useState } from "react";
import Rectangle1 from "./component/Rectangle1";
import Rectangle2 from "./component/Rectangle2";
import Rectangle3 from "./component/Rectangle3";
import Rectangle4 from "./component/Rectangle4";
import Phase3 from "./component/Phase3";
import Phase4 from "./component/Phase4";


const PHASE_1 = 300;
const PHASE_2 = 800;
const PHASE_3 = 1000;
const PHASE_4 = 1200;
const PHASE_5 = 1500;
function Apps() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const divRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const [displayText, setDisplayText] = useState("WE");
  const [showImage, setShowImage] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showThirdDiv, setShowThirdDiv] = useState(false);
  const [showFourthDiv, setShowFourthDiv] = useState(false);
  const [showFifthDiv, setShowFifthDiv] = useState(false);
  const [showSixDiv, setShowSixDiv] = useState(false);
  const [showSevenDiv, setShowSevenDiv] = useState(false);

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const currentWidth = parseInt(heroRef.current.style.width.replace("%", ""));
    console.log(currentWidth);
    const currentHeight = parseInt(
      heroRef.current.style.height.replace("vh", "")
    );

    if (scrollPosition > 0) {
      const percentDecrease = scrollPosition / 10;
      const newWidth = currentWidth - percentDecrease;

      if (scrollPosition <= PHASE_1) {
        if (scrollPosition < 100) {
          setDisplayText("we");
        }
        if (scrollPosition > 100 && scrollPosition < 200) {
          heroRef.current.style.width = `${Math.max(newWidth, 75)}%`;
          heroRef.current.style.height = `100vh`;
          setDisplayText("are");
        }
        if (scrollPosition >= 200) {
          const newHeight = Math.max(newWidth, 75);
          heroRef.current.style.height = `${newHeight}vh`;
          setDisplayText("incuwise");
        }
      }

      // ----------------------------------------------- PHASE 1 ENDS -----------------------------------------------

      if (scrollPosition > PHASE_1 && scrollPosition <= PHASE_2) {
        if (displayText.length > 0) {
          setDisplayText("");
        }

        if (heroRef.current.style.background !== "none") {
          heroRef.current.style.background = "none";
        }

        if (scrollPosition <= PHASE_2 / 2) {
          heroRef.current.style.width = `${
            currentWidth - scrollPosition * 0.1
          }px`;
          heroRef.current.style.height = `${
            currentWidth - scrollPosition * 0.1
          }px`;
        }

        if (scrollPosition > PHASE_2 / 2) {
          if (currentWidth <= 500) {
            heroRef.current.style.width = `${
              currentWidth + scrollPosition * 0.06
            }px`;
            heroRef.current.style.height = `${
              currentWidth + scrollPosition * 0.06
            }px`;
          }
          if (currentWidth > 500) {
            // show phase 2 assets
            setShowImage(true);
            if (imgRef.current) {
              imgRef.current.style.width = "100%";
              imgRef.current.style.height = "100%";
            }
          }else{
            if (divRef.current) {
              divRef.current.style.width = "0";
              divRef.current.style.height = "0";
              heroRef.current.style.border = "hidden";
            }
          }
          if (scrollPosition > 600) {
            setShowImage(false);
            if (divRef.current) {
              divRef.current.style.width = "0";
              divRef.current.style.height = "0";
              heroRef.current.style.border = "hidden";
            }
            setShowDiv(true);
          }else{
            setShowDiv(false);
           
          }
          if (scrollPosition > 680) {
            setShowDiv(false);
            if (divRef.current) {
              div1Ref.current.style.width = "0";
              div1Ref.current.style.height = "0";
            }
            setShowSecondDiv(true);
            if (div1Ref.current) {
              div1Ref.current.style.border = "none";
            }
          }else{
            setShowSecondDiv(false);
          }
          if (scrollPosition > 730) {
            setShowSecondDiv(false);
            if (div2Ref.current) {
              div2Ref.current.style.width = "0";
              div2Ref.current.style.height = "0";
            }
            setShowThirdDiv(true);
            if (div3Ref.current) {
              div3Ref.current.style.width = "100%";
              div3Ref.current.style.height = "100vh";
            }
          }else{
            setShowThirdDiv(false);
          }
          if (scrollPosition > 750) {
            setShowThirdDiv(false);
            if (div3Ref.current) {
              div3Ref.current.style.width = "0";
              div3Ref.current.style.height = "0";
            }
            setShowFourthDiv(true);
          }else{
            setShowFourthDiv(false);
          }
        }
      }
      // ----------------------------------------------- PHASE 2 ENDS -----------------------------------------------
      if (scrollPosition > PHASE_2 && scrollPosition <= PHASE_3) {
        if (scrollPosition > 800) {
          setShowFourthDiv(false);
          if (div4Ref.current) {
            div4Ref.current.style.width = "0";
            div4Ref.current.style.height = "0";
          }
          setShowFifthDiv(true);
          if (div5Ref.current) {
            div5Ref.current.style.width = "100%";
            div5Ref.current.style.height = "300VH";
          }
          heroRef.current.style.border="none"
        }
      }
      // ----------------------------------------------- PHASE 3 ENDS -----------------------------------------------
      if (scrollPosition > PHASE_3 && scrollPosition <= PHASE_4) {
        if (scrollPosition > 1100) {
        setShowFifthDiv(false);
        if (div5Ref.current) {
          div5Ref.current.style.width = "0";
          div5Ref.current.style.height = "0";
        }
        setShowSixDiv(true)
      }
      if (scrollPosition > 1150) {
        setShowSixDiv(false);
        if (div5Ref.current) {
          div6Ref.current.style.width = "0";
          div6Ref.current.style.height = "0";
        }
       
      }
    }
       // ----------------------------------------------- PHASE 4 ENDS -----------------------------------------------
       if (scrollPosition > PHASE_4 && scrollPosition <= PHASE_5) {
        if (scrollPosition > 1150) {
          setShowSevenDiv(true);
         
        }
       }
      } else {
      heroRef.current.style.background = "#1d428a";
      heroRef.current.style.width = "100%";
      heroRef.current.style.height = "100vh";
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="nav-menu">
          <img
            className="nav-logo"
            src="incuwise-logo-final-11@2x.png"
            alt=""
          />
          <div className="nav-menu-items">Contact</div>
        </div>
        <div
          className="hero-primary"
          ref={heroRef}
          style={{
            width: "100%",
            height: "100vh",
            inset: "0",
            fontFamily: "Poppins",
            border: "2px solid #1d428a",
            
          }}
        >
          <div className="hero-content">
            <span className="hero-text">{displayText}</span>
          </div>

          {showImage && (
            <div ref={divRef}>
              <img
                ref={imgRef}
                className="img"
                src="rectangle-12@2x.png"
                alt="ravi"
              />

              <div
                className="invest"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {" "}
                WE INVEST IN YOUR IDEAS
              </div>
              <div
                className="addition"
                style={{ marginTop: "14px", width: "90rem" }}
              >
                Incuwise invests in your vision, we step in at perhaps the most
                important stage of a startup and financially support you by
                funding your pre-seed, pre-product idea, giving your dreams an
                adrenaline shot in the arm.
              </div>
              <div className="scroll"></div>
            </div>
          )}
          {showDiv && (
            <Rectangle1
              style={{ width: "100%", height: "100vh" }}
              ref={div1Ref}
            />
          )}
          {showSecondDiv && (
            <Rectangle2
              style={{ width: "100%", height: "100vh" }}
              ref={div2Ref}
            />
          )}
          {showThirdDiv && (
            <Rectangle3
              style={{ width: "100%", height: "100vh" }}
              ref={div3Ref}
            />
          )}
          {showFourthDiv && (
            <Rectangle4
              style={{ width: "100%", height: "100vh" }}
              ref={div4Ref}
            />
          )}
          {showFifthDiv && (
            <Phase3 style={{ width: "100%", height: "100vh" }} ref={div5Ref} />
          )}
          {showSixDiv && (
            <Phase4 style={{ width: "100%", height: "100vh" }} ref={div6Ref} />
          )}
        
        </div>
      </div>
    </>
  );
}

export default Apps;