import Article from "../components/Article";

const News = () => {
  return (
    <section className="news my-[48px]">
      <h1 className="text-[20px] font-[600]">📰 All News and Transfer Today</h1>
      <ul className="mt-[32px] flex border-b-[4px] border-[#2E3034] pb-[13px]">
        <li>All News</li>
        <li>Hot News</li>
        <li>Transfers</li>
      </ul>

      <div className="mt-[48px] flex flex-wrap gap-[18px]">
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default News;
