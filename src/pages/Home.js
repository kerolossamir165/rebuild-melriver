import React from "react";
import Banner from "../component/Banner";
import Cases from "../component/Cases";
import Overlay from "../component/overlay";
import { gsap } from "gsap";

//line span
//top
//bottom
//all the overlay
// images
const tl = gsap.timeline();

let animateOverlay = (isAnimate) => {
  tl.from(".line span", {
    duration: 1.3,
    y: 150,
    skewY: 8,
    delay: 0.3,
    ease: "power4.out",
    stagger: {
      amount: 0.1,
    },
  })

    .to(".overlay-top", {
      height: 0,
      duration: 1.2,
      ease: "expo.inOut",
      stagger: {
        amount: 0.3,
      },
    })
    .to(
      ".header",
      {
        duration: 0.5,
        opacity: 1,
        visibility: "visible",
      },
      "-=.7"
    )
    .to(".overlay-bottom", {
      width: 0,
      duration: 1.2,
      delay: -0.3,
      ease: "expo.inOut",
      stagger: {
        amount: 0.3,
      },
    })
    .to("overlay", { duration: 0, css: { display: "none" } })
    .from(".case .img img", {
      scale: 2,
      duration: 1.3,
      delay: -1.8,
      stagger: {
        amount: 0.3,
      },
      onComplete: isAnimate,
    });
};

const Home = ({ dimention }) => {
  let [animate, setAnimation] = React.useState(false);

  let afterAnimationEnd = () => {
    setAnimation(true);
  };
  React.useEffect(() => {
    animateOverlay(afterAnimationEnd);
  }, []);

  return (
    <div>
      {animate === false ? <Overlay /> : ""}
      <Banner />
      <Cases />
    </div>
  );
};

export default Home;
