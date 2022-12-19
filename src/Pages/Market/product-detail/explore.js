import {
  ChevLeft,
  ChevRight,
  EthereumIcon,
  OpaqueLoveIcon,
} from "../../../Components/Icons/icons";
import "./explore.css";
import p1 from "../../../images/marketplace/mm1.png";

const Explore = () => {
  return (
    <section className='explore-container'>
      <div className='explore-card'>
        <ExploreCard />
      </div>

      <div className='d-none explore-card'>
        <ExploreCard />
      </div>

      <div className='d-none explore-card'>
        <ExploreCard />
      </div>

      <div className='d-none explore-card'>
        <ExploreCard />
      </div>
    </section>
  );
};

const ExploreCard = () => {
  return (
    <>
      <div className='like'>
        <OpaqueLoveIcon />
      </div>
      <div className='overlay-btn d-md-none'>
        <button>
          <ChevLeft />
        </button>
        <button>
          <ChevRight />
        </button>
      </div>
      <div className='img'>
        <img src={p1} alt='more-products' />
      </div>
      <p className='title'>
        <span>sassy</span>
        <span>
          <EthereumIcon />
          3.20
        </span>
      </p>
    </>
  );
};

export default Explore;
