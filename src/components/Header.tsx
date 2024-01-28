import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import theme from "../assets/theme.svg";
import noti from "../assets/noti.svg";

const Header = () => {
  return (
    <div className="bg-[#1B1C21] border-b border-b-[#313131] py-[16px] px-[24px] flex justify-between">
      <div className="w-[50%] bg-[#2E3034] py-[10px] px-[8px] flex  items-center gap-[8px] rounded-[6px]">
        <img src={search} alt="search icon" />
        <input
          className="bg-transparent outline-none border-none text-gray text-[12px] placeholder:text-[12px]"
          type="text"
          placeholder="Type to Search.."
        />
      </div>

      <div className="flex items-center gap-[24px]">
        <button className="bg-yellow py-[8px] px-[16px] rounded-[6px] text-[#100F0F] text-[14px] font-medium">
          Go Premium
        </button>

        <span className="flex items-center gap-[16px]">
          <img src={cart} alt="icon" />
          <img src={noti} alt="icon" />
          <img src={theme} alt="icon" />
        </span>

        <div className="w-[36px] h-[36px] rounded-full bg-pink-600"></div>
      </div>
    </div>
  );
};

export default Header;
