import Match from "../components/Match";

const Matches = () => {
  return (
    <section className="matches mt-[56px] pl-[24px] pb-[48px]">
      <h1 className="text-[20px] font-[600]">⚽ Football Match</h1>
      <ul className="mt-[32px] flex border-b-[4px] border-[#2E3034] pb-[13px]">
        <li>Latest Match</li>
        <li>Coming Match</li>
        <li>Pre-season</li>
        <li>Live Games</li>
        <li>Fun Football</li>
      </ul>

      <table className="mt-[32px] w-full">
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <Match key={index} index={index} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Matches;
