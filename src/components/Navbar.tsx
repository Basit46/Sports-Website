import MainNav from "./MainNav";
import SecondNav from "./SecondNav";

const Navbar = () => {
  return (
    <div className="h-[1012px] w-[25%] flex border-b border-b-[#313131]">
      <MainNav />
      <SecondNav />
    </div>
  );
};

export default Navbar;
