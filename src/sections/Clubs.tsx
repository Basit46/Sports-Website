import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/globalContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import { mainLeagues } from "../data/mainLeagues";
import Club from "../components/Club";

const Clubs = () => {
  const { clubs, fetchClubs, isClubsLoading } = useGlobalContext();

  const [selectedLeague, setSelectedLeague] = useState(mainLeagues[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchClubs(selectedLeague.slug);
  }, [selectedLeague]);

  return (
    <section id="clubs" className="border-t-[3px] border-[#2B2D31] py-[48px]">
      <div className="flex flex-col vsm:flex-row gap-[20px] vsm:gap-0 justify-between vsm:items-center">
        <p className="text-[20px] font-[600]">🎮 Follow Club</p>

        <div className="relative z-[2] w-[195px] flex items-center">
          <img
            className="mr-[16px] w-[32px] h-[32px]"
            src={selectedLeague.logo}
            alt="league"
          />
          <p className="font-medium">{selectedLeague.name}</p>
          <button aria-label="Dropdown" className="flex-1 flex justify-end">
            <MdKeyboardArrowDown
              onClick={() => setIsOpen((prev) => !prev)}
              className={`${
                isOpen ? "rotate-[180deg]" : "rotate-0"
              }  text-[24px] duration-300`}
            />
          </button>

          <div
            className={`leagues-dropdown ${
              !isOpen && "hidden"
            } absolute bg-[#212227] px-[5px] left-0 top-[35px] h-fit w-full border-white border-[1px]`}
          >
            {mainLeagues.map((league, index) => (
              <button
                onClick={() => {
                  setSelectedLeague(league);
                  setIsOpen(false);
                }}
                key={index}
              >
                <img src={league.logo} alt="league" />
                <p>{league.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[32px] flex flex-wrap justify-center gap-[15px] vsm:gap-[30px]">
        {isClubsLoading ? (
          <div className="h-[50px] w-[50px] mx-auto mt-[20px] rounded-full border-t-[2px] border-t-[#F5C451] animate-spin" />
        ) : (
          clubs.map((club, index) => <Club key={index} club={club} />)
        )}
      </div>
    </section>
  );
};

export default Clubs;
