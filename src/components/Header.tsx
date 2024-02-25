import search from "../assets/search.svg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/globalContext";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
  return (
    <div className="sticky top-0 z-[20] h-[65px] bg-[#1B1C21] border-b border-b-[#313131]  px-[24px] flex justify-between items-center">
      <div className="xl:hidden flex vsm:flex-1 items-center">
        <Link to="/" className="flex items-center gap-[8px]">
          <img className="w-[30px] vsm:w-fit" src={logo} alt="logo" />
          <h1 className="hidden sm:block">Onesport</h1>
        </Link>
      </div>

      <div className="w-[45%] xl:w-[50%] mr-[30px] xl:mr-0 bg-[#2E3034] py-[10px] px-[8px] flex items-center gap-[8px] rounded-[6px]">
        <img src={search} alt="search icon" />
        <input
          className="bg-transparent outline-none border-none text-gray text-[12px] placeholder:text-[12px]"
          type="text"
          placeholder="Type to Search.."
        />
      </div>

      <button aria-label="menu toggle" className="xl:hidden text-[20px]">
        {isMenuOpen ? (
          <FaTimes
            onClick={() => setIsMenuOpen(false)}
            className="text-[red] "
          />
        ) : (
          <FaBars onClick={() => setIsMenuOpen(true)} />
        )}
      </button>
    </div>
  );
};

export default Header;
