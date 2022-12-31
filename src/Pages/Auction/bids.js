import { RedLoveIcon } from "../../Components/Icons/icons";
import "./bids.css";

const Bids = ({ bids }) => {
  console.log(bids);
  return (
    <section className='bids'>
      <h2>Top bids from popular creators</h2>
      <div className='bid-card-container'>
        {bids.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ item }) => {
  const { name, date, creator, url, bid } = item;
  return (
    <div className='bid-card'>
      <header>
        <div className='love'>
          <div>
            <RedLoveIcon />
          </div>
        </div>

        <div className='img'>
          <img src={url} alt={name} draggable='false' loading='lazy' />
        </div>

        <h3>
          <span>{name}</span>
          <span className='d-md-none'>{bid.highest.eth}ETH</span>
        </h3>
      </header>

      <footer>
        <h4>
          <span>
            Creator <span>: </span>
          </span>
          <span className='data'>{creator}</span>
        </h4>
        <h4>
          <span>
            Date <span>: </span>
          </span>
          <span className='data'>
            {date.day}/{date.month}/{date.year}
          </span>
        </h4>
        <h4 className='d-none'>
          <span>
            Highest Bid <span>: </span>
          </span>
          <span className='data'>{bid.highest.eth}ETH</span>
        </h4>
        <div className='bottom'>
          <div>
            <h3>Current bid</h3>
            <p>{bid.current.eth} ETH</p>
          </div>
          <div>
            <button>Place Bid</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bids;
