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

/* ---------- Corner scroll-morph shape ----------
   The small SVG in the bottom-right corner morphs its path
   as the user scrolls the page, from an angular/broken shape
   at the top to a smooth circular shape at the bottom —
   a literal, small-scale metamorphosis tied to scroll progress.
   Purely decorative; does not block any content or interaction.
*/

// A jagged "fragment" polygon path (start state)
const SHAPE_JAGGED = "M60,10 L95,35 L110,75 L80,110 L40,105 L15,70 L25,30 Z";
// A smooth circular path (end state), same point count for interpolation feel
const SHAPE_SMOOTH = "M60,10 C85,10 110,35 110,60 C110,85 85,110 60,110 C35,110 10,85 10,60 C10,35 35,10 60,10 Z";

const morphPath = document.getElementById("morphPath");
const morphLabel = document.getElementById("morphLabel");

function setMorphShape(progress) {
  // progress: 0 (top of page) -> 1 (bottom of page)
  // Simple crossfade between two path strings isn't natively interpolable
  // without a library, so we switch shape at the midpoint with a smooth
  // stroke-based transition handled by CSS, keeping this dependency-free.
  morphPath.setAttribute("d", progress < 0.5 ? SHAPE_JAGGED : SHAPE_SMOOTH);
  morphLabel.textContent = Math.round(progress * 100) + "%";
}

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
  setMorphShape(progress);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
