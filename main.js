(function () {
  const chips = Array.from(document.querySelectorAll(".chip"));
  const samples = Array.from(document.querySelectorAll(".sample"));
  const count = document.getElementById("count");
  const empty = document.getElementById("empty");
  const dialog = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbTitle = document.getElementById("lb-title");
  const lbMedium = document.getElementById("lb-medium");
  const lbWa = document.getElementById("lb-wa");
  const lbCount = document.getElementById("lb-count");
  const lbClose = document.getElementById("lb-close");
  let opener = null;
  let current = null;

  function visibleSamples() {
    return samples.filter((sample) => !sample.hidden);
  }

  function setFilter(name) {
    chips.forEach((chip) => {
      chip.setAttribute("aria-pressed", String(chip.dataset.filter === name));
    });
    let shown = 0;
    samples.forEach((sample) => {
      const match = name === "all" || sample.dataset.cat === name;
      sample.hidden = !match;
      if (match) shown += 1;
    });
    count.textContent = shown === 1 ? "1 study" : shown + " studies";
    empty.hidden = shown !== 0;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => setFilter(chip.dataset.filter));
  });

  function show(sample) {
    const list = visibleSamples();
    const index = Math.max(0, list.indexOf(sample));
    current = list[index] || sample;
    const full = current.dataset.full;
    lbImg.src = full;
    lbImg.width = Number(current.dataset.w);
    lbImg.height = Number(current.dataset.h);
    lbImg.alt = current.dataset.alt;
    lbTitle.textContent = current.dataset.title;
    lbMedium.textContent = current.dataset.medium;
    lbWa.href = current.querySelector(".inquire").href;
    const place = list.indexOf(current);
    lbCount.textContent = place === -1 ? "" : place + 1 + " of " + list.length;
  }

  function openCard(sample, source) {
    if (!sample) return;
    if (sample.hidden) setFilter("all");
    opener = source || document.activeElement;
    show(sample);
    if (!dialog.open) dialog.showModal();
    lbClose.focus();
  }

  function step(direction) {
    const list = visibleSamples();
    if (!list.length || !current) return;
    let index = list.indexOf(current);
    if (index === -1) index = 0;
    const next = list[(index + direction + list.length) % list.length];
    show(next);
  }

  document.querySelectorAll(".open-work").forEach((button) => {
    const card = button.closest(".sample");
    button.setAttribute("aria-label", "Open " + card.dataset.title);
    button.addEventListener("click", () => openCard(card, button));
  });

  document.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => {
      openCard(document.getElementById(button.dataset.open), button);
    });
  });

  document.getElementById("lb-prev").addEventListener("click", () => step(-1));
  document.getElementById("lb-next").addEventListener("click", () => step(1));

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
    }
  });

  dialog.addEventListener("close", () => {
    if (opener && typeof opener.focus === "function") opener.focus();
  });

  const floatButton = document.querySelector(".float-wa");
  const heroSheet = document.querySelector(".hero-sheet");
  if (floatButton && heroSheet && "IntersectionObserver" in window) {
    const floatObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          floatButton.classList.toggle("is-hidden", entry.isIntersecting && entry.intersectionRatio > 0.25);
        });
      },
      { threshold: [0, 0.25, 0.6] }
    );
    floatObserver.observe(heroSheet);
  }

  const thread = document.querySelector(".thread");
  if (thread) {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      thread.classList.add("is-drawn");
    } else if ("IntersectionObserver" in window) {
      thread.classList.add("will-draw");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            thread.classList.add("is-drawn");
            observer.disconnect();
          });
        },
        { threshold: 0.6 }
      );
      observer.observe(thread);
    } else {
      thread.classList.add("is-drawn");
    }
  }
})();
