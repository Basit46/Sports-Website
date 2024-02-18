import StatProgress from "./StatProgress";

const Stat = ({
  match,
  title,
  statIndex,
}: {
  title: string;
  match: any;
  statIndex: number;
}) => {
  const total =
    parseFloat(
      match?.competitions[0].competitors[0].statistics[statIndex].displayValue
    ) +
    parseFloat(
      match?.competitions[0].competitors[1].statistics[statIndex].displayValue
    );

  return (
    <div>
      <p className="text-[14px] font-medium text-center">{title}</p>
      <div className="flex justify-between">
        <StatProgress
          val={
            match?.competitions[0].competitors[0].statistics[statIndex]
              .displayValue
          }
          totalVal={total}
          isHome={true}
        />
        <StatProgress
          val={
            match?.competitions[0].competitors[1].statistics[statIndex]
              .displayValue
          }
          totalVal={total}
          isHome={false}
        />
      </div>
    </div>
  );
};

export default Stat;
