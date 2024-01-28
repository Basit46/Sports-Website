import logo from "../assets/chelsea.png";
import win from "../assets/winMark.svg";
import loss from "../assets/loseMark.svg";

const Standing = ({ index }: { index: number }) => {
  return (
    <tr
      className={`standing ${
        index + 1 < 5 ? "bg-[#49406966]" : "bg-[#412E2E]"
      } rounded-[8px]`}
    >
      <td align="left" className="flex items-center gap-[16px]">
        <span>{index + 1}</span>
        <img src={logo} alt="club logo" />
        <p className="font-medium">Chelsea F.C</p>
      </td>
      <td align="center">14</td>
      <td align="center">3</td>
      <td align="center">1</td>
      <td align="left">35</td>
      <td align="left" className="flex items-center gap-[8px]">
        <img src={win} alt="win" />
        <img src={win} alt="win" />
        <img src={win} alt="win" />
        <img src={loss} alt="loss" />
        <img src={win} alt="win" />
      </td>
    </tr>
  );
};

export default Standing;
