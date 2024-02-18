import { IoIosTrendingUp } from "react-icons/io";
import { splitTeams } from "../utils/splitTeams";
import { formatDate } from "../utils/formatDate";
import { Link } from "react-router-dom";

const Match = ({ match, index }: { match: any; index: number }) => {
  const [awayTeam, homeTeam] = splitTeams(match.name);

  return (
    <tr className={`match ${index % 2 == 0 && "bg-[#1B1C21]"} rounded-[8px]`}>
      <td valign="middle" className="flex items-center gap-[15px]">
        <img
          className="w-[32px] h-[32px] rounded-full bg-white"
          src={match.competitions[0].competitors[0].team.logo}
          alt="team logo"
        />
        <p className="font-[500] whitespace-nowrap">{homeTeam}</p>
      </td>

      <td valign="middle" align="center">
        {match.status.type.state != "pre" ? (
          <div className="py-[6px] px-[16px] bg-[#F5C4511A] text-[#F5C451] rounded-[16px] text-center text-[14px] font-[600] whitespace-nowrap">
            {match.competitions[0].competitors[0].score} -{" "}
            {match.competitions[0].competitors[1].score}
          </div>
        ) : (
          <div> VS </div>
        )}
      </td>

      <td valign="middle" className="flex items-center gap-[15px]">
        <p className="font-[500] whitespace-nowrap">{awayTeam}</p>
        <img
          className="w-[32px] h-[32px] rounded-full bg-white"
          src={match.competitions[0].competitors[1].team.logo}
          alt="team logo"
        />
      </td>

      <td valign="middle">
        {match.status.type.state == "post" && (
          <div className="py-[8px] px-[16px] rounded-[8px] bg-[#FFFFFF1A] text-center text-[14px] font-[500] whitespace-nowrap">
            Full - Time
          </div>
        )}
        {match.status.type.state == "in" && (
          <div className="py-[8px] px-[16px] rounded-[8px] bg-[#FFFFFF1A] text-center text-green-500 text-[14px] font-[500]">
            {match.status.displayClock}
          </div>
        )}
        {match.status.type.state == "pre" && (
          <div className="py-[8px] px-[16px] rounded-[8px] bg-[#FFFFFF1A] text-center text-[14px] font-[500] whitespace-nowrap">
            {new Date(match.date).toLocaleTimeString([], {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
        )}
      </td>

      <td
        valign="middle"
        className="text-[14px] text-[#A4A4A4] whitespace-nowrap"
      >
        {formatDate(match.date)}
      </td>

      <td
        valign="middle"
        className="flex items-center gap-[16px] cursor-pointer"
      >
        <Link to={`/matches/${match.id}`}>
          <IoIosTrendingUp className="border-l border-b pl-[4px] pb-[4px] border-[#A4A4A4] text-[24px] text-[#A4A4A4]" />
        </Link>
      </td>
    </tr>
  );
};

export default Match;
