import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Arrow,
  ChevLeft,
  ChevRight,
  ChevUp,
  EthereumIcon,
  OpaqueLoveIcon,
} from "../../../Components/Icons/icons";
import { useGlobalArtsyContext } from "../../../context/context";
import Explore from "./explore";
import "./product.css";

const Product = () => {
  const { id } = useParams();
  const { footerContainer, products } = useGlobalArtsyContext();

  useEffect(() => {
    footerContainer.current.style.display = "none";
  });

  if (products.isLoading) {
    return <h2>Loading...</h2>;
  }
  if (products.isError) {
    return <h2>Error</h2>;
  }

  const product = products.data.products.find((product) => product.id === id);
  const { name, url, creator, origin, views, price } = product;
  const usd = price === undefined ? "3.90" : price.usd;

  return (
    <main className='product-page container'>
      <h3>
        Home/ Marketplace/ Editorials/ <span>{name}</span>
      </h3>
      <div className='card'>
        <div className='img'>
          <img src={url} alt={name} />
          <p className='d-md-none'>
            <span>{name}</span> <span>${usd}</span>
          </p>
        </div>
        <div className='info'>
          <h2 className='title'>
            <span>{name}</span>
            <span className='stix'>
              <EthereumIcon /> {price.eth}
            </span>
          </h2>
          <div className='sub-title'>
            <h3>
              Creator : <span>{creator}</span>
            </h3>
            <p className='origin'>{origin}</p>
            <p className='views'>
              Total views: <span>{views}</span>
            </p>
            <div className='counter'>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className='Add'>
              <button className='btn-cart'>
                <span>Add to cart</span>
                <span className='d-none'>
                  <Arrow />
                </span>
              </button>
              <button className='btn-like'>
                <OpaqueLoveIcon />
              </button>
            </div>
          </div>

          <div className='desc'>
            <span>Description</span>
            <span>
              <ChevUp />
            </span>
          </div>

          <div className='listings'>
            <span>Listings</span>
            <span>
              <ChevUp />
            </span>
          </div>

          <div className='status'>
            <span>Status</span>
            <span>
              <ChevUp />
            </span>
          </div>
        </div>
      </div>

      <div className='explore'>
        <p>
          <span className='d-none'>Explore</span> more from this collection
        </p>
        <div>
          <button>
            <ChevLeft />
          </button>

          <button>
            <ChevRight />
          </button>
        </div>
      </div>

      <Explore />
    </main>
  );
};

export default Product;
