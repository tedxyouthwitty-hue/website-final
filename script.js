/* =========================================================
   TEDxWittyIntlSchoolYouth — script.js
   Handles: countdown timer, scroll-driven corner morph shape.
   ========================================================= */

/* ---------- Countdown ----------
   EDITABLE: change the target date/time below if it changes.
   Format: new Date("YYYY-MM-DDTHH:MM:SS")
*/
const EVENT_DATE = new Date("2026-10-10T09:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = EVENT_DATE - now;

  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");
  const secsEl = document.getElementById("cd-secs");

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minsEl.textContent = "00";
    secsEl.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minsEl.textContent = String(mins).padStart(2, "0");
  secsEl.textContent = String(secs).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ---------- Corner scroll butterfly life-cycle ----------
   Egg (0–25%) -> Caterpillar (25–50%) -> Chrysalis (50–75%) -> Butterfly (75–100%)
*/
const STAGES = ["stage-egg", "stage-caterpillar", "stage-chrysalis", "stage-butterfly"];
const STAGE_LABELS = ["Egg", "Caterpillar", "Chrysalis", "Butterfly"];
const morphLabel = document.getElementById("morphLabel");

function setStage(progress) {
  let idx;
  if (progress < 0.25) idx = 0;
  else if (progress < 0.5) idx = 1;
  else if (progress < 0.75) idx = 2;
  else idx = 3;

  STAGES.forEach((id, i) => {
    document.getElementById(id).classList.toggle("active", i === idx);
  });
  morphLabel.textContent = STAGE_LABELS[idx];
}

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
  setStage(progress);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
