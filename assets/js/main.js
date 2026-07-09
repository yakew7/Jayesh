/* ==========================================================================
   Jayesh Learning Centre (JLC) — interactions
   Mobile nav, dropdowns, scroll reveals, counters, filter tabs, FAQ,
   testimonial slider, multi-step recommender quiz, forms, footer, year.
   All motion respects prefers-reduced-motion.
   ========================================================================== */
(function () {
  "use strict";

  var WA_NUMBER = "918591877127"; // wa.me — single source of truth
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function waLink(msg) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(
      msg || "Hi, I'd like to know more about Jayesh Learning Centre.");
  }

  /* ---- WhatsApp deep links -------------------------------------------- */
  function wireWhatsApp() {
    document.querySelectorAll("[data-wa]").forEach(function (el) {
      var href = waLink(el.getAttribute("data-wa"));
      if (el.tagName === "A") el.setAttribute("href", href);
    });
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
    // On mobile, tapping a dropdown parent toggles it; tapping a leaf closes menu.
    links.addEventListener("click", function (e) {
      var parentToggle = e.target.closest(".has-dropdown > a");
      if (parentToggle && window.matchMedia("(max-width: 1024px)").matches) {
        var dd = parentToggle.parentNode.querySelector(".dropdown");
        if (dd && !e.target.closest(".dropdown")) {
          e.preventDefault();
          dd.style.display = (dd.style.display === "none" || !dd.style.display) ? "block" : "none";
          return;
        }
      }
      if (e.target.closest("a") && !parentToggle) links.classList.remove("is-open");
    });
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
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Number counters ([data-count]) --------------------------------- */
  function tickNumber(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = (String(target).split(".")[1] || "").length;
    if (reduceMotion || isNaN(target)) { el.textContent = prefix + target + suffix; return; }
    var start = null, dur = 1200;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
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

  /* ---- Filter tabs ([data-tabs]) --------------------------------------- */
  function wireTabs() {
    document.querySelectorAll("[data-tabs]").forEach(function (group) {
      var scope = group.getAttribute("data-tabs-scope");
      var panelsRoot = scope ? document.querySelector(scope) : group.parentNode;
      group.addEventListener("click", function (e) {
        var btn = e.target.closest(".tab");
        if (!btn) return;
        var name = btn.getAttribute("data-tab");
        group.querySelectorAll(".tab").forEach(function (b) { b.classList.toggle("is-active", b === btn); });
        if (!panelsRoot) return;
        panelsRoot.querySelectorAll(".tab-panel").forEach(function (p) {
          p.hidden = p.getAttribute("data-panel") !== name && name !== "all" ?
            (p.getAttribute("data-panel") !== name) : p.getAttribute("data-panel") !== name;
        });
        // "all" panel support: items carry data-cat; show/hide instead of panels
        var items = panelsRoot.querySelectorAll("[data-cat]");
        if (items.length) {
          items.forEach(function (it) {
            it.style.display = (name === "all" || it.getAttribute("data-cat") === name) ? "" : "none";
          });
        }
      });
    });
  }

  /* ---- Testimonial / any slider arrows ([data-slider]) ----------------- */
  function wireSliders() {
    document.querySelectorAll("[data-slider]").forEach(function (wrap) {
      var track = wrap.querySelector(".slider");
      if (!track) return;
      wrap.querySelectorAll("[data-slide]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var dir = btn.getAttribute("data-slide") === "next" ? 1 : -1;
          track.scrollBy({ left: dir * (track.clientWidth * 0.8), behavior: "smooth" });
        });
      });
    });
  }

  /* ---- Multi-step recommender quiz ([data-quiz]) ----------------------- */
  function wireQuiz() {
    var quiz = document.querySelector("[data-quiz]");
    if (!quiz) return;
    var steps = Array.prototype.slice.call(quiz.querySelectorAll(".quiz-step"));
    var dots = quiz.querySelectorAll(".quiz-dot");
    var i = 0;
    function show(n) {
      i = Math.max(0, Math.min(steps.length - 1, n));
      steps.forEach(function (s, k) { s.hidden = k !== i; });
      dots.forEach(function (d, k) { d.classList.toggle("is-active", k <= i); });
    }
    quiz.addEventListener("click", function (e) {
      if (e.target.closest("[data-next]")) show(i + 1);
      if (e.target.closest("[data-prev]")) show(i - 1);
      var opt = e.target.closest(".quiz-opt");
      if (opt) {
        opt.parentNode.querySelectorAll(".quiz-opt").forEach(function (o) { o.classList.remove("is-selected"); });
        opt.classList.add("is-selected");
      }
    });
    show(0);
  }

  /* ---- Booking / contact forms → WhatsApp ------------------------------ */
  function wireForms() {
    document.querySelectorAll("form[data-wa-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var d = new FormData(form);
        var lines = ["Hi Jayesh Learning Centre,", ""];
        d.forEach(function (v, k) { if (v) lines.push(k + ": " + v); });
        window.open(waLink(lines.join("\n")), "_blank", "noopener");
      });
    });
  }

  /* ---- Footer year ----------------------------------------------------- */
  function setYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    wireWhatsApp();
    wireNav();
    wireReveals();
    wireCounters();
    wireTabs();
    wireSliders();
    wireQuiz();
    wireForms();
    setYear();
  });
})();
