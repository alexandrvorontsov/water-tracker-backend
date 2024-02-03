const monthCalendar = (inputMonth) => {
  const date = new Date(inputMonth);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formMonth = `${date.getDate()}, ${monthNames[date.getMonth()]}`;
  return formMonth;
};

module.exports = monthCalendar;
