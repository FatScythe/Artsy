import { useEffect } from "react";
import { useGlobalArtsyContext } from "../../context/context";

// CSS
import "./market.css";
import Newsletter from "../Home/newsletter";

// Components
import Result from "./result";
import SearchDesktop from "./SearchDesktop";
import SearchMobile from "./SearchMobile";
import { Arrow } from "../../Components/Icons/icons";

const MarketPlace = () => {
  const { footerContainer, size, products } = useGlobalArtsyContext();

  useEffect(() => {
    footerContainer.current.style.display = "none";

    if (size <= 768) {
      footerContainer.current.style.display = "block";
      return;
    }
  });

  return (
    <section className='marketplace container'>
      <div className='market'>
        <div className='search'>
          <SearchMobile />
          <SearchDesktop />
        </div>

        <div className='result'>
          <Result {...products} />
          <div className='btn'>
            <button className='d-md-none'>
              <span>Load more</span>
              <span>
                <Arrow />
              </span>
            </button>
          </div>

          <Newsletter />
        </div>
      </div>

      <button className='d-none'>See more</button>
    </section>
  );
};

export default MarketPlace;
