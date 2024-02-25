import { formatDate } from "../utils/formatDate";
import { useNavigate } from "react-router-dom";

const Match = ({ match, index }: { match: any; index: number }) => {
  const navigate = useNavigate();
  return (
    <tr
      onClick={() => navigate(`/matches/${match.id}`)}
      className={`match ${
        index % 2 == 0 && "bg-[#1B1C21]"
      } cursor-pointer rounded-[8px]`}
    >
      <td valign="middle">
        <div className="flex items-center gap-[10px] vsm:gap-[15px]">
          <div className="h-[32px] w-[32px]">
            <img
              className="w-full h-full object-cover rounded-full bg-white"
              src={match.competitions[0].competitors[0].team.logo}
              alt="team logo"
            />
          </div>
          <p className="font-[500] whitespace-nowrap hidden xmd:block">
            {match.competitions[0].competitors[0].team.name}
          </p>
          <p className="font-[500] whitespace-nowrap block xmd:hidden">
            {match.competitions[0].competitors[0].team.abbreviation}
          </p>
        </div>
      </td>

      <td valign="middle">
        {match.status.type.state != "pre" ? (
          <div className="py-[6px] px-[16px] bg-[#F5C4511A] text-[#F5C451] rounded-[16px] text-center text-[14px] font-[600] whitespace-nowrap">
            {match.competitions[0].competitors[0].score} -{" "}
            {match.competitions[0].competitors[1].score}
          </div>
        ) : (
          <div> VS </div>
        )}
      </td>

      <td valign="middle">
        <div className="flex items-center gap-[10px] vsm:gap-[15px]">
          <p className="font-[500] whitespace-nowrap hidden xmd:block">
            {match.competitions[0].competitors[1].team.name}
          </p>
          <p className="font-[500] whitespace-nowrap block xmd:hidden">
            {match.competitions[0].competitors[1].team.abbreviation}
          </p>
          <div className="h-[32px] w-[32px]">
            <img
              className="w-full h-full object-cover rounded-full bg-white"
              src={match.competitions[0].competitors[1].team.logo}
              alt="team logo"
            />
          </div>
        </div>
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
        className="text-[14px] hidden md:block text-[#A4A4A4] whitespace-nowrap"
      >
        {formatDate(match.date)}
      </td>
    </tr>
  );
};

export default Match;
