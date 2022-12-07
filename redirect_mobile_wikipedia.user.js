// ==UserScript==
// @name         RedirectMobileWikipedia
// @name:zh-CN   Wikipedia 移动端重定向
// @match        https://zh.m.wikipedia.org/*
// @version      0.3.4
// @description  Force redirect Chinese Wikipedia from mobile version to desktop version.
// @description:zh-CN  将中文 Wikipedia 移动端页面重定向至桌面端页面。
// @author       Moe
// @grant        none
// @homepageURL  https://github.com/Moe23333/userscripts
// ==/UserScript==

(function () {
  "use strict";
  let url = window.location.href;
  let desturl = url;
  if (url.search("zh.m.wikipedia.org") !== -1) {
    desturl = url.replace("m.", "");
  }
  window.location.replace(desturl);
})();
