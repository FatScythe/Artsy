import Drop from "./drop";
import "./drops.css";
import { useEffect } from "react";

// Context
import { useGlobalArtsyContext } from "../../context/context";
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
        Home/ Auctions/ Live bid/ <span>Drop</span>
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
