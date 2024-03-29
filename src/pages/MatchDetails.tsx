import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import { IoFootball } from "react-icons/io5";
import Stat from "../components/Stat";

const MatchDetails = () => {
  const params = useParams();
  const { matches } = useGlobalContext();

  const [match, setMatch] = useState<any>();

  useEffect(() => {
    setMatch(matches.find((match) => match?.id == params.matchId));
  }, [matches]);

  return (
    <div className="px-[10px] vsm:px-[30px] py-[20px]">
      <div className="relative w-full min-h-[222px] rounded-[16px] bg-[#1B1C21] overflow-hidden flex items-center">
        <div className="relative z-[2] w-full h-full pt-[24px] pb-[15px]">
          <div className="w-fit mx-auto flex flex-col items-center">
            <h1 className="font-[500] text-center">
              {match?.venue.displayName}
            </h1>
            <div className="mt-[16px] flex gap-[24px] items-center">
              <span className="flex items-center gap-[30px] sm:gap-0">
                <img
                  className="w-[40px]"
                  src={match?.competitions[0].competitors[0].team.logo}
                  alt="Home Team"
                />
                <p className="hidden sm:block font-[500] text-[22px] ml-[16px] mr-[42px]">
                  {match?.competitions[0].competitors[0].team.displayName}
                </p>
                {match?.status.type.state != "pre" && (
                  <p className="font-[500] text-[24px]">
                    {match?.competitions[0].competitors[0].score}
                  </p>
                )}
              </span>

              <p className="text-[gray]">
                {match?.status.type.state == "pre" && "VS"}
                {match?.status.type.state == "in" && match?.status.displayClock}
                {match?.status.type.state == "post" && "FT"}
              </p>

              <span className="flex items-center gap-[30px] sm:gap-0">
                {match?.status.type.state != "pre" && (
                  <p className="font-[500] text-[24px]">
                    {match?.competitions[0].competitors[1].score}
                  </p>
                )}

                <p className="hidden sm:block font-[500] text-[22px] mr-[16px] ml-[42px]">
                  {match?.competitions[0].competitors[1].team.displayName}
                </p>
                <img
                  className="w-[40px]"
                  src={match?.competitions[0].competitors[1].team.logo}
                  alt="Home Team"
                />
              </span>
            </div>

            <div className="mt-[10px] w-full flex justify-between">
              <div className="flex flex-col gap-[12px]">
                {match?.competitions[0].details
                  .filter(
                    (detail: any) =>
                      detail.team.id == match.competitions[0].competitors[0].id
                  )
                  .filter(
                    (detail: any) =>
                      detail.type.text.includes("Goal") ||
                      detail.type.text.includes("Scored")
                  )
                  .map((detail: any, index: number) => (
                    <p key={index} className="font-[14px] text-[gray]">
                      <span>{detail.clock.displayValue}</span>{" "}
                      {detail.athletesInvolved[0].shortName}{" "}
                      {detail.type.text.includes("Own Goal") && (
                        <span>(OG)</span>
                      )}{" "}
                      <span>
                        {detail.type.text == "Penalty - Scored" && "(P)"}
                      </span>
                    </p>
                  ))}
              </div>

              <div className="flex flex-col gap-[12px] items-end">
                {match?.competitions[0].details
                  .filter(
                    (detail: any) =>
                      detail.team.id == match.competitions[0].competitors[1].id
                  )
                  .filter(
                    (detail: any) =>
                      detail.type.text.includes("Goal") ||
                      detail.type.text.includes("Scored")
                  )
                  .map((detail: any, index: number) => (
                    <p key={index} className="font-[14px] text-[gray]">
                      <span>
                        {detail.type.text == "Penalty - Scored" && "(P)"}
                      </span>{" "}
                      {detail.type.text.includes("Own Goal") && (
                        <span>(OG)</span>
                      )}{" "}
                      {detail.athletesInvolved[0].shortName}{" "}
                      <span>{detail.clock.displayValue}</span>
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[50%] translate-y-[-50%] left-0 h-[110%] w-full flex items-center justify-between overflow-hidden">
          <div className="h-full w-[40%] ml-[-80px] rounded-r-full overflow-hidden">
            <img
              className="h-full w-full object-cover opacity-[0.03] "
              src={match?.competitions[0].competitors[0].team.logo}
              alt="Home Team"
            />
          </div>
          <div className="h-full w-[40%] mr-[-80px] rounded-l-full overflow-hidden">
            <img
              className="h-full w-full object-cover opacity-[0.03]"
              src={match?.competitions[0].competitors[1].team.logo}
              alt="Home Team"
            />
          </div>
        </div>
      </div>

      {match?.status.type.state != "pre" && (
        <div className="mt-[48px] flex flex-col xmd:flex-row gap-[24px]">
          <div className="w-full xmd:w-[65%] h-fit bg-[#1B1C21] rounded-[16px] py-[26px] px-[22px] flex flex-col gap-[20px]">
            {match?.competitions[0].details.map(
              (detail: any, index: number) => (
                <div
                  key={index}
                  className={`${
                    detail.team.id == match.competitions[0].competitors[0].id
                      ? "justify-start"
                      : "flex-row-reverse"
                  } flex gap-[6px] items-center font-[14px] text-[gray]`}
                >
                  <span className="text-[#14FF00]">
                    {detail.clock.displayValue}
                  </span>
                  <span>
                    {detail.athletesInvolved
                      ? detail.athletesInvolved[0].shortName
                      : "Outfield Member"}
                  </span>
                  {(detail.type.text.includes("Goal") ||
                    detail.type.text.includes("Scored")) && (
                    <IoFootball className="text-white h-[20px]" />
                  )}
                  {detail.type.text == "Penalty - Scored" && <span>(P)</span>}
                  {detail.type.text.includes("Own Goal") && <span>(OG)</span>}
                  {detail.type.text.includes("Yellow") && (
                    <div className="h-[13px] w-[10px] bg-[yellow]" />
                  )}
                  {detail.type.text.includes("Red") && (
                    <div className="h-[13px] w-[10px] bg-[red]" />
                  )}
                </div>
              )
            )}
          </div>

          <div className="flex-1 h-fit bg-[#1B1C21] rounded-[16px] py-[32px] px-[22px]">
            <h1 className="text-center text-[14px]">Team Statistics</h1>
            <div className="mt-[24px] flex flex-col gap-[16px]">
              <Stat match={match} title="Possession" statIndex={4} />
              <Stat match={match} title="Shot" statIndex={8} />
              <Stat match={match} title="Shot On Target" statIndex={6} />
              <Stat match={match} title="Goals" statIndex={7} />
              <Stat match={match} title="Corners" statIndex={2} />
              <Stat match={match} title="Fouls" statIndex={1} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchDetails;
