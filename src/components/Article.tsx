import articleImg from "../assets/articleImg.png";

const Article = ({ article }: { article: any }) => {
  return (
    <div className="w-[244px]">
      <div className="w-full h-[176px] rounded-[16px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={article?.images[0]?.url || articleImg}
          alt="article"
        />
      </div>
      <p className="my-[16px] text-[12px] font-[600] text-[#F5C451] uppercase">
        {article?.categories[1].description}
      </p>
      <p className="font-medium mb-[8px] leading-[22.4px]">
        {article?.headline}
      </p>
      <p className="text-[14px] text-[#A4A4A4] leading-[16.8px]">
        {article?.description}
      </p>
    </div>
  );
};

export default Article;
