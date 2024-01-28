import logo1 from "../assets/argLogo.png";
import logo2 from "../assets/pl.png";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Standing from "../components/Standing";

const Standings = () => {
  return (
    <section className="standings border-t-[3px] border-[#2B2D31] py-[48px]">
      <h1 className="text-[20px] font-[600]">🏆 Standings</h1>

      <div className="mt-[32px] w-full flex justify-between items-center">
        <div className="w-full flex items-center">
          <img className="w-[32px] h-[32px]" src={logo1} alt="country" />
          <img
            className="ml-[8px] mr-[16px] w-[32px] h-[32px]"
            src={logo2}
            alt="league"
          />
          <p className="mr-[4px] font-medium">Premier League</p>
          <MdKeyboardArrowDown className="text-[24px]" />
        </div>
        <div className="flex items-center gap-[4px]">
          <p className="text-gray whitespace-nowrap">View All</p>
          <MdOutlineKeyboardArrowRight className="text-[24px]" />
        </div>
      </div>

      <table className="w-full mt-[32px]">
        <thead>
          <tr className="">
            <th className="w-[50%]" align="left">
              Club
            </th>
            <th align="center">W</th>
            <th align="center">D</th>
            <th align="center">L</th>
            <th align="left">Point</th>
            <th align="left">Last Matches</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((_, index) => (
            <Standing key={index} index={index} />
          ))}
        </tbody>
      </table>

      <div className="mt-[32px] flex gap-[30px] items-center">
        <div className="flex gap-[5px] items-center">
          <div className="w-[12px] h-[12px] rounded-full bg-[#4920EB]" />
          <p className="text-[14px]">Champions League</p>
        </div>
        <div className="flex gap-[5px] items-center">
          <div className="w-[12px] h-[12px] rounded-full bg-[#FF0137]" />
          <p className="text-[14px]">Europa League</p>
        </div>
      </div>
    </section>
  );
};

export default Standings;
