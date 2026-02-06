document.addEventListener('DOMContentLoaded', () => {
  const visitMenu = document.querySelector('.menu-bottom .visit');
  const exhibitionMenu = document.querySelector('.menu-bottom .exb');

  const gnbArea = document.querySelector('.gnb-area');
  const listArea = document.querySelector('.list-area');
  const exhibitionArea = document.querySelector('.exhibition-area');

  function hideAll() {
    listArea.style.display = 'none';
    exhibitionArea.style.display = 'none';
  }

  // VISIT hover
  visitMenu.addEventListener('mouseenter', () => {
    hideAll();
    listArea.style.display = 'block';
  });

  // EXHIBITION hover
  exhibitionMenu.addEventListener('mouseenter', () => {
    hideAll();
    exhibitionArea.style.display = 'block';
  });

  // gnb 영역 벗어나면 닫기
  gnbArea.addEventListener('mouseleave', () => {
    hideAll();
  });

  // 메뉴 영역에서도 유지되게
  visitMenu.addEventListener('mouseleave', (e) => {
    if (!gnbArea.contains(e.relatedTarget)) {
      hideAll();
    }
  });

  exhibitionMenu.addEventListener('mouseleave', (e) => {
    if (!gnbArea.contains(e.relatedTarget)) {
      hideAll();
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const headerTop = document.querySelector('.header-top');
  const headerBottom = document.querySelector('.header-bottom');
  const headerChange = document.querySelector('.header-change');

  const menuBtn = document.querySelector('.menuBtn');
  const changeMenuBottom = headerChange.querySelector('.menu-bottom');
  const changeCalendar = headerChange.querySelector('.calender-area');

  const changeVisit = headerChange.querySelector('.visit');
  const changeExb = headerChange.querySelector('.exb');

  const gnbArea = document.querySelector('.gnb-area');
  const listArea = document.querySelector('.list-area');
  const exhibitionArea = document.querySelector('.exhibition-area');

  /* ===============================
     스크롤 시 header 전환
  =============================== */
  window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 0) {
    headerTop.style.display = 'none';
    headerBottom.style.display = 'none';
    headerChange.classList.add('active');

    gnbArea.classList.add('fixed');

    changeMenuBottom.classList.remove('on');
    changeCalendar.classList.remove('on');
    listArea.style.display = 'none';
    exhibitionArea.style.display = 'none';
  } else {
    headerTop.style.display = 'block';
    headerBottom.style.display = 'flex';
    headerChange.classList.remove('active');

    gnbArea.classList.remove('fixed');

    listArea.style.display = 'none';
    exhibitionArea.style.display = 'none';
  }
});

  /* ===============================
     header-change 메뉴 버튼
  =============================== */
  menuBtn.addEventListener('click', () => {
    changeMenuBottom.classList.toggle('on');
    changeCalendar.classList.toggle('on');
  });

  /* ===============================
     header-change GNB hover
  =============================== */
  function hideGnb() {
    listArea.style.display = 'none';
    exhibitionArea.style.display = 'none';
  }

  // VISIT hover
  changeVisit.addEventListener('mouseenter', () => {
  listArea.style.display = 'block';
  exhibitionArea.style.display = 'none';
});

  changeExb.addEventListener('mouseenter', () => {
  exhibitionArea.style.display = 'block';
  listArea.style.display = 'none';
});

  // visit / exb 외 영역 hover 시 닫기
  headerChange.addEventListener('mouseover', (e) => {
    if (
      !changeVisit.contains(e.target) &&
      !changeExb.contains(e.target) &&
      !gnbArea.contains(e.target)
    ) {
      hideGnb();
    }
  });

  // gnb 영역 벗어나면 닫기
  gnbArea.addEventListener('mouseleave', hideGnb);
});