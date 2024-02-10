import menu from "../assets/menu.svg";
import hot from "../assets/hot.svg";
import trending from "../assets/trending.svg";
import more from "../assets/more.svg";
// import soccer from "../assets/soccer.svg";
// import basketb from "../assets/basketb.svg";
// import snooker from "../assets/snooker.svg";
// import tennis from "../assets/tennis.svg";
// import cycling from "../assets/cycling.svg";
import info from "../assets/info.svg";
import ccare from "../assets/ccare.svg";

const MainNav = () => {
  return (
    <nav className="bg-[#14151B] w-[20%] flex flex-col justify-between items-center pt-[24px] pb-[28px]">
      <div>
        <img src={menu} alt="nav icon" />

        <div className="mt-[72px] flex flex-col gap-[32px]">
          <img src={hot} alt="nav icon" />
          <img src={trending} alt="nav icon" />
          <img src={more} alt="nav icon" />
        </div>
        {/* 
        <div className="my-[56px] w-full h-0 border-[0.5px] border-[#A4A4A4]"></div>

        <div className="flex flex-col gap-[32px]">
          <img src={soccer} alt="nav icon" />
          <img src={basketb} alt="nav icon" />
          <img src={snooker} alt="nav icon" />
          <img src={tennis} alt="nav icon" />
          <img src={cycling} alt="nav icon" />
        </div> */}
      </div>

      <div className="flex flex-col gap-[32px]">
        <img src={info} alt="nav icon" />
        <img src={ccare} alt="nav icon" />
      </div>
    </nav>
  );
};

export default MainNav;
