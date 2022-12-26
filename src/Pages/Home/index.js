import { useEffect } from "react";
import { useGlobalArtsyContext } from "../../context/context";

// css
import "./home.css";

// components
import Hero from "./Hero";
import Featured from "./Featured";
import Upcoming from "./upcoming";
import Links from "./links";
import NewsLetter from "./newsletter";
import Creators from "./creators";

const Home = () => {
  const { footerContainer, products } = useGlobalArtsyContext();

  useEffect(() => {
    footerContainer.current.style.display = "block";
  });
  return (
    <header id='home'>
      <Hero />
      <Featured {...products} />
      <Upcoming />
      <Links />
      <Creators />
      <NewsLetter />
    </header>
  );
};

export default Home;
