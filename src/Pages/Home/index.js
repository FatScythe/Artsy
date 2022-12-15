import "./home.css";
import Hero from "./Hero";
import Featured from "./Featured";
import Upcoming from "./upcoming";
import Links from "./links";
import NewsLetter from "./newsletter";

const Home = () => {
  return (
    <header id='home'>
      <Hero />
      <Featured />
      <Upcoming />
      <Links />
      <NewsLetter />
    </header>
  );
};

export default Home;
