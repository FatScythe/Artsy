import { useEffect } from "react";
import { Link } from "react-router-dom";
// CSS
import "./drops.css";

// Context
import { useGlobalArtsyContext } from "../../context/context";

// Components
import Drop from "./drop";
import NewsLetter from "../Home/newsletter";

const Drops = () => {
  const { footerContainer, size, drops } = useGlobalArtsyContext();

  useEffect(() => {
    footerContainer.current.style.display = "block";

    if (size <= 768) {
      footerContainer.current.style.display = "none";
      return;
    }
  });

  return (
    <section className='drops container'>
      <h3 className='d-none'>
        <Link to='/'>Home/</Link> <Link to='/auction'>Auctions/</Link>
        <Link to='/live-bid/1'> Live bid/</Link> <span>Drop</span>
      </h3>

      <div className='notify'>
        <h2>Upcoming drops</h2>
        <p>Turn on notifications so that no drops will miss you.</p>
        <button>Notify me</button>
      </div>

      <Drop {...drops} />
      <NewsLetter />
    </section>
  );
};

export default Drops;
