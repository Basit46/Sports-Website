import Banner from "../sections/Banner";
import Clubs from "../sections/Clubs";
import Hero from "../sections/Hero";
import Matches from "../sections/Matches";
import News from "../sections/News";
import Shoppings from "../sections/Shoppings";
import Standings from "../sections/Standings";

const Home = () => {
  return (
    <div className="w-full py-[24px] px-[10px] vsm:px-[25px]">
      <Hero />
      <Matches />
      <Standings />
      <Clubs />
      <Shoppings />
      <Banner />
      <News />
    </div>
  );
};

export default Home;
