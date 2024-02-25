import { useState, useEffect } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Standing from "../components/Standing";
import axios from "axios";
import { mainLeagues } from "../data/mainLeagues";
import { Link } from "react-router-dom";

const Standings = () => {
  const [selectedLeague, setSelectedLeague] = useState(mainLeagues[0]);
  const [leagueStandings, setLeagueStandings] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchStandings();
  }, [selectedLeague]);

  const fetchStandings = () => {
    setIsLoading(true);
    axios
      .get(
        `https://site.web.api.espn.com/apis/v2/sports/soccer/${selectedLeague.slug}/standings`
      )
      .then((res) => {
        setLeagueStandings(res.data.children[0].standings.entries);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <section
      id="standings"
      className="standings border-t-[3px] border-[#2B2D31] py-[48px]"
    >
      <h1 className="text-[20px] font-[600]">🏆 Standings</h1>

      <div className="mt-[32px] w-full flex justify-between items-center">
        <div className="relative w-[195px] flex items-center">
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
              <span
                onClick={() => {
                  setSelectedLeague(league);
                  setIsOpen(false);
                }}
                key={index}
              >
                <img src={league.logo} alt="league" />
                <p>{league.name}</p>
              </span>
            ))}
          </div>
        </div>

        <Link to="/standings" className="flex items-center gap-[4px]">
          <p className="text-gray whitespace-nowrap">View All</p>
          <MdOutlineKeyboardArrowRight className="text-[24px]" />
        </Link>
      </div>

      {isLoading ? (
        <div className="h-[50px] w-[50px] mx-auto mt-[20px] rounded-full border-t-[2px] border-t-[#F5C451] animate-spin" />
      ) : (
        <table className="w-full mt-[32px]">
          <thead>
            <tr className="">
              <th className="w-[50%]" align="left">
                Club
              </th>
              <th align="center">P</th>
              <th align="center">W</th>
              <th align="center">D</th>
              <th align="center">L</th>
              <th align="center">Goals</th>
              <th align="center" className="hidden vsm:block">
                Points
              </th>
              <th align="center" className="block vsm:hidden">
                PTS
              </th>
            </tr>
          </thead>
          <tbody>
            {leagueStandings
              .filter((_, index) => index < 4)
              .map((data, index) => (
                <Standing
                  data={data}
                  key={index}
                  index={index}
                  onFullPage={false}
                />
              ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Standings;
