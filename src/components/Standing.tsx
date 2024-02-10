const Standing = ({ data, index }: { data: any; index: number }) => {
  return (
    <tr
      className={`standing ${
        index + 1 < 5 ? "bg-[#49406966]" : "bg-[#412E2E]"
      } rounded-[8px]`}
    >
      <td align="left" className="flex items-center gap-[16px]">
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
