import { useState, useEffect } from "react";
import Article from "../components/Article";
import { mainLeagues } from "../data/mainLeagues";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Promise.all(
      mainLeagues.map((league) =>
        axios
          .get(
            `http://site.api.espn.com/apis/site/v2/sports/soccer/${league.slug}/news`
          )
          .then((res) => {
            return res.data.articles;
          })
          .catch((err) => console.log(err))
      )
    )
      .then((results) => {
        const allArticles: any = results.flat();
        setArticles(allArticles);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="news my-[48px]">
      <h1 className="text-[20px] font-[600]">📰 All News and Transfer Today</h1>
      <ul className="mt-[32px] flex border-b-[4px] border-[#2E3034] pb-[13px]">
        <li>All News</li>
        <li>Hot News</li>
        <li>Transfers</li>
      </ul>

      <div className="mt-[48px] flex flex-wrap gap-[18px]">
        {articles?.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </section>
  );
};

export default News;
