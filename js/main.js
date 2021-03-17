const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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

//dark mode

$(".toggle").on("click", function () {
  $("html").toggleClass("dark");
  if ($(this).text() == "Dark Mode") {
    $(this).text("Light Mode");
  } else {
    $(this).text("Dark Mode");
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  $(".hour").css({
    transform:
      "translate(-50%,-100%) rotate(" +
      scale(hoursForClock, 0, 11, 0, 360) +
      "deg)",
  });

  $(".minute").css({
    transform:
      "translate(-50%,-100%) rotate(" + scale(minutes, 0, 59, 0, 360) + "deg)",
  });

  $(".second").css({
    transform:
      "translate(-50%,-100%) rotate(" + scale(seconds, 0, 59, 0, 360) + "deg)",
  });
    
    $(".time").text(hours + ":" + ((minutes < 10) ? "0" + minutes : minutes)+ ":" + ((seconds < 10) ? "0" + seconds : seconds));
    $(".date").html(
      days[day] + "," + months[month] + '<span class="circle">' +date+ '</span>'
    );
    $(".circle").text(date);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000);
