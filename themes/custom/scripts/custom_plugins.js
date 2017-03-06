hexo.extend.tag.register('img_x', function (args){
  const final = args[0];
  const ext  = args[0].split('.').pop();
  const img_name = final.replace('.' + ext, '');
  const compressed = img_name + '_compressed' + '.' + ext;
  return(
    // From img_loading.ejs
    "<div data-large=" + final + " class='_img-container'>" +
    "  <img src=" + compressed + " class='_img-compressed'>" +
    "  <div class='_placeholder'></div>" +
    "</div>"
  );
});
