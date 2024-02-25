import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useFollowClubContext } from "../context/followClubContext";

const Club = ({ club }: { club: any }) => {
  const { likedClubs, setLikedClubs } = useFollowClubContext();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    likedClubs.filter((lclub) => lclub.team.id == club.team.id).length > 0
      ? setIsLiked(true)
      : setIsLiked(false);
  }, [likedClubs]);

  const handleLike = () => {
    setIsLiked(true);
    setLikedClubs([...likedClubs, club]);
    toast(`Followed ${club.team.name}`);
  };

  const handleUnLike = (id: string) => {
    setIsLiked(false);
    setLikedClubs(likedClubs.filter((club) => club.team.id !== id));
  };

  return (
    <div className="relative h-[165px] w-[44%] vsm:w-[165px] bg-[#1B1C21] border border-[#F5C451] grid place-items-center">
      <img
        className="w-fit h-[100px]"
        src={club.team.logos[0].href}
        alt="club logo"
      />

      <button
        aria-label="like toggle"
        className="absolute top-[5px] right-[5px]"
      >
        {!isLiked ? (
          <FaRegHeart
            onClick={handleLike}
            className="text-[#F5C451] text-[20px] cursor-pointer"
          />
        ) : (
          <FaHeart
            onClick={() => handleUnLike(club.team.id)}
            className="text-[20px] text-[#F5C451] cursor-pointer"
          />
        )}
      </button>
    </div>
  );
};

export default Club;
