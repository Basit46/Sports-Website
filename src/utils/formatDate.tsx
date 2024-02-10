const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (rawDate: string) => {
  let date = new Date(rawDate);
  let year = date.getFullYear();
  let month = months[date.getMonth()];
  let day = date.getDate();
  return `${day} ${month} ${year}`;
};

export const formatDateForUrl = (theDate: Date) => {
  const year = theDate.getFullYear();
  const month = (theDate.getMonth() + 1).toString().padStart(2, "0");
  const day = theDate.getDate().toString().padStart(2, "0");
  const currentDate = `${year}${month}${day}`;
  return currentDate;
};

export const formatDateForCal = (theDate: Date) => {
  const year = theDate.getFullYear().toString().slice(2, 4);
  const month = theDate.getMonth() + 1;
  const day = theDate.getDate();
  const currentDate = `${day}/${month}/${year}`;
  return currentDate;
};
