import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Cases from "../component/Cases";
import Overlay from "../component/overlay";
import { gsap } from "gsap";
const tl = gsap.timeline();

let homeAnimation = (completeAnimation) => {
  tl.from(".line span", {
    duration: 1.8,
    delay: 1,
    y: 150,
    skewY: 7,
    ease: "power4.out",
    stagger: {
      amount: 0.3,
    },
  })

    .to(".overlay-top", {
      height: 0,
      duration: 1.5,
      ease: "expo.inOut",
      stagger: {
        amount: 0.3,
      },
    })
    .to(".overlay-bottom", {
      width: 0,
      delay: -0.8,
      duration: 1.5,
      ease: "expo.inOut",
      stagger: {
        amount: 0.3,
      },
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".case-image img", {
      duration: 1.8,
      scale: 1.4,
      delay: -2,
      ease: "expo.inOut",
      stagger: {
        amount: 0.3,
      },
      onComplete: completeAnimation,
    });
};

function Home({ dimention }) {
  let [animationComplete, setAnimationComplete] = useState(false);

  let completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {animationComplete === false ? <Overlay /> : ""}
      <Banner />
      <Cases />
    </>
  );
}

export default Home;
