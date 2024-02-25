import React, { useState, useEffect, createContext, useContext } from "react";

const followClubContext = createContext({} as ContextType);

type ContextType = {
  likedClubs: any[];
  setLikedClubs: React.Dispatch<any>;
};

const FollowClubProvider = ({ children }: { children: React.ReactNode }) => {
  const storedValRaw = localStorage.getItem("likedClubs");
  const storedVal = storedValRaw
    ? JSON.parse(storedValRaw)
    : [
        {
          team: {
            id: "363",
            uid: "s:600~t:363",
            slug: "eng.chelsea",
            abbreviation: "CHE",
            displayName: "Chelsea",
            shortDisplayName: "Chelsea",
            name: "Chelsea",
            nickname: "Blues",
            location: "Chelsea",
            color: "144992",
            alternateColor: "ffffff",
            isActive: true,
            isAllStar: false,
            logos: [
              {
                href: "https://a.espncdn.com/i/teamlogos/soccer/500/363.png",
                alt: "",
                rel: ["full", "default"],
                width: 500,
                height: 500,
              },
              {
                href: "https://a.espncdn.com/i/teamlogos/soccer/500-dark/363.png",
                alt: "",
                rel: ["full", "dark"],
                width: 500,
                height: 500,
              },
            ],
            links: [
              {
                language: "en-US",
                rel: ["clubhouse", "desktop", "team"],
                href: "https://www.espn.com/soccer/club/_/id/363/chelsea",
                text: "Clubhouse",
                shortText: "Clubhouse",
                isExternal: false,
                isPremium: false,
                isHidden: false,
              },
              {
                language: "en-US",
                rel: ["stats", "desktop", "team"],
                href: "https://www.espn.com/soccer/team/stats/_/id/363/chelsea",
                text: "Stats",
                shortText: "Stats",
                isExternal: false,
                isPremium: false,
                isHidden: false,
              },
              {
                language: "en-US",
                rel: ["schedule", "desktop", "team"],
                href: "https://www.espn.com/soccer/team/fixtures/_/id/363/chelsea",
                text: "Fixtures",
                shortText: "Fixtures",
                isExternal: false,
                isPremium: false,
                isHidden: false,
              },
            ],
          },
        },
      ];
  const [likedClubs, setLikedClubs] = useState<any>(storedVal);

  useEffect(() => {
    localStorage.setItem("likedClubs", JSON.stringify(likedClubs));
  }, [likedClubs]);

  return (
    <followClubContext.Provider value={{ likedClubs, setLikedClubs }}>
      {children}
    </followClubContext.Provider>
  );
};

export default FollowClubProvider;

export const useFollowClubContext = () => {
  return useContext(followClubContext);
};
