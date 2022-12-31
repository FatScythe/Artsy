import { useEffect, useRef, useState } from "react";

// CSS
import "./creators.css";

// images
import c1 from "../../images/creators/c1.png";
import c2 from "../../images/creators/c2.png";
import c3 from "../../images/creators/c3.png";

// Component
import { Dotmarker } from "../../Components/Icons/icons";

const Creators = () => {
  const imageContainer = useRef(null);
  const [value, setValue] = useState(0);

  const images = [c1, c2, c3];

  useEffect(() => {
    let timer = setTimeout(() => {
      imageContainer.current.style.opacity = ".7";
    }, 4200);

    imageContainer.current.style.opacity = "1";
    imageContainer.current.setAttribute("src", images[value]);

    let length = images.length;
    if (value >= length) {
      setValue(0);
    }

    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(value + 1);
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <section className='creators clash'>
      <div className='img'>
        <img src={c1} alt='creators' ref={imageContainer} />
        <div>
          <h3 className='location'>CIRCA</h3>
          <h3 className='year'>1985</h3>
        </div>
      </div>

      <div className='title container'>
        <h2>TOP CREATORS OF THE WEEK</h2>
        <ul>
          <div className='slider d-none'>
            <svg
              width='10'
              height='296'
              viewBox='0 0 10 296'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                y='295.695'
                width='295.695'
                height='10'
                rx='5'
                transform='rotate(-90 0 295.695)'
                fill='#AEAEAE'
              />
            </svg>
          </div>

          <div className='list'>
            <li>Editorials</li>
            <li>
              <span className='d-md-none'>
                <Dotmarker />
              </span>
              Fashion
            </li>
            <li>
              <span className='d-md-none'>
                <Dotmarker />
              </span>
              Lifestyle
            </li>
            <li>
              <span className='d-md-none'>
                <Dotmarker />
              </span>
              Blueprint
            </li>
          </div>
        </ul>
      </div>

      <p className='container'>
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there’s always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
      </p>
    </section>
  );
};

export default Creators;
