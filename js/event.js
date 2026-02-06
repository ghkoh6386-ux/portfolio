/* 버튼 밑줄 */
const tabButtons = document.querySelectorAll('.tab-btn');
console.log(tabButtons)

tabButtons[0].classList.add('active','on');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active','on'));
    button.classList.add('active','on');
  });
});

/* 탭 버튼 */
const items = document.querySelectorAll('.contents .inner > div')
console.log(items)

function showAll() {
  items.forEach(item => item.classList.remove('hidden'));
}

function filterItems(type) {
  items.forEach(item => {
    if (item.classList.contains(type)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

function showArt() {
  filterItems('art');
}

function showMuseum() {
  filterItems('museum');
 }
function showSpace() {
  filterItems('space');
 }

function showProject() {
  filterItems('project');
}

/* 더보기 버튼 */
const itemss = document.querySelectorAll('.contents .inner > .content');
const moreBtn = document.querySelector('.btn-more');

const STEP = 6;
let visibleCount = STEP;
let currentFilter = 'all';

/* 초기 세팅 */
init();

function init() {
  itemss.forEach(item => {
    item.classList.remove('hidden', 'is-visible');
  });

  visibleCount = STEP;
  applyFilter(currentFilter);
}

/* 전체 */
function showAll() {
  currentFilter = 'all';
  visibleCount = STEP;
  applyFilter('all');
}

/* 카테고리 필터 */
function showArt() { filterItems('art'); }
function showMuseum() { filterItems('museum'); }
function showSpace() { filterItems('space'); }
function showProject() { filterItems('project'); }

function filterItems(type) {
  currentFilter = type;
  visibleCount = STEP;
  applyFilter(type);
}

/* 필터 + 노출 개수 처리 */
function applyFilter(type) {
  let filteredItems = [];

  itemss.forEach(item => {
    item.classList.remove('hidden', 'is-visible');

    if (type === 'all' || item.classList.contains(type)) {
      filteredItems.push(item);
    } else {
      item.classList.add('hidden');
    }
  });

  // 6개만 노출
  filteredItems.slice(0, visibleCount).forEach(item => {
    item.classList.add('is-visible');
  });

  // 더보기 버튼 처리
  moreBtn.style.display =
    filteredItems.length > visibleCount ? 'block' : 'none';
}

/* 더보기 */
function showMore() {
  let filteredItems = [];

  itemss.forEach(item => {
    if (
      !item.classList.contains('hidden') &&
      (currentFilter === 'all' || item.classList.contains(currentFilter))
    ) {
      filteredItems.push(item);
    }
  });

  visibleCount += STEP;

  filteredItems.slice(0, visibleCount).forEach(item => {
    item.classList.add('is-visible');
  });

  if (visibleCount >= filteredItems.length) {
    moreBtn.style.display = 'none';
  }
}
