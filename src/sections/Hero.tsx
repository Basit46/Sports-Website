import StatProgress from "../components/StatProgress";

const Hero = () => {
  return (
    <section className="h-[356px] flex gap-[24px]">
      <div className="bg-red-800 w-[65%] rounded-[16px]"></div>

      <div className="flex-1 bg-[#1B1C21] rounded-[16px] py-[26px] px-[22px]">
        <p className="font-[600] text-center">Live Match</p>
        <p className="text-center text-[14px] font-medium text-[#14FF00]">
          62 : 24
        </p>

        <div className="my-[20px] flex justify-between items-center">
          <div className="h-[56px] w-[56px] rounded-full bg-red-400"></div>
          <div className="py-[8px] px-[16px] rounded-[50px] bg-[#F5C451]/10 text-[#F5C451] text-[18px] font-[600]">
            2 - 2
          </div>
          <div className="h-[56px] w-[56px] rounded-full bg-red-400"></div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div>
            <p className="text-[14px] font-medium text-center">
              Shot on Target
            </p>
            <div className="flex justify-between">
              <StatProgress isHome={true} />
              <StatProgress isHome={false} />
            </div>
          </div>

          <div>
            <p className="text-[14px] font-medium text-center">Shot</p>
            <div className="flex justify-between">
              <StatProgress isHome={true} />
              <StatProgress isHome={false} />
            </div>
          </div>

          <div>
            <p className="text-[14px] font-medium text-center">Fouls</p>
            <div className="flex justify-between">
              <StatProgress isHome={true} />
              <StatProgress isHome={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
