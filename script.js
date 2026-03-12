const panels = document.querySelectorAll('.panel');
const sections = document.querySelectorAll('.screen');
const navLinks = document.querySelectorAll('.nav-link');

const panelObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

panels.forEach((panel) => {
  panelObserver.observe(panel);
});

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const current = entry.target.dataset.section;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.dataset.section === current);
        });
      }
    });
  },
  { threshold: 0.55 }
);

sections.forEach((section) => {
  navObserver.observe(section);
});
