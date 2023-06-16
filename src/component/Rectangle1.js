import React, { useState, useRef, useEffect } from "react";
import "../App.css";
function Rectangle1() {
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
    const minHeight = 50; // Minimum height for group-child37
    const maxHeight = 500; // Maximum height for group-child37
    const startScroll = 200; // Scroll position where the height starts increasing
    const endScroll = 800; // Scroll position where the height reaches the maximum
  
    let height;
    if (scrollPosition <= startScroll) {
      height = minHeight;
    } else if (scrollPosition >= endScroll) {
      height = maxHeight;
    } else {
      const scrollRange = endScroll - startScroll;
      const heightRange = maxHeight - minHeight;
      const scrolledAmount = scrollPosition - startScroll;
      const heightIncrease = (scrolledAmount / scrollRange) * heightRange;
      height = minHeight + heightIncrease;
    }
  
    divRef.current.style.height = `${height}px`;
  }, [scrollPosition]);
  
  return (
    <div>
      <div className="landing-91">
        <div
          className="backgroundcloud-bg5-parent2"
          style={{
            top: "42%",
            left: "40%",
            width: "619px",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="backgroundcloud-bg58">
            <img
              className="shadow-copy-icon16"
              alt=""
              src="shadow-copy6@2x.png"
            />

            <img className="cloud-bg-icon8" alt="" src="cloud-bg@2x.png" />
          </div>
          <div className="backgroundcloud-bg59">
            <img
              className="shadow-copy-icon16"
              alt=""
              src="shadow-copy7@2x.png"
            />

            <img className="cloud-bg-icon8" alt="" src="cloud-bg2@2x.png" />
          </div>
          <div className="stuffpencils24">
            <img className="pencil-icon4" alt="" src="pencil@2x.png" />
          </div>
          <div className="table-locker14">
            <img
              className="table-locker-icon4"
              alt=""
              src="table-locker@2x.png"
            />
          </div>
          <form className="stuffbook24">
            <img className="book-icon8" alt="" src="book@2x.png" />
          </form>
          <div className="stuffbook34">
            <img className="book-icon9" alt="" src="book1@2x.png" />
          </div>
          <div className="grid8">
            <div className="grid9">
              <img
                className="grid-shadow-icon4"
                alt=""
                src="grid-shadow1@2x.png"
              />

              <img className="grid-icon4" alt="" src="grid@2x.png" />
            </div>
          </div>
          <div className="uipicture14">
            <div className="picture4">
              <img className="grid-shadow-icon4" alt="" src="layer-81@2x.png" />

              <img className="ui-icon16" alt="" src="ui@2x.png" />
            </div>
          </div>
          <div className="uibase14">
            <div className="shadow-parent26">
              <img className="grid-shadow-icon4" alt="" src="shadow@2x.png" />

              <img className="ui-icon17" alt="" src="ui1@2x.png" />
            </div>
          </div>
          <div className="elementspin54">
            <div className="shadow-parent27">
              <img className="grid-shadow-icon4" alt="" src="shadow7@2x.png" />

              <img className="pin-icon4" alt="" src="pin@2x.png" />
            </div>
          </div>
          <div className="plant14">
            <img
              className="shadow-copy-icon18"
              alt=""
              src="shadow-copy5@2x.png"
            />

            <img className="plant-icon4" alt="" src="plant@2x.png" />
          </div>
          <div className="backgroundcloud14">
            <div className="cloud8">
              <img className="layer-96-icon4" alt="" src="layer-96@2x.png" />

              <img className="layer-95-icon4" alt="" src="layer-95@2x.png" />
            </div>
          </div>
          <div className="backgroundcloud24">
            <div className="cloud9">
              <img className="grid-shadow-icon4" alt="" src="layer-97@2x.png" />

              <img className="layer-27-icon4" alt="" src="layer-27@2x.png" />
            </div>
          </div>
          <div className="imac8">
            <div className="imac9">
              <img
                className="grid-shadow-icon4"
                alt=""
                src="imac-shadow@2x.png"
              />

              <img className="imac-icon4" alt="" src="imac@2x.png" />
            </div>
          </div>
          <div className="table14">
            <img className="layer-130-icon4" alt="" src="layer-130@2x.png" />
          </div>
          <div className="uibase54">
            <div className="shadow-parent28">
              <img className="grid-shadow-icon4" alt="" src="shadow2@2x.png" />

              <img className="ui-icon18" alt="" src="ui2@2x.png" />
            </div>
          </div>
          <div className="uidots4">
            <div className="dots4">
              <img
                className="grid-shadow-icon4"
                alt=""
                src="dots-shadow@2x.png"
              />

              <img className="dots-icon4" alt="" src="dots@2x.png" />
            </div>
          </div>
          <div className="uibase154">
            <div className="ui4">
              <img className="layer-24-icon4" alt="" src="layer-24@2x.png" />

              <img
                className="layer-109-copy4"
                alt=""
                src="layer-109-copy2@2x.png"
              />
            </div>
          </div>
          <div className="elementsslack4">
            <div className="shadow-parent29">
              <img className="grid-shadow-icon4" alt="" src="shadow3@2x.png" />

              <img className="slack-icon4" alt="" src="slack@2x.png" />
            </div>
          </div>
          <div className="uimessage24">
            <div className="shadow-copy-parent2">
              <img
                className="grid-shadow-icon4"
                alt=""
                src="shadow-copy3@2x.png"
              />

              <img className="message-icon4" alt="" src="message1@2x.png" />
            </div>
          </div>
          <div className="seat44">
            <img className="seat-icon4" alt="" src="seat1@2x.png" />
          </div>
          <div className="elementsdiagram14">
            <div className="shadow-copy-4-parent2">
              <img
                className="grid-shadow-icon4"
                alt=""
                src="shadow-copy-4@2x.png"
              />

              <img
                className="diagram-copy-24"
                alt=""
                src="diagram-copy-2@2x.png"
              />
            </div>
          </div>
          <div className="stuffcat14">
            <img className="cat-icon4" alt="" src="cat@2x.png" />
          </div>
          <div className="uibase244">
            <div className="shadow-copy-3-parent2">
              <img
                className="grid-shadow-icon4"
                alt=""
                src="shadow-copy-3@2x.png"
              />

              <img className="ui-icon19" alt="" src="ui6@2x.png" />
            </div>
          </div>
          <div className="elementsdiagram44">
            <div className="shadow-parent30">
              <img className="grid-shadow-icon4" alt="" src="shadow4@2x.png" />

              <img className="diagram-icon4" alt="" src="diagram@2x.png" />
            </div>
          </div>
          <div className="uitext74">
            <div className="shadow-parent31">
              <img className="shadow-icon33" alt="" src="shadow5@2x.png" />

              <img className="text-icon4" alt="" src="text@2x.png" />
            </div>
          </div>
          <div className="uitext64">
            <div className="shadow-parent32">
              <img className="shadow-icon34" alt="" src="shadow6@2x.png" />

              <img className="ui-text-icon4" alt="" src="ui-text@2x.png" />
            </div>
          </div>
          <div className="uicursor44">
            <div className="cursor4">
              <img
                className="grid-shadow-icon4"
                alt=""
                src="layer-16-copy@2x.png"
              />

              <img className="cursor-1-icon4" alt="" src="cursor1@2x.png" />
            </div>
          </div>
          <div className="lamp-table14">
            <img className="lamp-icon4" alt="" src="lamp2@2x.png" />
          </div>
        </div>
        <div
          className="landing-91-child"
          style={{
            top: "40%",
            left: "40%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div
          className="we-develop-your4"
          style={{
            top: "30%",
            left: "40%",
            marginTop: scrollPosition >= 600 ? "-100px" : "10px",
            transform: "translate(-50%, -50%)",
            transition: "margin-top 0.5s ease",
            fontFamily:'Poppins'
          }}
        >
          WE DEVELOP YOUR IDEAS
        </div>
        <div
          className="in-addition-to4"
          style={{
            top: "79%",
            left: "43%",
            transform: "translate(-50%, -50%)",
            width: "1444px",
            fontSize: "25px",
            height: "80px",
          }}
        >
          In addition to investing in you, we also give you a solid technical
          team to make sure that the much anticipated transition from a raw
          digital idea to a finished product is flawless and is backed by years
          of experience in digital product development.
        </div>
        <div className="rectangle-parent16">
          <div
            className="group-child36"
            style={{ left: "-10rem", marginTop: "-4rem", height: "500px" }}
          ></div>
          <div
            className="group-child37"
            style={{
            left: "3rem",
            marginTop: "-4rem",
            height: `${scrollPosition * 0.1}px`,
            transition: "height 8s ease",
          }}
            ref={divRef}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Rectangle1;
