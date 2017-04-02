$(document).ready(function() {

  $("._img-container").unveil(0, function() {
    let lg = this.getAttribute('data-large');
    let sm = this.getAttribute('data-small');
    let ph = this.querySelector('._placeholder');

    let img_sm = new Image();
    img_sm.src = sm;
    img_sm.onload = function () {
      if (ph) {
        ph.style.paddingBottom = (this.height / this.width * 100) + '%';
      }
      img_sm.classList.add('loaded', 'img-responsive', '_img-blur');
    };
    this.append(img_sm);

    let img_lg = new Image();
    img_lg.src = lg;
    img_lg.onload = function () {
      if (ph) {
        ph.style.paddingBottom = (this.height / this.width * 100) + '%';
      }
      img_lg.classList.add('loaded', 'img-responsive', '_img-final');
      img_sm.classList.remove('loaded');
    }
    this.append(img_lg);
  });
});
