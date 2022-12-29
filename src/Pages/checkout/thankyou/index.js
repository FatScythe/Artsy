import { useEffect } from "react";

// CSS
import "./thanks.css";

// Context
import { useGlobalArtsyContext } from "../../../context/context";

//Images
import done from "../../../images/checkout/done.png";
import { Confetti } from "../../../Components/Icons/icons";

const Thanks = () => {
  const { footerContainer } = useGlobalArtsyContext();

  useEffect(() => {
    footerContainer.current.style.display = "none";
  });

  return (
    <section className='thanks container'>
      <img src={done} alt='Done' />
      <h2>Hey Scythe, thank you for your purchase. </h2>
      <p>
        You are amazing. Cheers to being
        <span>
          ARTSY!
          <span className='cheers d-none'>
            <Confetti />
          </span>
        </span>
      </p>
    </section>
  );
};

export default Thanks;
