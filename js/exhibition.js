
/* 탭 버튼 */
const items = document.querySelectorAll('.museum .inner > div');

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

function showProject() {
  filterItems('project');
}

/* 버튼 밑줄 */
const tabButtons = document.querySelectorAll('.tab-menu button');

tabButtons[0].classList.add('active','on');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active','on'));
    button.classList.add('active','on');
  });
});