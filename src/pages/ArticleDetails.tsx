import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import { useEffect, useState } from "react";
import axios from "axios";

const ArticleDetails = () => {
  const params = useParams();

  const { articles } = useGlobalContext();

  const [article, setArticle] = useState<any>();
  const [story, setStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setArticle(
      articles.find(
        (article) => article.dataSourceIdentifier == params.articleId
      )
    );
  }, [params, articles]);

  useEffect(() => {
    if (article) {
      setIsLoading(true);
      axios
        .get(article.links.api.news.href.replace("http", "https"))
        .then((res) => {
          setStory(res.data.headlines[0].story);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      return;
    }
  }, [article]);

  const lines = story.split("\n");

  return (
    <div className="px-[10px] vsm:px-[30px] py-[20px]">
      <div className="w-full h-fit md:h-[300px]">
        <img
          className="h-full w-full object-cover object-top"
          src={article?.images[0]?.url}
          alt={article?.headline}
        />
      </div>

      <div className="my-[16px] flex justify-between items-center text-[12px] font-[600] text-[#F5C451]">
        <div className="flex flex-wrap gap-[15px]">
          {article?.categories
            .filter((_: any, index: number) => index < 3)
            .map((categ: any, index: number) => (
              <p key={index} className=" uppercase">
                {categ.description}
              </p>
            ))}
        </div>

        <p className="text-[15px]">
          {new Date(article?.published).toLocaleDateString()}
        </p>
      </div>

      <h1 className="text-[20px] sm:text-[30px] font-bold mb-[30px] leading-[1.3] uppercase">
        {article?.headline}
      </h1>

      {isLoading ? (
        <div className="h-[50px] w-[50px] mx-auto mt-[50px] rounded-full border-t-[2px] border-t-[#F5C451] animate-spin" />
      ) : (
        <div className="article-story">
          {lines.map((line, index) => (
            <p
              className="line"
              key={index}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
