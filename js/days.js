const container = document.getElementById("days");
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const today = new Date();

    // генерируем 30 дней вперед
for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dayName = weekDays[date.getDay()];
    const div = document.createElement("div");
    div.className = "day";
    div.innerHTML = `${dayName}<br>${date.getDate()}`;

    if (i === 0) div.classList.add("active");

    div.addEventListener("click", () => {
    document.querySelectorAll(".day").forEach(d => d.classList.remove("active"));
    div.classList.add("active");
    });

    container.appendChild(div);
}

    // стрелочки для пролистывания
    document.getElementById("left").addEventListener("click", () => {
      container.scrollBy({ left: -520, behavior: "smooth" });
    });

    document.getElementById("right").addEventListener("click", () => {
      container.scrollBy({ left: 520, behavior: "smooth" });
    });