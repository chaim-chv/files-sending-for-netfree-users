// ==UserScript==
// @name         youtube downloader (netfree)
// @namespace    http://mitmachim.top/user/chv
// @version      1.4
// @updateURL    https://github.com/chaim-chv/files-sending-for-netfree-users/raw/master/
// @description  adding download button to youtube (for netfree users)
// @author       chv - netfree user & nefree fan
// @match        http://www.youtube.com/watch?*
// @match        https://www.youtube.com/watch?*
// ==/UserScript==

const observer = new MutationObserver(() => {
  if (document.querySelector("ytd-menu-renderer #top-level-buttons")) {
    observer.disconnect();
    const video_id = new URLSearchParams(new URL(location).search).get("v");
    const dlink = "https://videownload.ml/download/https://youtu.be/" + video_id;
    const dbutton = document.createElement("div");
    dbutton.style.fontSize = "1.35rem";
    dbutton.innerHTML = `<div id="nfdownload" title="הורדת הסרטון למחשב (דרך האתר videownload.ml)" style="align-items: center; line-height: 2.5"><a style="color :black; text-decoration: none; display: inline-block;" href="${dlink}" target="_blank"><img src="http://forum.netfree.link/assets/uploads/files/1593935403429-1200px-youtube_play_buttom_icon_-2013-2017.png" width="35px" height="25px" margin="7px"</a></div>`;
    document
      .querySelector("ytd-menu-renderer #top-level-buttons")
      .appendChild(dbutton);
  }
});
observer.observe(document, {
  attributes: true,
  childList: true,
  subtree: true,
});
