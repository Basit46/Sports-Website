import MainNav from "./MainNav";
import SecondNav from "./SecondNav";

const Navbar = () => {
  return (
    <div className="sticky top-0 h-screen w-[25%] flex border-b border-b-[#313131]">
      <MainNav />
      <SecondNav />
    </div>
  );
};

export default Navbar;
