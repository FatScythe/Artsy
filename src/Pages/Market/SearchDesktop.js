import "./search.css";
import {
  ChevUp,
  DotIcon2,
  FilterIcon,
  SearchBar,
} from "../../Components/Icons/icons";

const SearchDesktop = () => {
  const categories = [
    "Editorials",
    "Fashion",
    "Optics",
    "Art & Museum",
    "Nature",
  ];

  return (
    <main className='d-none'>
      <div className='search-bar'>
        <SearchBar />
        <input type='search' className='search-input' placeholder='Search' />
      </div>

      <div className='filters'>
        <h3 className='filter-title'>
          <span>
            <FilterIcon />
          </span>
          <span className='title'>Filter</span>
        </h3>
        <hr />
        <div className='categories'>
          <h3>
            <span className='sub-title'>By category</span>
            <span>
              <ChevUp />
            </span>
          </h3>

          {categories.map((category, index) => {
            return (
              <div className='category' key={index}>
                <label className='sub'>
                  {category}
                  <input type='checkbox' className='checkbox-input' />
                  <span className='checkmark'></span>
                </label>
              </div>
            );
          })}
        </div>

        <div className='prices'>
          <h3>
            <span className='sub-title'>By price</span>
            <span>
              <ChevUp />
            </span>
          </h3>

          <div className='price'>
            <p>$100.00 - $150.00</p>
            <div className='range-input'>
              <DotIcon2 />
              <input type='range' max='100' min='0' />
            </div>
          </div>
        </div>

        <div className='artists'>
          <h3>
            <span className='sub-title'>By artist</span>
            <span>
              <ChevUp />
            </span>
          </h3>
          <div className='price-range'>
            <p>All</p>
            <p>Below $100.00</p>
            <p>$100.00 - $150.00</p>
            <p>$150.00 - $200.00</p>
            <p>Above $200.00</p>
          </div>
        </div>
        {/* <div className='all'></div> */}
        <div className='collection-years'>
          <h3>
            <span className='sub-title'>Collection year</span>
            <span>
              <ChevUp />
            </span>
          </h3>
        </div>
      </div>
    </main>
  );
};

export default SearchDesktop;
