import "./result.css";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/loader";

const Result = ({ data, isLoading, isError }) => {
  const products = data.products;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h3>Error</h3>;
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
      <img src={url} alt={name} />
      <div className='title'>
        <h3>{name}</h3>
        <p>${usd}</p>
      </div>
    </Link>
  );
};

export default Result;
