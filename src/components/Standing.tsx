const Standing = ({
  data,
  index,
  onFullPage,
}: {
  data: any;
  index: number;
  onFullPage: boolean;
}) => {
  return (
    <tr
      style={{
        backgroundColor: onFullPage
          ? data.note
            ? data.note.color
            : "rgb(255 255 255 / 0.8)"
          : "rgb(255 255 255 / 0.1)",

        color: onFullPage ? "black" : "white",
      }}
      className={`standing rounded-[8px]`}
    >
      <td align="left" className="flex items-center gap-[16px] ">
        <span>{index + 1}</span>
        <img
          className="h-[24px] w-fit"
          src={data.team.logos[0].href}
          alt="club logo"
        />
        <p className="font-medium">{data.team.name}</p>
      </td>
      <td align="center">{data.stats[0].displayValue}</td>
      <td align="center">{data.stats[7].displayValue}</td>
      <td align="center">{data.stats[6].displayValue}</td>
      <td align="center">{data.stats[1].displayValue}</td>
      <td align="center">
        {data.stats[5].displayValue}:{data.stats[4].displayValue}
      </td>
      <td align="center">{data.stats[3].displayValue}</td>
    </tr>
  );
};

export default Standing;
