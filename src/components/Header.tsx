import search from "../assets/search.svg";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="sticky top-0 z-[20] bg-[#1B1C21] border-b border-b-[#313131] py-[16px] px-[24px] flex justify-between">
      <div className="xl:hidden flex flex-1 items-center">
        <Link to="/" className="flex items-center gap-[8px]">
          <img src={logo} alt="logo" />
          <h1>Onesport</h1>
        </Link>
      </div>

      <div className="w-[35%] xl:w-[50%] mr-[30px] xl:mr-0 bg-[#2E3034] py-[10px] px-[8px] flex  items-center gap-[8px] rounded-[6px]">
        <img src={search} alt="search icon" />
        <input
          className="bg-transparent outline-none border-none text-gray text-[12px] placeholder:text-[12px]"
          type="text"
          placeholder="Type to Search.."
        />
      </div>
    </div>
  );
};

export default Header;
