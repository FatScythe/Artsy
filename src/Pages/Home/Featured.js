// CSS
import "./featured.css";

// images
import r1 from "../../images/featured/random1.png";
import r2 from "../../images/featured/random2.png";
import r3 from "../../images/featured/random3.png";
import r4 from "../../images/featured/random4.png";
import r5 from "../../images/featured/random5.png";

// components
import Loader from "../../Components/Loader/loader";
import Error from "../../Components/Error/error";
import { Arrow } from "../../Components/Icons/icons";
const Featured = ({ isLoading, data, isError }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  const featured = data.featured_products;

  return (
    <section className='featured container'>
      <h1>Featured products</h1>
      <hr className='d-none' />
      {featured.map((product, index) => {
        const reverse = (index + 1) % 2 === 0 ? true : false;
        const title = [
          "Boolean Egyptian",
          "Are We There Yet ?",
          "Olobiri 1997",
        ];
        return (
          <SingleFeatured
            key={product.id}
            settings={{
              reverse,
              title: title[index],
              img: product.url,
            }}
          />
        );
      })}
    </section>
  );
};

const SingleFeatured = ({ settings }) => {
  const { title, reverse, img } = settings;
  return (
    <>
      <div className={`${reverse ? "products reverse" : "products"}`}>
        <div className='img'>
          <img
            className='featured-img'
            src={img}
            alt={title}
            draggable='false'
            loading='lazy'
          />

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
          <h3 className='stix d-none'>{title}</h3>
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
