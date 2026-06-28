
const panels = document.querySelectorAll(".panel");
const sections = document.querySelectorAll(".screen");
const navLinks = document.querySelectorAll(".nav-link");

const showPanel = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
};

const updateActiveNav = (entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const currentSection = entry.target.dataset.section;

    navLinks.forEach((link) => {
      const isActive = link.dataset.section === currentSection;
      link.classList.toggle("active", isActive);
    });
  });
};

const panelObserver = new IntersectionObserver(showPanel, {
  threshold: 0.2,
});

const navObserver = new IntersectionObserver(updateActiveNav, {
  threshold: 0.35,
  rootMargin: "-10% 0px -20% 0px",
});

panels.forEach((panel) => panelObserver.observe(panel));
sections.forEach((section) => navObserver.observe(section));

