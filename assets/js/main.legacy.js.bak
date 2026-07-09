/* ==========================================================================
   Jayesh Learning Centre — interactions
   WhatsApp deep-links, grade-slip mark, scroll reveals, ink-stamp handoff,
   rubric number tick, mobile nav, hero parallax.
   All motion respects prefers-reduced-motion.
   ========================================================================== */
(function () {
  "use strict";

  var WA_NUMBER = "918591877127"; // wa.me/918591877127 — single source of truth
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- WhatsApp deep-link helper -------------------------------------- */
  function waLink(message) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message || "Hi, I'd like to know more about coaching at Jayesh Learning Centre.");
  }

  // Any element with [data-wa="message"] becomes a WhatsApp deep-link + stamp.
  function wireWhatsApp() {
    var nodes = document.querySelectorAll("[data-wa]");
    nodes.forEach(function (el) {
      var msg = el.getAttribute("data-wa");
      var href = waLink(msg);
      if (el.tagName === "A") el.setAttribute("href", href);
      el.addEventListener("click", function (e) {
        e.preventDefault();
        stampThen(el.getAttribute("data-stamp") || "Sent", function () {
          window.open(href, "_blank", "noopener");
        });
      });
    });
  }

  /* ---- Ink-stamp confirmation ----------------------------------------- */
  var overlay, stampEl;
  function ensureOverlay() {
    if (overlay) return;
    overlay = document.createElement("div");
    overlay.className = "stamp-overlay";
    overlay.setAttribute("aria-hidden", "true");
    stampEl = document.createElement("div");
    stampEl.className = "stamp";
    overlay.appendChild(stampEl);
    document.body.appendChild(overlay);
  }
  function stampThen(word, done) {
    if (reduceMotion) { done(); return; }
    ensureOverlay();
    stampEl.textContent = word;
    overlay.classList.add("is-on");
    window.setTimeout(function () {
      overlay.classList.remove("is-on");
      done();
    }, 650);
  }

  /* ---- Grade slip mark-in --------------------------------------------- */
  function markGradeSlip() {
    var slip = document.querySelector(".grade-slip");
    if (!slip) return;
    if (reduceMotion) { slip.classList.add("is-marked"); return; }
    window.setTimeout(function () { slip.classList.add("is-marked"); }, 550);
  }

  /* ---- Scroll reveals -------------------------------------------------- */
  function wireReveals() {
    var els = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Rubric / stat number tick -------------------------------------- */
  function tickNumber(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = (String(target).split(".")[1] || "").length;
    if (reduceMotion || isNaN(target)) { el.textContent = target + suffix; return; }
    var start = null, dur = 1100;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(step);
  }
  function wireCounters() {
    var els = document.querySelectorAll("[data-count]");
    if (!("IntersectionObserver" in window)) { els.forEach(tickNumber); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { tickNumber(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Mobile nav ------------------------------------------------------ */
  function wireNav() {
    var toggle = document.querySelector(".nav__toggle");
    var links = document.querySelector(".nav__links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) links.classList.remove("is-open");
    });
  }

  /* ---- Hero ruled-paper parallax -------------------------------------- */
  function wireParallax() {
    var hero = document.querySelector(".hero");
    if (!hero || reduceMotion) return;
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      if (y < window.innerHeight) hero.style.backgroundPositionY = (y * 0.25) + "px";
    }, { passive: true });
  }

  /* ---- Enquiry form -> WhatsApp --------------------------------------- */
  function wireEnquiryForm() {
    var form = document.getElementById("enquiry-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var lines = [
        "Hi Jayesh Learning Centre, I'd like to enquire about coaching.",
        "",
        "Name: " + (d.get("name") || "-"),
        "Phone: " + (d.get("phone") || "-"),
        "Grade / Year: " + (d.get("grade") || "-"),
        "Curriculum: " + (d.get("curriculum") || "-"),
        "Subjects / notes: " + (d.get("notes") || "-")
      ];
      var href = waLink(lines.join("\n"));
      stampThen("Sent", function () { window.open(href, "_blank", "noopener"); });
    });
  }

  /* ---- Results tabs (choose which board's results to see) ------------- */
  function wireResultTabs() {
    document.querySelectorAll("[data-result-tabs]").forEach(function (tablist) {
      var panels = tablist.parentNode.querySelector(".result-panels");
      if (!panels) return;
      tablist.addEventListener("click", function (e) {
        var btn = e.target.closest(".result-tab");
        if (!btn) return;
        var name = btn.getAttribute("data-tab");
        tablist.querySelectorAll(".result-tab").forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-selected", on ? "true" : "false");
        });
        panels.querySelectorAll(".result-panel").forEach(function (p) {
          p.hidden = p.getAttribute("data-panel") !== name;
        });
      });
    });
  }

  /* ---- Footer year ----------------------------------------------------- */
  function setYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---- Init ------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    wireWhatsApp();
    markGradeSlip();
    wireReveals();
    wireCounters();
    wireNav();
    wireParallax();
    wireEnquiryForm();
    wireResultTabs();
    setYear();
  });
})();
