import React, { createContext, useContext, useEffect, useState } from "react";
import { mainLeagues } from "../data/mainLeagues";
import axios from "axios";
import { formatDateForUrl } from "../utils/formatDate";
import { LeagueCodes, fetchDataForLeagues } from "../utils/fetchDataforLeagues";

const globalContext = createContext({} as globalContextType);

type globalContextType = {
  articles: any[];
  article: any;
  matches: any[];
  fetchGamesForDate: (theDate: Date) => void;
};

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState();
  const [matches, setMatches] = useState([]);

  //Fetch Articles
  useEffect(() => {
    Promise.all(
      mainLeagues.map((league) =>
        axios
          .get(
            `https://site.api.espn.com/apis/site/v2/sports/soccer/${league.slug}/news`
          )
          .then((res) => {
            return res.data.articles;
          })
          .catch((err) => console.log(err))
      )
    )
      .then((results) => {
        const allArticles: any = results.flat();
        setArticles(
          allArticles.filter((article: any) => article.type != "Media")
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //To return a random article that will be used in the hero section
  useEffect(() => {
    if (articles.length > 0) {
      setArticle(articles[Math.round(Math.random() * articles.length)]);
    } else {
      return;
    }
  }, [articles]);

  //Fetch Matches
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
        setMatches(allMatches);
      })
      .catch((error) =>
        console.error("Error fetching data for multiple leagues:", error)
      );
  };

  return (
    <globalContext.Provider
      value={{ articles, article, matches, fetchGamesForDate }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  return useContext(globalContext);
};
