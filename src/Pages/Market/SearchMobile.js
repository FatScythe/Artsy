import { Link } from "react-router-dom";
// CSS
import "./search.css";

const SearchMobile = () => {
  return (
    <main className='d-md-none search-mobile'>
      <div className='info'>
        <p>
          <Link to='/'>Home</Link>/ <Link to='/market'>Market</Link>/
          <span> Editorials</span>
        </p>
        <p>
          Showing <span>1-5</span> of <span>18</span> results
        </p>
      </div>

      <div className='filters'>
        <div className='filter'>
          <label htmlFor='filter'>Filters</label>
          <select>
            <option value='Categories'>Categories</option>
            <option value='Price'>Price</option>
            <option value='Artist'>Artist</option>
            <option value='Collection year'>Collection year</option>
          </select>
        </div>

        <div className='sort'>
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
    </main>
  );
};

export default SearchMobile;
