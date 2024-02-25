import {
  HighlightsSvg,
  LiveSvg,
  NewsSvg,
  ShopSvg,
  StandingsSvg,
} from "../assets/editable-svgs";
import logo from "../assets/logo.png";
import chelsea from "../assets/chelsea.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useGlobalContext } from "../context/globalContext";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();

  return (
    <nav
      className={`${
        isMenuOpen ? "left-0" : "left-[-100%] xl:left-0"
      } z-[100] duration-500 xl:duration-0 fixed xl:sticky top-[65px] xl:top-0 h-screen w-[300px] bg-[#14151B] border-x border-x-[#313131] pt-[24px] pb-[28px] px-[24px]`}
    >
      <Link to="/" className="hidden xl:flex items-center gap-[8px]">
        <img src={logo} alt="logo" />
        <h1>Onesport</h1>
      </Link>

      <h1 className="mt-[20px] xl:mt-[73px] mb-[40px] text-gray text-sm">
        MENU
      </h1>
      <ul className="menu flex flex-col gap-[24px]">
        <ScrollLink
          onClick={() => setIsMenuOpen(false)}
          to="matches"
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li>
            <LiveSvg active={false} />
            <p className="text-gray">Matches</p>
          </li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setIsMenuOpen(false)}
          to="standings"
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li>
            <StandingsSvg active={false} />
            <p className="text-gray">Standings</p>
          </li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setIsMenuOpen(false)}
          to="clubs"
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li>
            <HighlightsSvg active={false} />
            <p className="text-gray">Follow Club</p>
          </li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setIsMenuOpen(false)}
          to="shop"
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li>
            <ShopSvg active={false} />
            <p className="text-gray">Shop</p>
          </li>
        </ScrollLink>
        <ScrollLink
          onClick={() => setIsMenuOpen(false)}
          to="news"
          smooth={true}
          offset={-100}
          duration={500}
        >
          <li>
            <NewsSvg active={false} />
            <p className="text-gray">News</p>
          </li>
        </ScrollLink>
      </ul>

      <h1 className="my-[40px] text-gray text-sm">FAVOURITE CLUB</h1>
      <ul className="clubs flex flex-col gap-[24px]">
        <li>
          <img className="w-[24px]" src={chelsea} alt="league logo" />
          <p>Chelsea</p>
          <FaStar className="text-[gold] ml-auto" />
        </li>
        <li>
          <img
            className="w-[24px]"
            src={"https://a.espncdn.com/i/teamlogos/soccer/500/180.png"}
            alt="league logo"
          />
          <p>Strasbourg</p>
          <FaStar className="text-[gold] ml-auto" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
