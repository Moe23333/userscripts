// ==UserScript==
// @name         PrivacyRedirect
// @name:zh-CN   隐私重定向
// @match        *://*.youtube.com/*
// @match        *://*.youtube-nocookie.com/*
// @match        *://*.youtu.be/*
// @match        *://*.twitter.com/*
// @match        *://*.reddit.com/*
// @match        *://*.redd.it/*
// @match        *://translate.google.com/*
// @version      0.4.5
// @description  Redirect YouTube, Twitter, Reddit, Google Translate to their privacy-friendly front-end alternative.
// @description:zh-CN  将 YouTube、Twitter、Reddit、Google 翻译重定向至它们的隐私友好型前端替代品。
// @author       Moe
// @grant        none
// @homepageURL  https://github.com/Moe23333/userscripts
// ==/UserScript==

(function () {
  "use strict";
  let TwitterURLs = ["twitter.com", "mobile.twitter.com"];
  let YouTubeURLs = ["www.youtube.com", "m.youtube.com", "www.youtube-nocookie.com", "youtu.be"];
  let RedditURLs = ["www.reddit.com", "redd.it", "v.redd.it"];
  let GTranslateURLs = ["translate.google.com"];
  let newURL;
  if (TwitterURLs.includes(window.location.hostname)) {
    if (window.location.pathname === "/i/redirect") {
      newURL = "https://twiiit.com" + new URL(decodeURIComponent(window.location.search.replace("?url=", ""))).pathname;
    }
    else {
      newURL = "https://twiiit.com" + window.location.pathname;
    }
  }
  else if (YouTubeURLs.includes(window.location.hostname)) {
    newURL = "https://piped.video" + window.location.pathname + window.location.search;
  }
  else if (RedditURLs.includes(window.location.hostname)) {
    newURL = "https://libreddit.spike.codes" + window.location.pathname;
  }
  else if (GTranslateURLs.includes(window.location.hostname)) {
    newURL = "https://simplytranslate.org" + window.location.pathname;
  }
  window.location.replace(newURL);
})();
