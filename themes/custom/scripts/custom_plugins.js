hexo.extend.tag.register('img_x', function (args){
  let final = args[0];
  let compressed = args[1];

  return(
    // From img_loading.ejs
    "<div data-large=" + final + " class='_img-container'>" +
    "  <img src=" + compressed + " class='_img-compressed'>" +
    "  <div class='_placeholder'></div>" +
    "</div>"
  );
});
