import { useState, useEffect } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import Standing from "../components/Standing";
import axios from "axios";
import { mainLeagues } from "../data/mainLeagues";

const FullStandings = () => {
  const [selectedLeague, setSelectedLeague] = useState(mainLeagues[0]);
  const [leagueStandings, setLeagueStandings] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchStandings();
  }, [selectedLeague]);

  const fetchStandings = () => {
    axios
      .get(
        `https://site.web.api.espn.com/apis/v2/sports/soccer/${selectedLeague.slug}/standings`
      )
      .then((res) => setLeagueStandings(res.data.children[0].standings.entries))
      .catch((err) => console.log(err));
  };

  return (
    <div className="standings border-t-[3px] border-[#2B2D31] px-[30px] py-[20px]">
      <h1 className="text-[20px] font-[600] text-center">🏆 Standings</h1>

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
      </div>

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
            <th align="center">Points</th>
          </tr>
        </thead>
        <tbody>
          {leagueStandings.map((data, index) => (
            <Standing data={data} key={index} index={index} onFullPage={true} />
          ))}
        </tbody>
      </table>

      <div className="mt-[32px] flex gap-[30px] items-center">
        <div className="flex gap-[5px] items-center">
          <div className="w-[12px] h-[12px] rounded-full bg-[#81D6AC]" />
          <p className="text-[14px]">Champions League</p>
        </div>
        <div className="flex gap-[5px] items-center">
          <div className="w-[12px] h-[12px] rounded-full bg-[#B2BFD0]" />
          <p className="text-[14px]">Europa League</p>
        </div>
        <div className="flex gap-[5px] items-center">
          <div className="w-[12px] h-[12px] rounded-full bg-[#FF7F84]" />
          <p className="text-[14px]">Relegation</p>
        </div>
      </div>
    </div>
  );
};

export default FullStandings;
