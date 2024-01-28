import {
  DashboardSvg,
  HighlightsSvg,
  LiveSvg,
  NewsSvg,
  ShopSvg,
  StandingsSvg,
} from "../assets/editable-svgs";
import logo from "../assets/logo.png";
import plLogo from "../assets/pl.png";
import chelsea from "../assets/chelsea.png";
import { FaStar } from "react-icons/fa";

const SecondNav = () => {
  return (
    <nav className="nav2 bg-[#1B1C21] flex-1 border-x border-x-[#313131] pt-[24px] pb-[28px] px-[24px]">
      <span className="flex items-center gap-[8px]">
        <img src={logo} alt="logo" />
        <h1>Onesport</h1>
      </span>

      <h1 className="mt-[73px] mb-[40px] text-gray text-sm">MENU</h1>
      <ul className="menu flex flex-col gap-[24px]">
        <li>
          <DashboardSvg active={false} />
          <p className="text-gray">Dashboard</p>
        </li>
        <li>
          <LiveSvg active={false} />
          <p className="text-gray">Live Football</p>
        </li>
        <li>
          <StandingsSvg active={false} />
          <p className="text-gray">Standings</p>
        </li>
        <li>
          <HighlightsSvg active={false} />
          <p className="text-gray">Highlights</p>
        </li>
        <li>
          <ShopSvg active={false} />
          <p className="text-gray">Shop</p>
        </li>
        <li>
          <NewsSvg active={false} />
          <p className="text-gray">News</p>
        </li>
      </ul>

      <h1 className="my-[40px] text-gray text-sm">FOOTBALL LEAGUE</h1>
      <ul className="leagues flex flex-col gap-[24px]">
        <li>
          <img src={plLogo} alt="league logo" />
          <p>Champions League</p>
        </li>
        <li>
          <img src={plLogo} alt="league logo" />
          <p>Premier League</p>
        </li>
        <li>
          <img src={plLogo} alt="league logo" />
          <p>La Liga</p>
        </li>
        <li>
          <img src={plLogo} alt="league logo" />
          <p>Bundesliga</p>
        </li>
        <li>
          <img src={plLogo} alt="league logo" />
          <p>Seria A</p>
        </li>
      </ul>

      <h1 className="my-[40px] text-gray text-sm">FAVOURITE CLUB</h1>
      <ul className="clubs flex flex-col gap-[24px]">
        <li>
          <img src={chelsea} alt="league logo" />
          <p>Chelsea</p>
          <FaStar className="text-[gold] ml-auto" />
        </li>
        <li>
          <img src={chelsea} alt="league logo" />
          <p>Mamchester City</p>
          <FaStar className="text-[gold] ml-auto" />
        </li>
        <li>
          <img src={chelsea} alt="league logo" />
          <p>Bayern Munchen</p>
          <FaStar className="text-[gold] ml-auto" />
        </li>
      </ul>
    </nav>
  );
};

export default SecondNav;
