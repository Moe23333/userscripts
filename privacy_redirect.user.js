// ==UserScript==
// @name         PrivacyRedirect
// @name:zh-CN   隐私重定向
// @match        *://*.youtube.com/*
// @match        *://*.youtu.be/*
// @match        *://*.twitter.com/*
// @match        *://*.reddit.com/*
// @version      0.3.4
// @description  Redirect YouTube, Twitter, Reddit to their privacy-friendly front-end alternative.
// @description:zh-CN  将 YouTube、Twitter、Reddit 重定向至它们的隐私友好型前端替代品。
// @author       Moe
// @grant        none
// @homepageURL  https://github.com/Moe23333/userscripts
// ==/UserScript==

(function () {
  "use strict";
  let URL = window.location.hostname;
  let TwitterURLs = ["twitter.com", "mobile.twitter.com"];
  let YouTubeURLs = ["www.youtube.com", "m.youtube.com", "youtu.be"];
  let RedditURLs = ["www.reddit.com"];
  let newURL;
  if (TwitterURLs.includes(URL)) {
    newURL = "https://twiiit.com" + window.location.pathname;
  }
  if (YouTubeURLs.includes(URL)) {
    newURL = "https://piped.video" + window.location.pathname;
  }
  if (RedditURLs.includes(URL)) {
    newURL = "https://libreddit.spike.codes" + window.location.pathname;
  }
  window.location.replace(newURL);
})();
