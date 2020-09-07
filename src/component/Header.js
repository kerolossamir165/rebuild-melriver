import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import gsap from "gsap";
const tl = gsap.timeline();
const Header = ({ history }) => {
  let [state, setState] = React.useState({
    clicked: false,
  });

  React.useEffect(() => {
    history.listen(() => {
      setState({ clicked: false });
    });

    if (state.clicked === true) {
      gsap.to(".nav", {
        duration: 0,
        css: { display: "block", pointerEvents: "visible" },
      });

      tl.to(".hamburger-menu span", {
        duration: 0.9,
        delay: -0.4,
        scaleX: 0,
        transformOrigin: "50% 50%",
        ease: "expo.inOut",
      })
        .to("#Path_1", {
          duration: 0.6,
          delay: -0.4,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.6,
          delay: -0.4,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          duration: 0.6,
          delay: -0.4,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.8,
          delay: -0.6,
          css: {
            strokeDashoffset: 0,
            strokeDasharray: 227,
          },
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", {
          duration: 0.8,
          delay: -0.6,
          css: { display: "block" },
        });
      gsap.to([".first-bcg", ".second-bcg"], {
        duration: 0.8,
        height: "100%",
        transformOrigin: "right top",

        ease: "power3.inOut",
        stagger: {
          amount: 0.1,
        },
      });
    } else {
      tl.to("#circle", {
        duration: 0.8,
        delay: -0.6,
        css: {
          strokeDashoffset: -193,
          strokeDasharray: 227,
        },
      })
        .to("#Path_1", 0.6, {
          delay: -0.4,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", 0.6, {
          delay: -0.4,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", 0.6, {
          delay: -0.4,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu span", 0.9, {
          delay: -0.4,
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", 0, {
          delay: -0.1,
          css: { display: "none" },
        })
        .to(".nav", {
          duration: 0,
          css: { display: "none", pointerEvents: "visible" },
          onComplete: () => console.log("hi"),
        });

      gsap.to([".second-bcg", ".first-bcg"], {
        duration: 0.8,
        height: "0%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.1,
        },
      });
    }
    console.log(state.clicked);
  }, [state.clicked]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <Link to="/">
              <span>mel</span>
              <span>river</span>
            </Link>
          </div>
          <div className="nav-toggle">
            <div
              className="hamburger-menu"
              onClick={() => setState({ clicked: true })}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setState({ clicked: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
