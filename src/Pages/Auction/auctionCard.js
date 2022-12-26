import "./auctionCard.css";
import { Link } from "react-router-dom";

const AuctionCard = ({ name, url, time, id }) => {
  const { hr, min, sec } = time;
  return (
    <Link to={`/live-bid/${id}`} className='auction-card'>
      <img src={url} alt={name} />
      <p className='overlay stix'>
        <span>{hr}</span>hr: <span>{min}</span>mins: <span>{sec}</span>s
      </p>
    </Link>
  );
};

export default AuctionCard;
