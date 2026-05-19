// answers.js — 화면 2: 답변 열람 로직

// ── 더미 데이터 ──────────────────────────────────────────────
const STUDENTS = [
  {
    id: 1,
    name: "김지수",
    dept: "컴퓨터공학과 2학년",
    match: 92,
    tags: ["스터디", "카페투어", "게임"],
    coverUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=4000&q=100",
    answers: [
      {
        qId: 1,
        question: "학기 초에 새 친구를 사귈 때 가장 좋아하는 방법은 무엇인가요?",
        text: "같이 공부하면서 자연스럽게 친해지는 게 제일 좋아요. 카페에서 각자 공부하다가 쉬는 시간에 얘기하다 보면 어느새 친해져 있더라고요. 부담 없이 시작할 수 있어서 좋아요.",
        date: "2025.03.05",
      },
      {
        qId: 2,
        question: "자신을 동물에 비유한다면 어떤 동물이고, 그 이유는 무엇인가요?",
        text: "고양이요! 처음에는 낯을 좀 가리는 편이지만 친해지면 엄청 붙어다니거든요. 혼자 있는 시간도 좋아하지만 친한 사람들과 함께하는 건 더 좋아해요.",
        date: "2025.03.05",
      },
      {
        qId: 3,
        question: "지금 가장 빠져있는 취미나 관심사가 있다면 소개해 주세요.",
        text: "요즘 카페 투어에 빠져있어요. 새로운 카페를 발견하는 재미가 있거든요. 공부도 하면서 예쁜 공간도 즐기는 일석이조! 혹시 같이 가실 분 있으면 연락해요 😊",
        date: "2025.03.05",
      },
      {
        qId: 4,
        question: "스트레스를 받을 때 주로 어떻게 해소하나요?",
        text: "게임을 해요. 특히 팀 게임을 하면서 친구들이랑 소통하다 보면 스트레스가 확 풀려요. 아니면 좋아하는 음악 들으면서 산책하는 것도 좋아요.",
        date: "2025.03.05",
      },
      {
        qId: 5,
        question: "이번 학기에 꼭 이루고 싶은 목표가 있나요?",
        text: "전공 공부 열심히 해서 성적 장학금 받는 게 목표예요. 그리고 StudentMeet을 통해 다양한 전공 친구들도 많이 만들고 싶어요. 나중에 프로젝트도 같이 할 수 있으면 좋겠어요!",
        date: "2025.03.05",
      },
    ],
  },
  {
    id: 2,
    name: "박준혁",
    dept: "산업디자인학과 3학년",
    match: 87,
    tags: ["그림", "영화감상", "독서"],
    coverUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=4000&q=100",
    answers: [
      {
        qId: 1,
        question: "학기 초에 새 친구를 사귈 때 가장 좋아하는 방법은 무엇인가요?",
        text: "공통 관심사를 찾는 게 제일 효과적이더라고요. 저는 영화나 책 얘기를 꺼내면 대화가 잘 이어지는 편이에요. 취향이 맞으면 금방 친해져요.",
        date: "2025.03.06",
      },
      {
        qId: 2,
        question: "자신을 동물에 비유한다면 어떤 동물이고, 그 이유는 무엇인가요?",
        text: "부엉이요. 밤에 더 집중이 잘 되고, 조용히 관찰하는 걸 좋아해요. 말보다는 그림이나 글로 표현하는 걸 편하게 느껴요.",
        date: "2025.03.06",
      },
      {
        qId: 3,
        question: "지금 가장 빠져있는 취미나 관심사가 있다면 소개해 주세요.",
        text: "요즘 아날로그 사진에 빠져있어요. 필름카메라로 찍으면 나오는 결과물이 매번 달라서 재미있어요. 사진 같이 찍으러 가실 분 환영해요!",
        date: "2025.03.06",
      },
      {
        qId: 4,
        question: "스트레스를 받을 때 주로 어떻게 해소하나요?",
        text: "영화관에 혼자 가는 편이에요. 어두운 곳에서 큰 화면으로 몰입하면 잡생각이 사라져요. 아니면 스케치북에 낙서하다 보면 마음이 편해지기도 해요.",
        date: "2025.03.06",
      },
      {
        qId: 5,
        question: "이번 학기에 꼭 이루고 싶은 목표가 있나요?",
        text: "졸업 작품 준비를 잘 마무리하는 게 가장 큰 목표예요. 그리고 전공이 다른 친구들이랑 협업 프로젝트를 하나 해보고 싶어요. 디자인 + 개발 콜라보 도전해보고 싶어요!",
        date: "2025.03.06",
      },
    ],
  },
  {
    id: 3,
    name: "이하은",
    dept: "심리학과 2학년",
    match: 84,
    tags: ["상담", "요가", "글쓰기"],
    coverUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=4000&q=100",
    answers: [
      { qId: 1, question: "학기 초에 새 친구를 사귈 때 가장 좋아하는 방법은 무엇인가요?", text: "먼저 말 걸기가 어려운 편이라 보통 먼저 다가와 주시면 정말 반가워요. 한 번 친해지면 많이 챙기는 스타일이에요.", date: "2025.03.07" },
      { qId: 2, question: "자신을 동물에 비유한다면 어떤 동물이고, 그 이유는 무엇인가요?", text: "토끼요. 겉으로는 얌전해 보이지만 사실 엄청 활발하고 호기심이 많아요.", date: "2025.03.07" },
      { qId: 3, question: "지금 가장 빠져있는 취미나 관심사가 있다면 소개해 주세요.", text: "요가와 명상에 빠져있어요. 아침에 30분만 해도 하루가 달라지는 것 같아요!", date: "2025.03.07" },
      { qId: 4, question: "스트레스를 받을 때 주로 어떻게 해소하나요?", text: "일기를 써요. 감정을 글로 정리하면 훨씬 마음이 가벼워지거든요. 심리학과다 보니 감정 탐구가 취미가 됐어요.", date: "2025.03.07" },
      { qId: 5, question: "이번 학기에 꼭 이루고 싶은 목표가 있나요?", text: "상담 심리 자격증 공부 시작하는 게 목표예요. 그리고 글쓰기 소모임에 가입해보고 싶어요!", date: "2025.03.07" },
    ],
  },
  {
    id: 4,
    name: "최민재",
    dept: "경영학과 1학년",
    match: 79,
    tags: ["운동", "주식", "음악"],
    coverUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=4000&q=100",
    answers: [
      { qId: 1, question: "학기 초에 새 친구를 사귈 때 가장 좋아하는 방법은 무엇인가요?", text: "같이 밥 먹으러 가는 게 제일 좋아요. 밥 먹으면서 편하게 얘기하다 보면 친해지더라고요.", date: "2025.03.08" },
      { qId: 2, question: "자신을 동물에 비유한다면 어떤 동물이고, 그 이유는 무엇인가요?", text: "강아지요! 처음 보는 사람도 반갑게 대하고 에너지가 넘치는 편이에요.", date: "2025.03.08" },
      { qId: 3, question: "지금 가장 빠져있는 취미나 관심사가 있다면 소개해 주세요.", text: "헬스랑 주식 공부요. 몸도 챙기고 자산도 챙기는 일석이조 삶 추구 중이에요!", date: "2025.03.08" },
      { qId: 4, question: "스트레스를 받을 때 주로 어떻게 해소하나요?", text: "헬스장 가서 확 풀어요. 운동 끝나면 거짓말처럼 스트레스가 사라져요.", date: "2025.03.08" },
      { qId: 5, question: "이번 학기에 꼭 이루고 싶은 목표가 있나요?", text: "학교 생활에 빨리 적응하고 동아리도 하나 들어가는 게 목표예요. 1학년이라 모든 게 새로워요!", date: "2025.03.08" },
    ],
  },
  {
    id: 5, name: "정수아", dept: "영어영문학과 3학년", match: 76, tags: ["여행","요리","독서"],
    coverUrl: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=4000&q=100",
    answers: [
      { qId: 1, question: "학기 초에 새 친구를 사귈 때 가장 좋아하는 방법은 무엇인가요?", text: "독서 모임처럼 공통 주제가 있는 모임에서 만나는 게 좋아요.", date: "2025.03.09" },
      { qId: 2, question: "자신을 동물에 비유한다면 어떤 동물이고, 그 이유는 무엇인가요?", text: "여우요. 관찰을 많이 하다가 타이밍을 보고 다가가는 편이에요.", date: "2025.03.09" },
      { qId: 3, question: "지금 가장 빠져있는 취미나 관심사가 있다면 소개해 주세요.", text: "요리에 빠져있어요. 특히 다양한 나라 음식 만들어보기가 요즘 목표예요!", date: "2025.03.09" },
      { qId: 4, question: "스트레스를 받을 때 주로 어떻게 해소하나요?", text: "좋아하는 소설 읽어요. 다른 세계로 빠져들면 현실 스트레스가 잠깐 잊혀요.", date: "2025.03.09" },
      { qId: 5, question: "이번 학기에 꼭 이루고 싶은 목표가 있나요?", text: "교환학생 지원 준비하는 게 목표예요. 해외에서 한 학기 보내는 게 꿈이에요!", date: "2025.03.09" },
    ],
  },
  {
    id: 6, name: "윤도현", dept: "기계공학과 2학년", match: 71, tags: ["자전거","캠핑","사진"],
    coverUrl: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=4000&q=100",
    answers: [
      { qId: 1, question: "학기 초에 새 친구를 사귈 때 가장 좋아하는 방법은 무엇인가요?", text: "같이 야외 활동 하는 게 제일 좋아요. 자전거 타거나 등산하면서 자연스럽게 친해지는 타입이에요.", date: "2025.03.10" },
      { qId: 2, question: "자신을 동물에 비유한다면 어떤 동물이고, 그 이유는 무엇인가요?", text: "독수리요. 높은 곳에서 전체를 바라보는 걸 좋아하고, 목표가 생기면 집중하는 편이에요.", date: "2025.03.10" },
      { qId: 3, question: "지금 가장 빠져있는 취미나 관심사가 있다면 소개해 주세요.", text: "필름 카메라로 야외 사진 찍는 것과 캠핑이에요. 자연 속에 있을 때 가장 편해요.", date: "2025.03.10" },
      { qId: 4, question: "스트레스를 받을 때 주로 어떻게 해소하나요?", text: "자전거 타고 한강 달려요. 바람 맞으면서 달리다 보면 머릿속이 깨끗해져요.", date: "2025.03.10" },
      { qId: 5, question: "이번 학기에 꼭 이루고 싶은 목표가 있나요?", text: "학과 설계 경진대회에 나가는 게 목표예요. 그리고 자전거로 제주도 한 바퀴 도는 것도 버킷리스트예요!", date: "2025.03.10" },
    ],
  },
  {
    id: 7, name: "임서연", dept: "식품영양학과 1학년", match: 68, tags: ["베이킹","카페","드라마"],
    coverUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=4000&q=100",
    answers: [
      { qId: 1, question: "학기 초에 새 친구를 사귈 때 가장 좋아하는 방법은 무엇인가요?", text: "제가 만든 쿠키나 빵을 나눠주면서 친해져요. 음식을 나누면 친해지기 쉬운 것 같아요!", date: "2025.03.11" },
      { qId: 2, question: "자신을 동물에 비유한다면 어떤 동물이고, 그 이유는 무엇인가요?", text: "햄스터요. 귀엽고 조용해 보이지만 사실 엄청 부지런하고 뭔가를 항상 하고 있어요.", date: "2025.03.11" },
      { qId: 3, question: "지금 가장 빠져있는 취미나 관심사가 있다면 소개해 주세요.", text: "베이킹에 완전 빠졌어요. 주말마다 새 레시피 도전하고 있어요. 맛있는 거 좋아하시면 한번 드셔보세요!", date: "2025.03.11" },
      { qId: 4, question: "스트레스를 받을 때 주로 어떻게 해소하나요?", text: "드라마 몰아보기예요. 요즘은 판타지 장르에 빠져있어요. 현실 탈출 최고의 방법이에요.", date: "2025.03.11" },
      { qId: 5, question: "이번 학기에 꼭 이루고 싶은 목표가 있나요?", text: "베이킹 자격증 취득이 목표예요. 나중에 작은 베이커리 카페를 열고 싶어요!", date: "2025.03.11" },
    ],
  },
  {
    id: 8, name: "강태민", dept: "전기전자공학과 4학년", match: 65, tags: ["코딩","보드게임","애니"],
    coverUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=4000&q=100",
    answers: [
      { qId: 1, question: "학기 초에 새 친구를 사귈 때 가장 좋아하는 방법은 무엇인가요?", text: "같이 보드게임 하면서 친해지는 게 제일 자연스러운 것 같아요. 보드게임 카페 좋아하시는 분 연락 주세요!", date: "2025.03.12" },
      { qId: 2, question: "자신을 동물에 비유한다면 어떤 동물이고, 그 이유는 무엇인가요?", text: "거북이요. 느긋하게 보이지만 목표가 생기면 꾸준히 끝까지 가는 편이에요.", date: "2025.03.12" },
      { qId: 3, question: "지금 가장 빠져있는 취미나 관심사가 있다면 소개해 주세요.", text: "사이드 프로젝트 개발이요. 요즘 AI 관련 앱 만들고 있는데 재미있어요. 같이 해보실 분 구해요!", date: "2025.03.12" },
      { qId: 4, question: "스트레스를 받을 때 주로 어떻게 해소하나요?", text: "코딩에 빠지면 스트레스가 풀려요. 뭔가를 만들다 보면 다른 잡생각이 사라지거든요.", date: "2025.03.12" },
      { qId: 5, question: "이번 학기에 꼭 이루고 싶은 목표가 있나요?", text: "졸업 논문 잘 마무리하고 취업 준비 시작하는 게 목표예요. 4학년이 이렇게 빨리 올 줄 몰랐어요.", date: "2025.03.12" },
    ],
  },
];

// ── URL에서 학생 ID 파싱 ──────────────────────────────────────
const params  = new URLSearchParams(window.location.search);
const sid     = parseInt(params.get("id"), 10) || 1;
const student = STUDENTS.find((s) => s.id === sid) || STUDENTS[0];

// ── 프로필 헤더 렌더 ─────────────────────────────────────────
function renderProfileHeader() {
  document.getElementById("profile-header").innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar">${student.name[0]}</div>
      <div>
        <div class="profile-name">${student.name}</div>
        <div class="profile-dept">${student.dept}</div>
        <div class="profile-tags">
          ${student.tags.map((t) => `<span class="profile-tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="profile-match">
        <div class="profile-match__num">${student.match}%</div>
        <div class="profile-match__label">일치도</div>
      </div>
    </div>
  `;
  document.title = `${student.name}의 답변 — StudentMeet`;
}

// ── 답변 목록 렌더 ───────────────────────────────────────────
function renderAnswers() {
  const wrap = document.getElementById("tab-answers");
  wrap.innerHTML = student.answers.map((a) => `
    <div class="q-section">
      <div class="q-label">
        <div class="q-num">Q${a.qId}</div>
        <div class="q-text">${a.question}</div>
      </div>
      <div class="answer-card">
        <div class="answer-card__hd">
          <div class="answer-avatar">${student.name[0]}</div>
          <div class="answer-author">${student.name}</div>
          <div class="answer-date">${a.date}</div>
        </div>
        <p class="answer-body">${a.text}</p>
      </div>
    </div>
  `).join("");
}

// ── 탭 전환 ─────────────────────────────────────────────────
function switchTab(tab, btn) {
  document.querySelectorAll(".tab-btn").forEach((b) => {
    b.className = "tab-btn tab-btn--off";
  });
  btn.className = "tab-btn tab-btn--on";

  document.getElementById("tab-answers").style.display = tab === "answers" ? "" : "none";
  document.getElementById("tab-memo").style.display    = tab === "memo"    ? "" : "none";
}

// ── 메모 저장 ────────────────────────────────────────────────
function saveMemo() {
  const val = document.getElementById("memo-input").value.trim();
  if (!val) { alert("메모를 입력해 주세요."); return; }
  // 실제 프로젝트에서는 서버 저장 or localStorage
  alert(`메모가 저장되었습니다.\n\n"${val}"`);
}

// ── 초기 렌더 ────────────────────────────────────────────────
renderProfileHeader();
renderAnswers();