document.addEventListener("DOMContentLoaded", function () {

  const mainImage = document.querySelector('.bg1 img');
  const movieBg = document.querySelector('.bg2 .movie-bg');

  function changeMedia() {
    if (window.innerWidth <= 1024) {

      // 1️⃣ 메인이미지 변경
      mainImage.src = "img/main-img-t.png";

      // 2️⃣ 비디오를 이미지로 교체
      movieBg.innerHTML = `
        <img src="img/title-DMU-t.png" alt="">
      `;

    } else {

      // 1️⃣ 원래 이미지로 복구
      mainImage.src = "img/main-img.png";

      // 2️⃣ 이미지 → 다시 비디오로 복구
      movieBg.innerHTML = `
        <video muted autoplay loop>
          <source src="img/title-DMU.mp4" type="video/mp4">
        </video>
      `;
    }
  }

  // 최초 실행
  changeMedia();

  // 화면 리사이즈 대응
  window.addEventListener("resize", changeMedia);

});

/* slide */
var swiper = new swiper(".sub-image", {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
    },
});