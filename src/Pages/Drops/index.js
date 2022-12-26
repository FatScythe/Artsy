import Drop from "./drop";
import "./drops.css";
import { useGlobalArtsyContext } from "../../context/context";

const Drops = () => {
  const { drops } = useGlobalArtsyContext();

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
    </section>
  );
};

export default Drops;
