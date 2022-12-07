// ==UserScript==
// @name         PrivacyRedirect
// @name:zh-CN   隐私重定向
// @match        *://*.youtube.com/*
// @match        *://*.twitter.com/*
// @match        *://*.reddit.com/*
// @version      0.1
// @description  Redirect YouTube, Twitter, Reddit to their privacy-friendly front-end alternative.
// @description:zh-CN  将 YouTube、Twitter、Reddit 重定向至它们的隐私友好型前端替代品。
// @author       Moe
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let url = window.location.href;
  let desturl = url;
  if (url.search("www.youtube.com") !== -1) {
    desturl = url.replace("www.youtube.com", "piped.video");
  }
  if (url.search("twitter.com") !== -1) {
    desturl = url.replace("twitter.com", "twiiit.com");
  }
  if (url.search("www.reddit.com") !== -1) {
    desturl = url.replace("www.reddit.com", "libreddit.spike.codes");
  }
  window.location.replace(desturl);
})();
