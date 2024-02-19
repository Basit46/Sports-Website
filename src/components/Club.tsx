import { FaHeart, FaRegHeart } from "react-icons/fa";

const Club = ({ club }: { club: any }) => {
  return (
    <div className="relative h-[165px] w-[165px] bg-[#1B1C21] border border-[#F5C451] grid place-items-center">
      <img
        className="w-fit h-[100px]"
        src={club.team.logos[0].href}
        alt="club logo"
      />

      <div className="absolute top-[5px] right-[5px]">
        {true ? (
          <FaRegHeart className="text-[#F5C451] text-[20px] cursor-pointer" />
        ) : (
          <FaHeart className="text-[20px] cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Club;
