import Match from "../components/Match";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { formatDateForCal } from "../utils/formatDate";
import { useGlobalContext } from "../context/globalContext";

const Matches = () => {
  const { matches, fetchGamesForDate } = useGlobalContext();

  //Local states
  const [date, setDate] = useState(new Date());
  const [currDateId, setCurrDateId] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showCalendarDate, setShowCalendarDate] = useState(false);

  const dateList: Date[] = [];
  const getDates = () => {
    Array.from({ length: 5 }).map((_, index) => {
      const date = new Date();
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + index);

      dateList.push(nextDate);
    });
  };
  getDates();

  const handleCalendarSelect = (e: Date) => {
    setDate(e);
    setShowCalendar(false);
    setShowCalendarDate(true);

    fetchGamesForDate(e);
  };

  return (
    <section id="matches" className="matches mt-[56px] xl:pl-[24px] pb-[48px]">
      <h1 className="text-[20px] font-[600]">⚽ Football Match</h1>
      <ul className="relative mt-[32px] flex border-b-[4px] border-[#2E3034] pb-[13px]">
        <div className="hidden xmd:flex">
          {dateList.map((theDate, index) => (
            <li
              className={`${currDateId == index && "active"}`}
              onClick={() => {
                fetchGamesForDate(theDate);
                setCurrDateId(index);
                setShowCalendarDate(false);
              }}
              key={index}
            >
              {theDate.toDateString()}
            </li>
          ))}
        </div>
        <div className="xmd:hidden flex">
          {dateList
            .filter((_, index) => index < 2)
            .map((theDate, index) => (
              <li
                className={`${currDateId == index && "active"}`}
                onClick={() => {
                  fetchGamesForDate(theDate);
                  setCurrDateId(index);
                  setShowCalendarDate(false);
                }}
                key={index}
              >
                {theDate.toDateString()}
              </li>
            ))}
        </div>

        <div
          className={`${
            showCalendarDate &&
            "bg-white text-black px-[10px] py-[2px] rounded-[10px]"
          } absolute right-0 flex items-center gap-[10px]`}
        >
          {showCalendarDate && <p>{formatDateForCal(date)}</p>}

          <FaRegCalendarAlt
            onClick={() => setShowCalendar((prev) => !prev)}
            className="cursor-pointer"
          />
        </div>

        <div className="absolute right-0 top-[40px]">
          {showCalendar && (
            <Calendar
              className="bg-black"
              onChange={(e: any) => handleCalendarSelect(e)}
              value={date}
            />
          )}
        </div>
      </ul>

      <table className="mt-[32px] w-full">
        <tbody>
          {matches.map((match, index) => (
            <Match key={index} match={match} index={index} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Matches;
