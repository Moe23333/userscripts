// ==UserScript==
// @name         PrivacyRedirect
// @name:zh-CN   隐私重定向
// @match        *://*.youtube.com/*
// @match        *://*.twitter.com/*
// @match        *://*.reddit.com/*
// @version      0.3.2
// @description  Redirect YouTube, Twitter, Reddit to their privacy-friendly front-end alternative.
// @description:zh-CN  将 YouTube、Twitter、Reddit 重定向至它们的隐私友好型前端替代品。
// @author       Moe
// @grant        none
// @homepageURL  https://github.com/Moe23333/userscripts
// ==/UserScript==

(function () {
  "use strict";
  let url = window.location.href;
  let desturl = url;
  if (url.search("www.youtube.com") !== -1) {
    desturl = url.replace("www.youtube.com", "piped.video");
  }
  if (url.search("m.youtube.com") !== -1) {
    desturl = url.replace("m.youtube.com", "piped.video");
  }
  if (url.search("https://twitter.com") !== -1) {
    desturl = url.replace("https://twitter.com", "https://twiiit.com");
  }
  if (url.search("mobile.twitter.com") !== -1) {
    desturl = url.replace("mobile.twitter.com", "twiiit.com");
  }
  if (url.search("www.reddit.com") !== -1) {
    desturl = url.replace("www.reddit.com", "libreddit.spike.codes");
  }
  window.location.replace(desturl);
})();
