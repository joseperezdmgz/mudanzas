import React, { useState, useEffect } from "react";
import "./Carousel.css";

const slides = [
  <div className="slide">
    <div>
      <h1>Esse dolore voluptate ipsum irure sint quis excepteur irure.</h1>
      <p>
        Ea excepteur in commodo id cillum sunt excepteur adipisicing labore non.
        Labore adipisicing ipsum anim magna ex incididunt. Id veniam pariatur
        enim aute enim nulla reprehenderit voluptate sunt non in reprehenderit
        exercitation. Eu sit excepteur ipsum quis ea est.
      </p>
    </div>
    <img alt="" src="carretera.png" />
  </div>,
  <div className="slide">
    <div>
      <h1>Esse dolore voluptate ipsum irure sint quis excepteur irure.</h1>
      <p>
        Ea excepteur in commodo id cillum sunt excepteur adipisicing labore non.
        Labore adipisicing ipsum anim magna ex incididunt. Id veniam pariatur
        enim aute enim nulla reprehenderit voluptate sunt non in reprehenderit
        exercitation. Eu sit excepteur ipsum quis ea est.
      </p>
    </div>
    <img alt="" src="frente.png" />
  </div>,
  <div className="slide">
    <div>
      <h1>Esse dolore voluptate ipsum irure sint quis excepteur irure.</h1>
      <p>
        Ea excepteur in commodo id cillum sunt excepteur adipisicing labore non.
        Labore adipisicing ipsum anim magna ex incididunt. Id veniam pariatur
        enim aute enim nulla reprehenderit voluptate sunt non in reprehenderit
        exercitation. Eu sit excepteur ipsum quis ea est.
      </p>
    </div>
    <img alt="" src="interior.png" />
  </div>,
  <div className="slide">
    <div>
      <h1>Esse dolore voluptate ipsum irure sint quis excepteur irure.</h1>
      <p>
        Ea excepteur in commodo id cillum sunt excepteur adipisicing labore non.
        Labore adipisicing ipsum anim magna ex incididunt. Id veniam pariatur
        enim aute enim nulla reprehenderit voluptate sunt non in reprehenderit
        exercitation. Eu sit excepteur ipsum quis ea est.
      </p>
    </div>
    <img alt="" src="playa.png" />
  </div>,
];

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(slides[0]);

  let count = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (count >= slides.length) count = 0;
      setActiveSlide(slides[count]);
      count++;
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="carousel-wrapper">{activeSlide}</div>;
}
