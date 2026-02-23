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

  const menuBtns = document.querySelectorAll('.menuBtn');
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
  menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      changeMenuBottom.classList.toggle('on');
      changeCalendar.classList.toggle('on');
    })
  })
  menuBtn.addEventListener('click', () => {
  // 모바일은 header-m만 사용
  if (window.innerWidth <= 1024) return;

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

/* ===============================
   모바일 메뉴 슬라이드 제어
=============================== */
document.addEventListener('DOMContentLoaded', () => {
  const openBtns = document.querySelectorAll(
    '.header-bottom .MenuBtn, .header-change .menuBtn'
  );

  const headerMArea = document.querySelector('.header-m-area');
  const headerM = document.querySelector('.header-m');
  const closeBtn = document.querySelector('.header-m .close');

  function openMenu() {
  if (window.innerWidth > 1024) return;
  
  headerMArea.classList.add('active');
  document.body.style.overflow = 'hidden'; // ✅ body 스크롤 잠금

  headerM.getBoundingClientRect(); // reflow
  headerM.style.right = '0';
}

function closeMenu() {
  headerM.style.right = '-100%';

  setTimeout(() => {
    headerMArea.classList.remove('active');
    document.body.style.overflow = ''; // ✅ body 스크롤 복구
  }, 350);
}

  openBtns.forEach(btn => {
    btn.addEventListener('click', openMenu);
  });

  closeBtn.addEventListener('click', closeMenu);

  // inline onclick 대응
  window.showMenu = openMenu;
  window.closeMenu = closeMenu;
});

/* ===============================
   header-m 아코디언 (one open only)
=============================== */
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll(
    '.header-m .middle > ul > li'
  );

  menuItems.forEach(item => {
    const button = item.querySelector('button');
    const submenu = item.querySelector('ul');

    if (!button || !submenu) return;

    button.addEventListener('click', () => {
      const isOpen = submenu.classList.contains('open');

      // 🔒 다른 메뉴 전부 닫기
      menuItems.forEach(otherItem => {
        const otherSub = otherItem.querySelector('ul');
        if (!otherSub) return;

        otherSub.style.maxHeight = '0';
        otherSub.classList.remove('open');
      });

      // 👉 다시 누른 경우는 닫기만
      if (isOpen) return;

      // 👉 현재 메뉴 열기
      submenu.classList.add('open');
      submenu.style.maxHeight = submenu.scrollHeight + 'px';
    });
  });
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    headerM.style.right = '-100%';
    headerMArea.classList.remove('active');
    document.body.style.overflow = '';
  }
});
