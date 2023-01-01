import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

// Context
import { useGlobalArtsyContext } from "../../../context/context";

// Component
import Explore from "./explore";
import Loader from "../../../Components/Loader/loader";
import Error from "../../../Components/Error/error";
import {
  Arrow,
  ChevLeft,
  ChevRight,
  ChevUp,
  EthereumIcon,
  OpaqueLoveIcon,
} from "../../../Components/Icons/icons";

// CSS
import "./product.css";

const Product = () => {
  const { id } = useParams();
  const { footerContainer, products, addItem, cart } = useGlobalArtsyContext();

  const [numberofItems, setNumberOfItems] = useState(1);

  const increaseItem = () => {
    setNumberOfItems(numberofItems + 1);
  };

  const decreaseItem = () => {
    if (numberofItems <= 1) {
      return;
    }
    setNumberOfItems(numberofItems - 1);
  };

  const navigate = useNavigate();

  useEffect(() => {
    footerContainer.current.style.display = "none";
  });

  if (products.isLoading) {
    return <Loader />;
  }
  if (products.isError) {
    return <Error />;
  }

  const product = products.data.products.find((product) => product.id === id);
  const { name, url, creator, origin, views, price } = product;
  const usd = price === undefined ? "3.90" : price.usd;

  return (
    <main className='product-page container'>
      <h3>
        <Link to='/'>Home/</Link>
        <Link to='/market'> Market</Link>/<Link to='/market'> Editorials/</Link>{" "}
        <span>{name}</span>
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
              <button onClick={() => decreaseItem()}>-</button>
              <span>{numberofItems}</span>
              <button onClick={() => increaseItem()}>+</button>
            </div>
            <div className='Add'>
              <button
                className='btn-cart'
                onClick={() => {
                  // Checks if item is already in the cart
                  if (cart.some((item) => item.id === id)) {
                    navigate("/checkout/cart");
                    return;
                  }

                  // Adds item to cart
                  addItem({ ...product, number: numberofItems, like: false });
                }}
              >
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

      <div className='explore-title'>
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
