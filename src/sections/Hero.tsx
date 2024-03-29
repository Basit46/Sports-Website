import { useState, useEffect } from "react";
import { formatDateForUrl } from "../utils/formatDate";
import { LeagueCodes, fetchDataForLeagues } from "../utils/fetchDataforLeagues";
import { useGlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";
import Stat from "../components/Stat";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Hero = () => {
  const { article } = useGlobalContext();

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
    <section className="h-fit xmd:h-[356px] w-full flex flex-col xmd:flex-row gap-[24px]">
      {article ? (
        <div className="relative h-[250px] vsm:h-fit xmd:h-full w-full xmd:w-[60%] xl:w-[65%] rounded-[16px] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={article?.images[0]?.url}
            alt="Article"
          />

          <div className="absolute top-0 left-0 w-full h-full flex items-end">
            <div className="bg-black/70 w-full px-[10px] py-[5px] flex flex-col justify-between gap-[10px] items-start">
              <p className="text-[14px] vsm:text-[20px] font-medium leading-[1.2]">
                {article?.headline}
              </p>
              <Link
                to={`articles/${article?.dataSourceIdentifier}/${article?.headline}`}
                className="underline text-[#4b4bf5]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton className="h-[200px]" borderRadius={16} baseColor="#1B1C21" />
      )}

      {match ? (
        <div className="max-h-full h-fit w-full sm:w-[300px] xmd:w-auto xmd:flex-1 bg-[#1B1C21] rounded-[16px] py-[26px] px-[22px]">
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
              <Stat match={match} title="Possession" statIndex={4} />
              <Stat match={match} title="Shot" statIndex={8} />
              <Stat match={match} title="Shot On Target" statIndex={6} />
            </div>
          )}
        </div>
      ) : (
        <Skeleton className="h-[200px]" borderRadius={16} baseColor="#1B1C21" />
      )}
    </section>
  );
};

export default Hero;
