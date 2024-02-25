import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/globalContext";
import { toast } from "react-toastify";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
  return (
    <div className="sticky top-0 right-0 z-[20] h-[65px] bg-[#1B1C21] border-b border-b-[#313131]  px-[24px] flex justify-between items-center">
      <div className="xl:hidden flex-1 ">
        <Link to="/" className="flex items-center gap-[8px]">
          <img className="w-[30px] vsm:w-fit" src={logo} alt="logo" />
          <h1>Onesport</h1>
        </Link>
      </div>

      <div className="hidden w-[60%] h-[40px] vsm:w-[50%] mr-[20px] xl:mr-0 bg-[#2E3034] md:flex items-center gap-[8px] rounded-[6px]">
        <input
          className="bg-[transparent] h-full pl-[10px]  flex-1 outline-none border-none text-gray text-[12px] placeholder:text-[12px]"
          type="email"
          placeholder="hassanbasitope@gmail.com"
        />
        <button
          onClick={() => toast("Subscription success")}
          className="bg-[lime] h-full px-[10px] text-black"
        >
          Subscribe
        </button>
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
