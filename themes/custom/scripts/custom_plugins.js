hexo.extend.tag.register('img_unveil', function (args){
  const lg = "large/" + args[0];
  const sm = "small/" + args[0];
  return(
    // From img_loading.ejs
    "<div data-large=" + lg + " data-small=" + sm + " class='_img-container'>" +
    "   <noscript>" +
    "     <img src=" + lg + " class='_img-final loaded img-responsive' />" +
    "   </noscript>" +
    "   <div class='_placeholder'></div>" +
    "</div>"
  );
});
