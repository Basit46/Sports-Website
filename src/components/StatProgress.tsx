const StatProgress = ({ val, totalVal, isHome }: StatProgressPropType) => {
  const percent = Math.round((parseFloat(val) / totalVal) * 100) + "%";
  return (
    <div className="w-[48%]">
      <p
        className={`${
          isHome ? "text-yellow" : "text-[#006AA9] text-right"
        } text-[14px] font-[600]`}
      >
        {val}
      </p>
      <div className="relative w-full bg-[#3A3A3A] h-[4px] rounded-[3px] overflow-hidden">
        <div
          style={{
            width: percent,
          }}
          className={`${
            isHome ? "bg-yellow right-0" : "bg-[#006AA9] left-0"
          }  absolute top-0  h-full rounded-[2px]`}
        ></div>
      </div>
    </div>
  );
};

export default StatProgress;
