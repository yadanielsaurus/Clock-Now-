function updateClock() {
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const greeting = document.getElementById("greeting");
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;

  const body = document.body;
  if (h >= 5 && h < 12) {
    body.style.background = "linear-gradient(to right, #ffecd2, #fcb69f)";
    greeting.textContent = "Good Morning ☀️";
  } else if (h >= 12 && h < 17) {
    body.style.background = "linear-gradient(to right, #a1c4fd, #c2e9fb)";
    greeting.textContent = "Good Afternoon 🌤️";
  } else if (h >= 17 && h < 19) {
    body.style.background = "linear-gradient(to right, #fbc2eb, #a6c1ee)";
    greeting.textContent = "Good Evening 🌇";
  } else {
    body.style.background = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
    greeting.textContent = "Good Night 🌙";
  }
}

setInterval(updateClock, 1000);
updateClock();
