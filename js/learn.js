/* 버튼 밑줄 */
const tabButtons = document.querySelectorAll('.tab-menu button');

tabButtons[0].classList.add('active','on');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active','on'));
    button.classList.add('active','on');
  });
});

/* 탭 버튼 */
const eduItem = document.querySelectorAll('.edu .inner > div');

  function showOnly(classNames) {
    eduItem.forEach(item => {
      if (classNames.includes(item.classList[0])) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  function showChildren() {
    showOnly(['edu01', 'edu02', 'edu03']);
  }

  
  function showStudent() {
    showOnly(['edu04', 'edu05']);
  }

  
  function showProfessor() {
    showOnly(['edu06']);
  }

  
  function showExplain() {
    showOnly(['edu07', 'edu08']);
  }

  showChildren(); 

/* 추천순 최신순 오래된순 */
  const subTabs = document.querySelectorAll('.sub-title button')

  subTabs[0].classList.add('on')

  subTabs.forEach(subBtn => {
    subBtn.addEventListener('click', () => {
        subTabs.forEach(subbutton => subbutton.classList.remove('on'))
        subBtn.classList.add('on')
    })
  })  

  let eduSortType = 'recommend';

const eduInnerWrap = document.querySelector('.edu .inner');

/* 화면에 보이는 edu만 */
function getVisibleEduList() {
  return Array.from(eduInnerWrap.children).filter(item => {
    return item.style.display !== 'none';
  });
}

/* 정렬 실행 */
function sortEduList() {
  const items = getVisibleEduList();

  items.sort((a, b) => {
    if (eduSortType === 'recommend') {
      return Number(b.dataset.recommend) - Number(a.dataset.recommend);
    }

    if (eduSortType === 'new') {
      return Number(b.dataset.date) - Number(a.dataset.date);
    }

    if (eduSortType === 'old') {
      return Number(a.dataset.date) - Number(b.dataset.date);
    }
  });

  items.forEach(item => eduInnerWrap.appendChild(item));
}

/* ===========================
   onclick 함수들
   =========================== */

function showRecommend() {
  eduSortType = 'recommend';
  sortEduList();
}

function showNew() {
  eduSortType = 'new';
  sortEduList();
}

function showOld() {
  eduSortType = 'old';
  sortEduList();
}

/* ===========================
   tab-menu 클릭 시
   추천순 자동 적용
   =========================== */

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    eduSortType = 'recommend';

    // showChildren / showStudent 실행 후
    setTimeout(() => {
      sortEduList();
    }, 0);
  });
});

tabButtons.forEach(tabBtn => {
  tabBtn.addEventListener('click', () => {

    /* 1️⃣ 정렬 상태 추천순 */
    eduSortType = 'recommend';

    /* 2️⃣ sub-text 버튼 상태 초기화 */
    subTabs.forEach(btn => btn.classList.remove('on'));
    subTabs[0].classList.add('on'); // 추천순 버튼

    /* 3️⃣ 필터 적용 후 추천순 정렬 */
    setTimeout(() => {
      showRecommend();
    }, 0);
  });
});

/* 전체 수 */
const eduCountStrong = document.querySelector('.sub-title .all strong');

/* 화면에 보이는 edu 개수 계산 */
function updateEduCount() {
  const visibleCount = Array.from(
    document.querySelectorAll('.edu .inner > div')
  ).filter(item => item.style.display !== 'none').length;

  eduCountStrong.textContent = visibleCount;
}

/* ===========================
   정렬 후 개수 갱신
   =========================== */

// 기존 정렬 함수가 실행된 뒤 개수 갱신
const originShowRecommend = showRecommend;
const originShowNew = showNew;
const originShowOld = showOld;

showRecommend = function () {
  originShowRecommend();
  updateEduCount();
};

showNew = function () {
  originShowNew();
  updateEduCount();
};

showOld = function () {
  originShowOld();
  updateEduCount();
};

/* ===========================
   tab-menu 클릭 시 개수 갱신
   =========================== */

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    setTimeout(() => {
      updateEduCount();
    }, 0);
  });
});

/* ===========================
   최초 로딩 시 실행
   =========================== */
updateEduCount();