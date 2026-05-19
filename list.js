const STUDENTS = [
  {
    id: 1,
    name: "김지수",
    dept: "컴퓨터공학과 2학년",
    match: 92,
    tags: ["스터디", "카페투어", "게임"],
    questionCount: 5,
    coverUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=4000&q=800",
  },
  {
    id: 2,
    name: "박준혁",
    dept: "산업디자인학과 3학년",
    match: 87,
    tags: ["그림", "영화감상", "독서"],
    questionCount: 5,
    coverUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=4000&q=800",
  },
  {
    id: 3,
    name: "이하은",
    dept: "심리학과 2학년",
    match: 84,
    tags: ["상담", "요가", "글쓰기"],
    questionCount: 5,
    coverUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=4000&q=800",
  },
  {
    id: 4,
    name: "최민재",
    dept: "경영학과 1학년",
    match: 79,
    tags: ["운동", "주식", "음악"],
    questionCount: 5,
    coverUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=4000&q=800",
  },
  {
    id: 5,
    name: "정수아",
    dept: "영어영문학과 3학년",
    match: 76,
    tags: ["여행", "요리", "독서"],
    questionCount: 5,
    coverUrl: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=4000&q=800",
  },
  {
    id: 6,
    name: "윤도현",
    dept: "기계공학과 2학년",
    match: 71,
    tags: ["자전거", "캠핑", "사진"],
    questionCount: 5,
    coverUrl: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=4000&q=800",
  },
  {
    id: 7,
    name: "임서연",
    dept: "식품영양학과 1학년",
    match: 68,
    tags: ["베이킹", "카페", "드라마"],
    questionCount: 5,
    coverUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=4000&q=800",
  },
  {
    id: 8,
    name: "강태민",
    dept: "전기전자공학과 4학년",
    match: 65,
    tags: ["코딩", "보드게임", "애니"],
    questionCount: 5,
    coverUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=4000&q=800",
  },
];

const FILTERS = ["전체", "90% 이상", "80% 이상", "70% 이상"];

// ── 상태 ─────────────────────────────────────────────────────
let activeFilter = "전체";
let searchQuery  = "";

// ── 필터 렌더 ────────────────────────────────────────────────
function renderFilters() {
  const bar = document.getElementById("filter-bar");
  bar.innerHTML = FILTERS.map((f) =>
    `<button
      class="filter-btn ${f === activeFilter ? "filter-btn--on" : "filter-btn--off"}"
      onclick="setFilter('${f}')"
    >${f}</button>`
  ).join("");
}

function setFilter(f) {
  activeFilter = f;
  renderFilters();
  renderCards();
}

// ── 카드 HTML 생성 ───────────────────────────────────────────
function cardHTML(s) {
  return `
    <div
      class="student-card"
      onclick="location.href='answers.html?id=${s.id}'"
    >
      <div class="card-cover">
        <img
          src="${s.coverUrl}"
          alt="${s.name}의 커버 이미지"
        />
      </div>
      <div class="card-body">
        <div class="card-avatar-row">
          <div class="card-avatar">${s.name[0]}</div>
          <span class="match-badge">${s.match}% 일치</span>
        </div>
        <div class="card-name">${s.name}</div>
        <div class="card-dept">${s.dept}</div>
        <div class="card-tags">
          ${s.tags.map((t) => `<span class="card-tag">${t}</span>`).join("")}
        </div>
        <div class="card-footer">
          <span class="card-q-count">답변 ${s.questionCount}개</span>
          <button class="answer-link-btn" onclick="...">
            <svg width="16" height="16" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ── 카드 목록 렌더 ───────────────────────────────────────────
function renderCards() {
  const grid = document.getElementById("student-grid");

  let list = STUDENTS;

  // 검색 필터
  if (searchQuery.trim()) {
    const q = searchQuery.trim();
    list = list.filter(
      (s) => s.name.includes(q) || s.dept.includes(q) || s.tags.some((t) => t.includes(q))
    );
  }

  // 일치율 필터
  if (activeFilter === "90% 이상") list = list.filter((s) => s.match >= 90);
  else if (activeFilter === "80% 이상") list = list.filter((s) => s.match >= 80);
  else if (activeFilter === "70% 이상") list = list.filter((s) => s.match >= 70);

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
             stroke="#d1d5db" stroke-width="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
        </svg>
        <p>조건에 맞는 학생이 없습니다.</p>
      </div>`;
    return;
  }


  grid.innerHTML = list.map(cardHTML).join("");
}

// ── 검색 핸들러 ─────────────────────────────────────────────
function handleSearch(value) {
  searchQuery = value;
  renderCards();
}

// ── 초기 렌더 ────────────────────────────────────────────────
renderFilters();
renderCards();