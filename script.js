// 화면에 들어온 패널에 show 클래스를 붙여서 등장 애니메이션 실행
const panels = document.querySelectorAll('.panel');

// 각 섹션(section) 요소
const sections = document.querySelectorAll('.screen');

// 상단 네비게이션 링크
const navLinks = document.querySelectorAll('.nav-link');


// 패널이 화면에 보이면 show 클래스 추가
const panelObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

        // 한 번 보여준 패널은 다시 감시하지 않음
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2, // 패널이 20% 보이면 실행
  }
);

// 모든 패널에 observer 연결
panels.forEach((panel) => {
  panelObserver.observe(panel);
});


// 현재 화면에 보이는 section에 맞춰 nav active 변경
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
  {
    threshold: 0.35, // 섹션이 35% 정도 보이면 감지
    rootMargin: '-10% 0px -20% 0px', // 감지 기준 영역을 살짝 위로 당김
  }
);

// 모든 section에 observer 연결
sections.forEach((section) => {
  navObserver.observe(section);
});