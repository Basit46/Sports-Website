import articleImg from "../assets/articleImg.png";

const Article = () => {
  return (
    <div className="w-[244px]">
      <div className="w-full h-[176px] rounded-[16px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={articleImg}
          alt="article"
        />
      </div>
      <p className="my-[16px] text-[12px] font-[600] text-[#F5C451]">
        PREMIER LEAGUE
      </p>
      <p className="font-medium mb-[8px] leading-[22.4px]">
        Erling Haaland Leads Premier League Top Scorers 2022
      </p>
      <p className="text-[14px] text-[#A4A4A4] leading-[16.8px]">
        Until the competition break in facing the 2022 World Cup in Qatar...
      </p>
    </div>
  );
};

export default Article;
