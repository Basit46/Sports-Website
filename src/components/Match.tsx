import teamLogo from "../assets/argLogo.png";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosTrendingUp } from "react-icons/io";

const Match = ({ index }: { index: number }) => {
  return (
    <tr className={`match ${index % 2 == 0 && "bg-[#1B1C21]"} rounded-[8px]`}>
      <td className="flex items-center gap-[15px]">
        <img className="w-[32px] h-[32px]" src={teamLogo} alt="team logo" />
        <p className="font-[500]">Argentina</p>
      </td>
      <td>
        <div className="py-[6px] px-[16px] bg-[#F5C4511A] text-[#F5C451] rounded-[16px] text-center text-[14px] font-[600]">
          1 - 2
        </div>
      </td>
      <td align="right" className="flex items-center gap-[15px]">
        <img className="w-[32px] h-[32px]" src={teamLogo} alt="team logo" />
        <p className="font-[500]">Italy</p>
      </td>
      <td>
        <div className="py-[8px] px-[16px] rounded-[8px] bg-[#FFFFFF1A] text-center text-[14px] font-[500]">
          Full - Time
        </div>
      </td>
      <td className="text-[14px] text-[#A4A4A4]">18 December 2022</td>
      <td className="flex items-center gap-[16px]">
        <CiCircleInfo className="text-[24px] text-[#A4A4A4]" />
        <IoIosTrendingUp className="border-l border-b pl-[4px] pb-[4px] border-[#A4A4A4] text-[24px] text-[#A4A4A4]" />
      </td>
    </tr>
  );
};

export default Match;
