import { Link } from "react-router-dom";
// CSS
import "./result.css";

//Component
import Loader from "../../Components/Loader/loader";
import Error from "../../Components/Error/error";

const Result = ({ data, isLoading, isError }) => {
  const products = data.products;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section className='results'>
      <div className='sort'>
        <p>See 1-6 of 15 results</p>

        <div>
          <label htmlFor='sort'>Sort by</label>
          <select>
            <option value='popularity'>Popularity</option>
            <option value='average rating'>Average rating</option>
            <option value='newness'>Newness</option>
            <option value='price'>Price: low to high</option>
            <option value='price'>Price: high to low</option>
          </select>
        </div>
      </div>

      <div className='products'>
        {products.map((products) => {
          return <Card {...products} key={products.id} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ id, name, price, url }) => {
  const usd = price === undefined ? "3.90" : price.usd;
  return (
    <Link to={`/product-detail/${id}`} className='product-card'>
      <img src={url} alt={name} draggable={false} />
      <div className='title'>
        <h3>{name}</h3>
        <p>${usd}</p>
      </div>
    </Link>
  );
};

export default Result;
