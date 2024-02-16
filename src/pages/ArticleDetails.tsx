import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import { useEffect, useState } from "react";
import axios from "axios";

const ArticleDetails = () => {
  const params = useParams();

  const { articles } = useGlobalContext();

  const [article, setArticle] = useState<any>();
  const [story, setStory] = useState("");

  useEffect(() => {
    setArticle(
      articles.find(
        (article) => article.dataSourceIdentifier == params.articleId
      )
    );
  }, [params, articles]);

  useEffect(() => {
    if (article) {
      axios
        .get(article.links.api.news.href)
        .then((res) => {
          setStory(res.data.headlines[0].story);
        })
        .catch((err) => console.log(err));
    } else {
      return;
    }
  }, [article]);

  const lines = story.split("\n");

  return (
    <div className="px-[30px] py-[20px]">
      <div className="w-full h-[300px]">
        <img
          className="h-full w-full object-cover"
          src={article?.images[0]?.url}
          alt={article?.headline}
        />
      </div>

      <div className="my-[16px] flex justify-between text-[12px] font-[600] text-[#F5C451]">
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

      <h1 className="text-[30px] font-medium mb-[30px] leading-[1.3] uppercase">
        {article?.headline}
      </h1>

      <div className="article-story">
        {lines.map((line, index) => (
          <p
            className="line"
            key={index}
            dangerouslySetInnerHTML={{ __html: line }}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleDetails;
