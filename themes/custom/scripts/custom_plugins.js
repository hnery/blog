function img_loading(args) {
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
};

hexo.extend.tag.register('img_unveil', function(args) {
  return img_loading(args);
});

hexo.extend.tag.register('video_unveil', function(args) {
  const src = args[0];
  const img = args[1];
  const ext = src.split('.').pop();
  return(
    "<div class='_video-container'>" +
    "  <video autoplay loop muted poster=" + img + " class='img-responsive'>" +
    "    <source src='" + src + "' type='video/" + ext +"'>" +
    "  </video>" +
    "</div>"
  );
});

hexo.extend.tag.register('photo_grid', function(args, content) {
  const rows = content.split('\n');
  let table = "<table>";
  for (let ii = 0; ii < rows.length; ii++) {
    const cols = rows[ii].split('|');
    table += "<tr>";
    for (let jj = 0; jj < cols.length; jj++) {
      const cell = cols[jj].split(' ');
      const colspan = cell[1] !== undefined ? cell[1] : 1;
      const rowspan = cell[2] !== undefined ? cell[2] : 1;
      const col = (
        "<td style='vertical-align:middle' " +
          " colspan=" + colspan +
          " rowspan=" + rowspan + ">" +
          img_loading([cell[0]] /* filename */) +
        "</td>"
      );
      table += col;
    }
    table += "</tr>";
  }
  return table += "</table>";
}, {ends: true});
