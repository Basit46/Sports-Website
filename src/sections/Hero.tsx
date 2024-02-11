import { useState, useEffect } from "react";
import StatProgress from "../components/StatProgress";
import { formatDateForUrl } from "../utils/formatDate";
import { LeagueCodes, fetchDataForLeagues } from "../utils/fetchDataforLeagues";

const Hero = () => {
  const [match, setMatch] = useState<any>();
  useEffect(() => {
    fetchGamesForDate(new Date());
  }, []);

  const fetchGamesForDate = (theDate: Date) => {
    const currentDate = formatDateForUrl(theDate);

    Promise.all(
      LeagueCodes.map((leagueCode) =>
        fetchDataForLeagues(leagueCode, currentDate)
      )
    )
      .then((results) => {
        // Flatten the array of arrays into a single array of matches
        const allMatches: any = results.flat();
        const selectedMatch =
          allMatches[Math.floor(Math.random() * allMatches.length)];

        setMatch(selectedMatch);
      })
      .catch((error) =>
        console.error("Error fetching data for multiple leagues:", error)
      );
  };

  return (
    <section className="h-[356px] flex gap-[24px]">
      <div className="bg-red-800 w-[65%] rounded-[16px]"></div>

      <div className="max-h-[356px] h-fit flex-1 bg-[#1B1C21] rounded-[16px] py-[26px] px-[22px]">
        <p className="font-[600] text-center">
          {match?.status.type.state == "pre" && "Coming soon"}
          {match?.status.type.state == "in" && "Live Match"}
          {match?.status.type.state == "post" && "Match Ended"}
        </p>
        <p className="text-center text-[14px] font-medium text-[#14FF00]">
          {match?.status.type.state == "pre" &&
            new Date(match.date).toLocaleTimeString([], {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          {match?.status.type.state == "in" && match.status.displayClock}
          {match?.status.type.state == "post" && "FT"}
        </p>

        <div className="my-[20px] flex justify-between items-center">
          <img
            className="h-[56px] w-[56px]"
            src={match?.competitions[0].competitors[0].team.logo}
            alt="Team logo"
          />
          {match?.status.type.state != "pre" ? (
            <div className="py-[8px] px-[16px] rounded-[50px] bg-[#F5C451]/10 text-[#F5C451] text-[18px] font-[600]">
              {match?.competitions[0].competitors[0].score} -{" "}
              {match?.competitions[0].competitors[1].score}
            </div>
          ) : (
            <div> VS </div>
          )}

          <img
            className="h-[56px] w-[56px]"
            src={match?.competitions[0]?.competitors[1]?.team?.logo}
            alt="Team logo"
          />
        </div>

        {match?.status.type.state != "pre" && (
          <div className="flex flex-col gap-[16px]">
            <div>
              <p className="text-[14px] font-medium text-center">Possession</p>
              <div className="flex justify-between">
                <StatProgress
                  val={
                    match?.competitions[0].competitors[0].statistics[4]
                      .displayValue
                  }
                  totalVal={
                    parseFloat(
                      match?.competitions[0].competitors[0].statistics[4]
                        .displayValue
                    ) +
                    parseFloat(
                      match?.competitions[0].competitors[1].statistics[4]
                        .displayValue
                    )
                  }
                  isHome={true}
                />
                <StatProgress
                  val={
                    match?.competitions[0].competitors[1].statistics[4]
                      .displayValue
                  }
                  totalVal={
                    parseFloat(
                      match?.competitions[0].competitors[0].statistics[4]
                        .displayValue
                    ) +
                    parseFloat(
                      match?.competitions[0].competitors[1].statistics[4]
                        .displayValue
                    )
                  }
                  isHome={false}
                />
              </div>
            </div>

            <div>
              <p className="text-[14px] font-medium text-center">Shot</p>
              <div className="flex justify-between">
                <StatProgress
                  val={
                    match?.competitions[0].competitors[0].statistics[8]
                      .displayValue
                  }
                  totalVal={
                    parseFloat(
                      match?.competitions[0].competitors[0].statistics[8]
                        .displayValue
                    ) +
                    parseFloat(
                      match?.competitions[0].competitors[1].statistics[8]
                        .displayValue
                    )
                  }
                  isHome={true}
                />
                <StatProgress
                  val={
                    match?.competitions[0].competitors[1].statistics[8]
                      .displayValue
                  }
                  totalVal={
                    parseFloat(
                      match?.competitions[0].competitors[0].statistics[8]
                        .displayValue
                    ) +
                    parseFloat(
                      match?.competitions[0].competitors[1].statistics[8]
                        .displayValue
                    )
                  }
                  isHome={false}
                />
              </div>
            </div>

            <div>
              <p className="text-[14px] font-medium text-center">
                Shot On Target
              </p>
              <div className="flex justify-between">
                <StatProgress
                  val={
                    match?.competitions[0].competitors[0].statistics[6]
                      .displayValue
                  }
                  totalVal={
                    parseFloat(
                      match?.competitions[0].competitors[0].statistics[6]
                        .displayValue
                    ) +
                    parseFloat(
                      match?.competitions[0].competitors[1].statistics[6]
                        .displayValue
                    )
                  }
                  isHome={true}
                />
                <StatProgress
                  val={
                    match?.competitions[0].competitors[1].statistics[6]
                      .displayValue
                  }
                  totalVal={
                    parseFloat(
                      match?.competitions[0].competitors[0].statistics[6]
                        .displayValue
                    ) +
                    parseFloat(
                      match?.competitions[0].competitors[1].statistics[6]
                        .displayValue
                    )
                  }
                  isHome={false}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
