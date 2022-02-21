const greetingMessage = () => {
  const moment = new Date();
  const momentMonth = moment.getMonth();
  const momentMonthDay = moment.getDate();
  const momentWeekDay = moment.getDay();
  const momentHour = moment.getHours();
  let momentClosing = "Best wishes,<br>Andy";
  if (momentMonth === 11 && momentMonthDay >= 20 && momentMonthDay < 25) {
    momentClosing = "Happy Holidays! <br>Andy";
  } else if (
    momentMonth === 11 &&
    momentMonthDay >= 25 &&
    momentMonthDay < 27
  ) {
    momentClosing = "Merry Christmas! <br>Andy";
  } else if (
    momentMonth === 11 &&
    momentMonthDay >= 27 &&
    momentMonthDay < 31
  ) {
    momentClosing = "Enjoy the last days of this year, <br>Andy";
  } else if (
    (momentMonth === 11 && momentMonthDay === 31) ||
    (momentMonth === 0 && momentMonthDay < 4)
  ) {
    momentClosing = "Happy New Year! <br>Andy";
  } else if (momentWeekDay === 0 && momentHour >= 21) {
    momentClosing =
      "P.S. Have a good night sleep, a new week begins tomorrow., <br>Andy";
  } else if (momentWeekDay === 1 && momentHour < 6) {
    momentClosing =
      "P.S. You should have some sleep, a new week begins shortly, <br>Andy";
  } else if (momentWeekDay === 1 && momentHour >= 6 && momentHour < 12) {
    momentClosing = "Have a great week ahead, <br>Andy";
  } else if (momentWeekDay === 5 && momentHour >= 12 && momentHour < 18) {
    momentClosing = "Have a great week-end ahead, <br>Andy";
  } else if ((momentWeekDay === 5 && momentHour >= 18) || momentWeekDay === 6) {
    momentClosing = "Enjoy the week-end, <br>Andy";
  } else if (momentWeekDay === 0 && momentHour < 21) {
    momentClosing = "Enjoy the rest of the week-end, <br>Andy";
  } else if (momentHour >= 21) {
    momentClosing =
      "P.S. Have a good night sleep, a new day begins shortly, <br>Andy";
  } else if (momentHour < 6) {
    momentClosing =
      "P.S. You should have some sleep, a new day begins shortly, <br>Andy";
  } else if (momentHour >= 6 && momentHour < 12) {
    momentClosing = "Have a great day ahead, <br>Andy";
  } else if (momentHour >= 12 && momentHour < 18) {
    momentClosing = "Enjoy the rest of the day, <br>Andy";
  } else if (momentHour >= 18 && momentHour < 21) {
    momentClosing = "Have a great evening, <br>Andy";
  }
  return momentClosing;
};

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const lightsToggle = document.querySelector(".theme-toggle");
  const greetingDomNode = document.getElementById("greeting-message");

  if (localStorage.getItem("imandy-dark") === "true") {
    body.classList.add("lights-off");
    lightsToggle.classList.add("dark-theme");
  }

  if (lightsToggle) {
    lightsToggle.addEventListener("click", function () {
      if (body.classList.contains("lights-off")) {
        localStorage.setItem("imandy-dark", false);
        body.classList.remove("lights-off");
        lightsToggle.classList.remove("dark-theme");
      } else {
        localStorage.setItem("imandy-dark", true);
        body.classList.add("lights-off");
        lightsToggle.classList.add("dark-theme");
      }
    });
  }

  if (greetingDomNode) {
    greetingDomNode.innerHTML = greetingMessage(true);
  }
});
