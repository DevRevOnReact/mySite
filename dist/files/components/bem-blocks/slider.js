class Slider {
  constructor(selector) {
    this.slider = selector; // Now accepts DOM element directly
    this.sliderItems = this.slider.querySelector('.slider__items');
    this.slides = this.slider.querySelectorAll('.slider__item');
    this.prevBtn = this.slider.querySelector('.slider__control_prev');
    this.nextBtn = this.slider.querySelector('.slider__control_next');
    this.indicators = this.slider.querySelectorAll('.slider__indicators li');

    this.currentSlide = 0;
    this.slidesCount = this.slides.length;

    this.init();
  }

  init() {
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());

    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });

    this.updateIndicators();
  }

  prev() {
    this.currentSlide =
			(this.currentSlide - 1 + this.slidesCount) % this.slidesCount;
    this.updateSlider();
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slidesCount;
    this.updateSlider();
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.updateSlider();
  }

  updateSlider() {
    const offset = -this.currentSlide * 100;
    this.sliderItems.style.transform = `translateX(${offset}%)`;
    this.updateIndicators();
  }

  updateIndicators() {
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentSlide);
    });
  }
}

// Initialize all sliders after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach((sliderElement) => {
    new Slider(sliderElement);
  });
});
