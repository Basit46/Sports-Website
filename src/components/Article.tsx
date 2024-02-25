import articleImg from "../assets/articleImg.png";
import { Link } from "react-router-dom";

const Article = ({ article }: { article: any }) => {
  return (
    <Link
      to={`articles/${article?.dataSourceIdentifier}/${article?.headline}`}
      className="w-full sm:w-[45%] xmd:w-[225px]"
    >
      <div className="w-full h-fit sm:h-[156px] rounded-[16px] overflow-hidden">
        <img
          className="h-fit sm:h-full w-full object-cover"
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
        {article?.description.slice(0, 80)}...
      </p>
    </Link>
  );
};

export default Article;
