import "./featured.css";
import { Arrow } from "../../Components/Icons/icons";
import cleoptara from "../../images/featured/f1.png";
import hieroglyphs from "../../images/featured/f2.png";
import pharaoh from "../../images/featured/f3.png";
import r1 from "../../images/featured/random1.png";
import r2 from "../../images/featured/random2.png";
import r3 from "../../images/featured/random3.png";
import r4 from "../../images/featured/random4.png";
import r5 from "../../images/featured/random5.png";

const Featured = () => {
  return (
    <div className='featured container'>
      <h1>Featured products</h1>
      <hr className='d-none' />
      <SingleFeatured
        settings={{ reverse: false, title: "Boolean Egyptian", img: cleoptara }}
      />
      <SingleFeatured
        settings={{
          reverse: true,
          title: "Are We There Yet?",
          img: hieroglyphs,
        }}
      />
      <SingleFeatured
        settings={{ reverse: false, title: "Olobiri 1997", img: pharaoh }}
      />
    </div>
  );
};

const SingleFeatured = ({ settings }) => {
  const { title, reverse, img } = settings;
  return (
    <>
      <div className={`${reverse ? "products reverse" : "products"}`}>
        <div className='img'>
          <img src={img} alt='product' draggable='false' />

          <div className='overlay'>
            <div className='overlay-content'>
              <h3 className='satoshi d-md-none'>{title}</h3>
              <h3 className='stix d-none'>View Product</h3>
              <div>
                <button className='arrow-btn'>
                  <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='title'>
          <h3 className='stix d-none'>The Boolean Egyptian</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor pur
          </p>

          <div className='creators'>
            <div>
              <img src={r1} alt='major creators' />
              <img src={r2} alt='major creators' />
              <img src={r3} alt='major creators' />
              <img src={r4} alt='major creators' />
              <img src={r5} alt='major creators' />

              <span className='sub-title'>64 major creators</span>
            </div>

            <button className='arrow-btn d-none'>
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
