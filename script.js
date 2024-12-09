let c_time = document.querySelector(".clock");
let d_date = document.querySelector(".date");
setInterval(() => {
  let d = new Date();
  let time = d.toLocaleTimeString();
  let date = d.toLocaleDateString("en-IN", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  c_time.innerHTML = time;
  d_date.innerHTML = date;
}, 1000);
