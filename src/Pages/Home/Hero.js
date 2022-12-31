import mc6 from "../../images/carousel-images/mc.png";
import mc5 from "../../images/carousel-images/car1.png";
import mc4 from "../../images/carousel-images/car2.png";
import mc3 from "../../images/carousel-images/car3.png";
import mc2 from "../../images/carousel-images/car4.png";
import mc1 from "../../images/carousel-images/car5.png";

import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const carousels = useRef(null);
  const setOfimages = [
    { id: 1, img: [mc6, mc5, mc4, mc3, mc2, mc1] },
    { id: 2, img: [mc1, mc6, mc5, mc4, mc3, mc2] },
    { id: 3, img: [mc2, mc1, mc6, mc5, mc4, mc3] },
    { id: 4, img: [mc3, mc2, mc1, mc6, mc5, mc4] },
    { id: 5, img: [mc4, mc3, mc2, mc1, mc6, mc5] },
    { id: 6, img: [mc5, mc4, mc3, mc2, mc1, mc6] },
  ];
  const [images, setImages] = useState(setOfimages);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (value > lastIndex) {
      setValue(0);
    }
    if (value < 0) {
      setValue(lastIndex);
    }
  }, [images, value]);

  useEffect(() => {
    let timer = setInterval(() => {
      setValue(value + 1);
    }, 3500);

    return () => clearInterval(timer);
  });

  return (
    <section className='hero'>
      <h1 className='clash'>
        Photography is poetry <span className='d-none'>&</span>
        <span className='d-md-none'>and</span> beautiful untold stories
      </h1>
      <p>
        Flip through more than 10,000 vintage shots, old photograghs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>

      <div className='carousel' ref={carousels}>
        {[1, 2, 3, 4, 5].map((carousel, index) => {
          return (
            <div key={index}>
              {images[index].img.map((img, index) => {
                let position = "next-slide";
                if (index === value) {
                  position = "active-slide";
                }
                if (
                  index + 1 === value ||
                  (value === 0 && index === images.length - 1)
                ) {
                  position = "prev-slide";
                }

                return (
                  <img
                    src={img}
                    key={index}
                    className={position}
                    alt='hero-gallery'
                    draggable='false'
                  />
                );
              })}
            </div>
          );
        })}
      </div>

      <div className='gallery d-md-none'>
        <img src={mc6} alt='hero-gallery' draggable='false' />
        <img src={mc5} alt='hero-gallery' draggable='false' />
        <img src={mc4} alt='hero-gallery' draggable='false' />
        <img src={mc3} alt='hero-gallery' draggable='false' />
      </div>
    </section>
  );
};

export default Hero;
