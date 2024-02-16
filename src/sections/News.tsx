import Article from "../components/Article";
import { useGlobalContext } from "../context/globalContext";

const News = () => {
  const { articles } = useGlobalContext();
  return (
    <section className="news my-[48px]">
      <h1 className="text-[20px] font-[600]">📰 All News and Transfer Today</h1>

      <div className="mt-[48px] flex flex-wrap gap-[18px]">
        {articles?.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
    </section>
  );
};

export default News;
