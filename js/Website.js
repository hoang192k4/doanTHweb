document.addEventListener("DOMContentLoaded", function() {
    const rightBtn = document.querySelector('.slider-content-left-icon .fa-chevron-right');
    const leftBtn = document.querySelector('.slider-content-left-icon .fa-chevron-left');
    const sliderContentLeft = document.querySelector('.slider-content-left');
    const imgNumber = document.querySelectorAll('.slider-content-left img');
    const slideWidth = 100; // Độ rộng của mỗi slide (theo phần trăm)
    let currentIndex = 0;
  
    rightBtn.addEventListener('click', function() {
      currentIndex++;
      if (currentIndex > imgNumber.length - 1) {
        currentIndex = 0;
      }
      updateSliderPosition();
    });
    leftBtn.addEventListener('click', function() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = imgNumber.length - 1;
      }
      updateSliderPosition();
    });
    function updateSliderPosition() {
      const newPosition = -1 * currentIndex * slideWidth;
      sliderContentLeft.style.transform = `translateX(${newPosition}%)`;
    }
  });
  
