// ==UserScript==
// @name         youtube downloader (netfree)
// @namespace    http://mitmachim.top/user/chv
// @version      1.2
// @updateURL    https://github.com/chaim-chv/files-sending-for-netfree-users/raw/master/youtube_downloader.user.js
// @description  adding download button to youtube (for netfree users)
// @author       chv
// @match        http://www.youtube.com/watch?*
// @match        https://www.youtube.com/watch?*
// ==/UserScript==

(function dbutmaker() {
  const video_id = window.location.search.split("v=")[1];
  const fix = video_id.indexOf("&");
  if (fix != -1) {
    video_id = video_id.substring(0, fix);
  }
  const dlink = "https://videownload.ml/download/https://youtu.be/" + video_id;
  const dbutton = document.createElement("div");
  dbutton.style.fontSize = "1.35rem";
  dbutton.innerHTML = `<div id="nfdownload" title="הורדת הסרטון למחשב (דרך האתר videowload.ml)" style="align-items: center; line-height: 2.5"><a style="color :black; text-decoration: none; display: inline-block;" href="${dlink}" target="_blank"><img src="https://github.com/chaim-chv/files-sending-for-netfree-users/raw/master/1.png" width="100" height="38"></a></div>`;
  var check = document.querySelector("ytd-menu-renderer #top-level-buttons");
  if (check == null) {
    setTimeout(() => {
        if (check == null) {
            setTimeout(() => {
              if (check == null) {
            setTimeout(() => {
              document
                .querySelector("ytd-menu-renderer #top-level-buttons")
                .appendChild(dbutton);
            }, 3000);
          } else {
            document
              .querySelector("ytd-menu-renderer #top-level-buttons")
              .appendChild(dbutton);
             }
            }, 2000);
          } else {
            document
              .querySelector("ytd-menu-renderer #top-level-buttons")
              .appendChild(dbutton);
          }
    }, 3000);
  } else {
    document
      .querySelector("ytd-menu-renderer #top-level-buttons")
      .appendChild(dbutton);
  }
})();
