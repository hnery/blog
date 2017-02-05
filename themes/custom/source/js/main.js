// Sidebar
$("#sidebar-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("toggled");
});

// Image loading
window.onload = function() {
  let img_containers = document.querySelectorAll('._img-container');

  img_containers.forEach(function(img_container) {
    let img_compressed = img_container.querySelector('._img-compressed');
    let img_placeholder = img_container.querySelector('._placeholder');

    let img_preview = new Image();
    img_preview.src = img_compressed.src;
    img_preview.onload = function () {
     img_compressed.classList.add('loaded');
    };

    let img_final = new Image();
    img_final.src = img_container.dataset.large;
    img_final.onload = function () {
      img_final.classList.add('loaded');
      img_final.classList.add('img-responsive');
      img_final.classList.add('_img-final');
      img_compressed.classList.remove('loaded');
    };
    img_container.prepend(img_final);
  });
}
