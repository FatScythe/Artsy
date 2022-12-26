import {
  ChevLeft,
  ChevRight,
  EthereumIcon,
  OpaqueLoveIcon,
} from "../../../Components/Icons/icons";
import "./explore.css";
import p1 from "../../../images/marketplace/mm1.png";
import p2 from "../../../images/marketplace/mm2.png";
import p3 from "../../../images/marketplace/mm3.png";

const exploreData = [
  { id: 1, url: p1, name: "sassy", price: "3.2" },
  { id: 2, url: p2, name: "escape", price: "0.03" },
  { id: 3, url: p3, name: "autumn", price: "2.03" },
];

const Explore = () => {
  return (
    <section className='explore'>
      <div className='explore-container'>
        {exploreData.map((datum) => {
          return (
            <div className='explore-card d-none' key={datum.id}>
              <ExploreCard {...datum} />
            </div>
          );
        })}

        <div className='d-md-none explore-card'>
          <ExploreCard {...exploreData[0]} />
        </div>
      </div>
      <div className='btn d-none'>
        <button data='Explore All'></button>
      </div>
    </section>
  );
};

const ExploreCard = ({ url, name, price }) => {
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
        <img src={url} alt={name} draggable='false' />
      </div>
      <p className='title'>
        <span>{name}</span>
        <span>
          <EthereumIcon />
          {price}
        </span>
      </p>
    </>
  );
};

export default Explore;
