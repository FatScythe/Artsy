import "./link.css";
import { Link } from "react-router-dom";
import { Arrow, ArrowBlueLarge } from "../../Components/Icons/icons";
const Links = () => {
  return (
    <section className='links'>
      <Href name='Explore marketplace' to='/market' />
      <Href name='See auctions' to='/auction' />
    </section>
  );
};

const Href = ({ name, to }) => {
  return (
    <Link to={to}>
      <div className='link'>
        <div>
          <h2>{name}</h2>
        </div>

        <div className='d-none'>
          <ArrowBlueLarge />
        </div>

        <div className='d-md-none arrow'>
          <Arrow />
        </div>
      </div>
    </Link>
  );
};

export default Links;
