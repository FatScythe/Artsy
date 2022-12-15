import mc1 from "../../images/carousel-images/mc.png";
import mc2 from "../../images/carousel-images/car1.png";
import mc3 from "../../images/carousel-images/car2.png";
import mc4 from "../../images/carousel-images/car3.png";
import mc5 from "../../images/carousel-images/car4.png";
import mc6 from "../../images/carousel-images/car5.png";
const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='clash'>
        Photography is poetry <span className='d-none'>&</span>
        <span className='d-md-none'>and</span> beautiful untold stories
      </h1>
      <p>
        Flip through more than 10,000 vintage shots, old photograghs, historic
        images and captures seamlessly in one place. Register to get top access.
      </p>

      <div className='carousel'>
        <div>
          <img
            src={mc2}
            className='prev-slide'
            alt='hero-gallery'
            draggable='false'
          />
          <img
            src={mc2}
            className='active-slide'
            alt='hero-gallery'
            draggable='false'
          />
          <img
            src={mc3}
            className='next-slide'
            alt='hero-gallery'
            draggable='false'
          />
        </div>
        <div>
          <img src={mc3} alt='hero-gallery' draggable='false' />
        </div>
        <div>
          <img src={mc4} alt='hero-gallery' draggable='false' />
        </div>
        <div>
          <img src={mc5} alt='hero-gallery' draggable='false' />
        </div>
        {/* <div>
          <img src={mc6} alt='hero-gallery' draggable='false' />
        </div> */}
      </div>

      <div className='gallery d-md-none'>
        <img src={mc1} alt='hero-gallery' draggable='false' />
        <img src={mc2} alt='hero-gallery' draggable='false' />
        <img src={mc3} alt='hero-gallery' draggable='false' />
        <img src={mc4} alt='hero-gallery' draggable='false' />
      </div>
    </div>
  );
};

export default Hero;
