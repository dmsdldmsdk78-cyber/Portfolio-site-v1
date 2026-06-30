const projects = {
  "figma-app": {
    category: "Figma Project",
    title: "App UI Kit 📱",
    desc: "모바일 서비스 흐름을 기준으로 와이어프레임, 컴포넌트, 화면 스타일을 정리한 Figma UI 작업입니다. 사용자가 처음 보는 화면도 자연스럽게 이해할 수 있도록 구조와 컴포넌트를 설계했습니다.",
    tags: ["Figma", "UI Kit", "Component", "Prototype"],
    link: "https://www.figma.com/proto/hEAJVmSiuWIch7T54ZYpaW/%ED%94%BC%EA%B7%B8%EB%A7%88%EC%9E%85%EB%AC%B8?node-id=113-174&p=f&t=esr6KKKNkuaZ7glB-1&scaling=min-zoom&content-scaling=fixed&page-id=113%3A173",
    detailLink: "https://www.figma.com/proto/hEAJVmSiuWIch7T54ZYpaW/%ED%94%BC%EA%B7%B8%EB%A7%88%EC%9E%85%EB%AC%B8?node-id=113-174&p=f&t=esr6KKKNkuaZ7glB-1&scaling=min-zoom&content-scaling=fixed&page-id=113%3A173",
    img: "./img/image.png",
    imgAlt: "App UI Kit Figma 프로젝트 이미지"
  },
  "pub-poster": {
    category: "Publisher Project",
    title: "Sweet Dream 🌙",
    desc: "몽환적이고 사랑스러운 무드의 수면/잠옷 브랜드 콘셉트 웹사이트입니다. 컬러, 이미지, 타이포그래피를 활용해 부드럽고 감성적인 랜딩 페이지로 퍼블리싱했습니다.",
    tags: ["HTML", "CSS", "Responsive", "Visual"],
    link: "https://sweet-dream-pi.vercel.app/",
    detailLink: "https://sweet-dream-pi.vercel.app/",
    img: "./img/2026-07-01 03;43;36.jpeg",
    imgAlt: "Sweet Dream 퍼블리셔 프로젝트 이미지"
  },
  "pub-brochure": {
    category: "Publisher Project",
    title: "MUM Pet Shop 🐾",
    desc: "반려동물 쇼핑몰 콘셉트의 퍼블리싱 프로젝트입니다. 상품 카드, 카테고리, 메인 비주얼을 중심으로 귀엽고 친근한 쇼핑몰 화면을 구성했습니다.",
    tags: ["HTML", "CSS", "Shopping Mall", "Layout"],
    link: "https://mum-pet-shop.vercel.app/",
    detailLink: "https://mum-pet-shop.vercel.app/",
    img: "./img/petmall.png",
    imgAlt: "MUM Pet Shop 퍼블리셔 프로젝트 이미지"
  },
  "pub-detail": {
    category: "Publisher Project",
    title: "Pet Hospital 🏥",
    desc: "동물병원 웹사이트 콘셉트의 퍼블리싱 프로젝트입니다. 신뢰감 있는 정보 구조와 부드러운 비주얼을 바탕으로 병원 소개, 서비스, 예약 흐름을 보기 쉽게 구성했습니다.",
    tags: ["HTML", "CSS", "Hospital", "Responsive"],
    link: "https://pet-hospital-site-v1.vercel.app/",
    detailLink: "https://pet-hospital-site-v1.vercel.app/",
    img: "./img/pet.png",
    imgAlt: "Pet Hospital 퍼블리셔 프로젝트 이미지"
  },
  "couple-test": {
    category: "Front-end Project",
    title: "Couple Test 💘",
    desc: "사용자가 직접 질문과 선택지를 만들고 공유 링크로 테스트를 전달하는 인터랙티브 퀴즈 프로젝트입니다. URL 파라미터와 상태 관리를 활용해 응답 결과를 계산하도록 구성했습니다.",
    tags: ["React", "Quiz Logic", "URL Share", "State"],
    link: "https://couple-quiz-mocha.vercel.app/",
    detailLink: "https://couple-quiz-mocha.vercel.app/",
    img: "./img/coupletest.GIF",
    imgAlt: "Couple Test 프론트엔드 프로젝트 이미지"
  },
  "photo-booth": {
    category: "Front-end Project",
    title: "Photo Booth 📸",
    desc: "MediaDevices API로 카메라 영상을 가져오고 Canvas 합성을 통해 이미지를 저장할 수 있도록 만든 Y2K 스타일 웹 포토부스 프로젝트입니다.",
    tags: ["JavaScript", "Camera API", "Canvas", "Interaction"],
    link: "https://photobooth-git-main-dmsdldmsdk78-cybers-projects.vercel.app/",
    detailLink: "https://photobooth-git-main-dmsdldmsdk78-cybers-projects.vercel.app/",
    img: "./img/window.gif",
    imgAlt: "Photo Booth 프론트엔드 프로젝트 이미지"
  }
};

const stickers = document.querySelectorAll(".sticker-item");
const tabs = document.querySelectorAll(".tab");
const categoryEl = document.querySelector("#projectCategory");
const titleEl = document.querySelector("#projectTitle");
const descEl = document.querySelector("#projectDesc");
const tagsEl = document.querySelector("#projectTags");
const linkEl = document.querySelector("#projectLink");
const detailLinkEl = document.querySelector("#projectDetailLink");
const previewEl = document.querySelector("#projectPreview");
const cursorBlob = document.querySelector(".cursor-blob");

function makePreview(project) {
  return `
    <a class="preview-link" href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="${project.title} 사이트 새 창으로 열기">
      <img src="${project.img}" alt="${project.imgAlt}" />
    </a>
  `;
}

function updateProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  previewEl.classList.add("change");

  window.setTimeout(() => {
    categoryEl.textContent = project.category;
    titleEl.textContent = project.title;
    descEl.textContent = project.desc;
    linkEl.href = project.link;
    detailLinkEl.href = project.detailLink || project.link;
    tagsEl.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
    previewEl.innerHTML = makePreview(project);
    previewEl.classList.remove("change");
  }, 170);

  stickers.forEach((sticker) => {
    sticker.classList.toggle("active", sticker.dataset.id === projectId);
  });
}

stickers.forEach((sticker) => {
  sticker.addEventListener("click", () => {
    updateProject(sticker.dataset.id);
    document.querySelector("#projectDetail").scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    tabs.forEach((item) => item.classList.toggle("active", item === tab));

    stickers.forEach((sticker) => {
      const isVisible = filter === "all" || sticker.dataset.category === filter;
      sticker.classList.toggle("is-hidden", !isVisible);
    });
  });
});

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.14 });

revealEls.forEach((el) => revealObserver.observe(el));

window.addEventListener("pointermove", (event) => {
  if (!cursorBlob) return;
  cursorBlob.style.left = `${event.clientX}px`;
  cursorBlob.style.top = `${event.clientY}px`;
});

updateProject("figma-app");

const flipCard = document.querySelector(".flip-card");
if (flipCard) {
  flipCard.addEventListener("click", () => {
    const isFlipped = flipCard.classList.toggle("is-flipped");
    flipCard.setAttribute("aria-pressed", String(isFlipped));
  });
}
