// ==UserScript==
// @name         RedirectMobileWikipedia
// @name:zh-CN   Wikipedia 移动端重定向
// @match        https://zh.m.wikipedia.org/*
// @version      0.3.5
// @description  Force redirect Chinese Wikipedia from mobile version to desktop version.
// @description:zh-CN  将中文 Wikipedia 移动端页面重定向至桌面端页面。
// @author       Moe
// @grant        none
// @homepageURL  https://github.com/Moe23333/userscripts
// ==/UserScript==

(function () {
  "use strict";
  let newURL;
  if (window.location.hostname === "zh.m.wikipedia.org") {
    newURL = window.location.href.replace("m.", "");
  }
  window.location.replace(newURL);
})();
