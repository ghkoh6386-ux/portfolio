/* 버튼 밑줄 */
const tabButtons = document.querySelectorAll('.tab-btn');
console.log(tabButtons)

tabButtons[0].classList.add('on');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('on'));
    button.classList.add('on');
  });
});
/* 서브버튼 색 */
const subTabButtons = document.querySelectorAll('.sub-tab-btn')

subTabButtons[0].classList.add('on')

subTabButtons.forEach(button => {
  button.addEventListener('click', () => {
    subTabButtons.forEach(btn => btn.classList.remove('on'));
    button.classList.add('on');
  });
});
const contentsWrap = document.querySelector('.contents .inner');
const allContents = Array.from(contentsWrap.children).filter(el =>
  el.className.startsWith('content')
);

const eduContents = document.querySelectorAll('.edu');
const noTicket = document.querySelector('.no-ticket h2');
const subTabMenu = document.querySelector('.sub-tab-menu');
const moreWrap = document.querySelector('.more');
const moreBtn = document.querySelector('.btn-more');

const tabBtns = document.querySelectorAll('.tab-btn');
const subTabBtns = document.querySelectorAll('.sub-tab-btn');
const sortBtns = document.querySelectorAll('.sub-title button');
const countStrong = document.querySelector('.sub-title strong');

/* =========================
   공통 함수
========================= */
function hideAll() {
  allContents.forEach(c => c.style.display = 'none');
  noTicket.classList.remove('on');
  moreWrap.style.display = 'none';
}

function updateCount() {
  const visible = allContents.filter(c => c.style.display !== 'none');
  countStrong.textContent = visible.length;
}

function resetSort() {
  sortBtns.forEach(btn => btn.classList.remove('on'));
  sortBtns[0].classList.add('on'); // 최신순
}

function sortContents(type) {
  const visible = allContents.filter(c => c.style.display !== 'none');

  visible.sort((a, b) => {
    const aDate = a.dataset.date;
    const bDate = b.dataset.date;
    return type === 'new' ? bDate - aDate : aDate - bDate;
  });

  visible.forEach(el => contentsWrap.appendChild(el));
}

/* =========================
   탭 버튼 on 처리
========================= */
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
  });
});

subTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    subTabBtns.forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    resetSort();
  });
});

sortBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    sortBtns.forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    sortContents(i === 0 ? 'new' : 'old');
  });
});

/* =========================
   EXHIBITION (첫 화면)
========================= */
function showExhibition() {
  hideAll();
  subTabMenu.style.display = 'none';

  document.querySelector('.content01').style.display = 'flex';
  document.querySelector('.content02').style.display = 'flex';

  resetSort();
  updateCount();
}

/* =========================
   LEARN
========================= */
function showLearn() {
  hideAll();
  subTabMenu.style.display = 'block';

  showAll();
}

/* =========================
   EVENT
========================= */
function showEvent() {
  hideAll();
  subTabMenu.style.display = 'none';
  noTicket.classList.add('on');
  resetSort();
  updateCount();
}

/* =========================
   SUB TAB
========================= */
function showAll() {
  hideAll();

  eduContents.forEach((c, i) => {
    if (i < 3) c.style.display = 'flex';
  });

  moreWrap.style.display = 'block';
  resetSort();
  updateCount();
}

function showChildren() {
  hideAll();
  eduContents.forEach(c => {
    if (c.dataset.category === 'children') {
      c.style.display = 'flex';
    }
  });
  resetSort();
  updateCount();
}

function showStudent() {
  hideAll();
  eduContents.forEach(c => {
    if (c.dataset.category === 'student') {
      c.style.display = 'flex';
    }
  });
  resetSort();
  updateCount();
}

function showProfessor() {
  hideAll();
  eduContents.forEach(c => {
    if (c.dataset.category === 'professor') {
      c.style.display = 'flex';
    }
  });
  resetSort();
  updateCount();
}

function showExplain() {
  hideAll();
  noTicket.classList.add('on');
  resetSort();
  updateCount();
}

/* =========================
   더보기
========================= */
function showMore() {
  eduContents.forEach(c => c.style.display = 'flex');
  moreWrap.style.display = 'none';
  updateCount();
}

/* =========================
   초기 실행
========================= */
showExhibition();

// 버튼 요소
const subAllBtn = document.querySelector('.sub-tab-menu .all button');
const learnBtn = document.querySelector('.tab-menu .learn button');

// EDU 전체 개수 (고정값)
const TOTAL_EDU_COUNT = 6;

/* -------------------------
   sub-tab : 전체 클릭
------------------------- */
subAllBtn.addEventListener('click', () => {
  countStrong.textContent = TOTAL_EDU_COUNT;
});

/* -------------------------
   LEARN 클릭 = 전체 상태
------------------------- */
learnBtn.addEventListener('click', () => {
  // sub-tab 전체 버튼 on 처리
  subTabBtns.forEach(b => b.classList.remove('on'));
  subAllBtn.classList.add('on');

  // 모든 edu 노출
  eduContents.forEach(c => {
    c.style.display = 'flex';
  });

  // 더보기 제거
  moreWrap.style.display = 'none';

  // strong 값 6 고정
  countStrong.textContent = TOTAL_EDU_COUNT;

  // 정렬은 항상 최신순
  resetSort();
});


learnBtn.addEventListener('click', () => {
  // sub-tab 전체 버튼 on
  subTabBtns.forEach(b => b.classList.remove('on'));
  subAllBtn.classList.add('on');

  // 모든 edu 숨기기
  eduContents.forEach(c => c.style.display = 'none');

  // 처음 3개만 노출 (03,04,05)
  eduContents.forEach((c, i) => {
    if (i < 3) c.style.display = 'flex';
  });

  // 더보기 버튼 표시
  moreWrap.style.display = 'block';

  // strong 값은 전체 기준 6
  countStrong.textContent = TOTAL_EDU_COUNT;

  // 정렬은 항상 최신순
  resetSort();
});

/* =========================
   더보기 버튼 (LEARN / 전체 공통)
========================= */
moreBtn.addEventListener('click', () => {
  eduContents.forEach(c => {
    c.style.display = 'flex';
  });

  moreWrap.style.display = 'none';
  countStrong.textContent = TOTAL_EDU_COUNT;
});
// 최신순 정렬 함수 (기존 sortContents 재사용)
function forceNewSort() {
  sortBtns.forEach(btn => btn.classList.remove('on'));
  sortBtns[0].classList.add('on'); // 최신순 버튼 on
  sortContents('new');
}

/* -------------------------
   tab-menu 버튼 클릭
------------------------- */
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    forceNewSort();
  });
});

/* -------------------------
   sub-tab-menu 버튼 클릭
------------------------- */
subTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    forceNewSort();
  });
});
moreBtn.addEventListener('click', () => {
  // 모든 edu 노출
  eduContents.forEach(c => {
    c.style.display = 'flex';
  });

  // 더보기 제거
  moreWrap.style.display = 'none';

  // 현재 정렬 상태 확인
  const isNew = sortBtns[0].classList.contains('on');

  // 정렬 다시 적용
  sortContents(isNew ? 'new' : 'old');

  // strong 값은 전체 기준 6 유지
  countStrong.textContent = 6;
});