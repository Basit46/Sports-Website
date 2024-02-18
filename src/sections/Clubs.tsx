import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import logo from "../assets/arsenal.png";

const Clubs = () => {
  return (
    <section id="clubs" className="border-t-[3px] border-[#2B2D31] py-[48px]">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-[600]">🎮 Follow Club</p>
        <span className="flex items-center gap-[10px]">
          <GoArrowLeft className="text-[24px] text-gray" />
          <GoArrowRight className="text-[24px] text-gray" />
        </span>
      </div>

      <div className="mt-[32px] flex gap-[20px]">
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
      </div>
    </section>
  );
};

export default Clubs;

export const Club = () => {
  return (
    <div className="h-[124px] w-[124px] rounded-full bg-[#1B1C21] border border-[#F5C451] grid place-items-center">
      <img className="w-fit h-[64px]" src={logo} alt="club logo" />
    </div>
  );
};
