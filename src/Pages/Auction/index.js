import "./auction.css";
import AuctionCard from "./auctionCard";
import { useEffect } from "react";
import { useGlobalArtsyContext } from "../../context/context";
import { AuctionData } from "./data";

//icons
import { ChevLeft, ChevRight, Dots, Arrow } from "../../Components/Icons/icons";

//component
import Bids from "./bids";
import Loader from "../../Components/Loader/loader";

const Auction = () => {
  const { footerContainer, size, auction } = useGlobalArtsyContext();

  const { isLoading, data, isError } = auction;

  useEffect(() => {
    footerContainer.current.style.display = "block";

    if (size <= 768) {
      footerContainer.current.style.display = "none";
      return;
    }
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h2>Error...</h2>;
  }

  return (
    <section className='auction container'>
      <div className='title'>
        <h2 className='d-none'>
          Home/ <span>Auctions</span>
        </h2>

        <p>Here’s an overview of products actively on auction, explore!</p>
      </div>
      <div className='card-container'>
        <div className='overlay-btn d-md-none'>
          <button>
            <ChevLeft />
          </button>
          <button>
            <ChevRight />
          </button>
        </div>
        {AuctionData.map((datum) => {
          return <AuctionCard {...datum} key={datum.id} />;
        })}
      </div>

      <div className='dots'>
        <div>
          <Dots />
        </div>
      </div>

      <Bids bids={data.bids} />

      <div className='btn d-md-none'>
        <button>
          <span>Load more</span>
          <span>
            <Arrow />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Auction;
