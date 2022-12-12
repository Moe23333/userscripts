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
    let uris = [
        ["twitter.com", "mobile.twitter.com"],
        ["www.youtube.com", "m.youtube.com", "www.youtube-nocookie.com", "youtu.be"],
        ["www.reddit.com", "redd.it", "v.redd.it"],
        ["translate.google.com"],
        [""]
    ];
    let targeturi =[
        (window.location.pathname === "/i/redirect" ? ("https://twiiit.com" + new URL(decodeURIComponent(window.location.search.replace("?url=", ""))).pathname) : "https://twiiit.com" + window.location.pathname),
        "https://piped.video" + window.location.pathname + window.location.search,
        "https://libreddit.spike.codes" + window.location.pathname,
        "https://simplytranslate.org" + window.location.pathname
    ];
    let i = 0;
    while (i < uris.length) {
        if (uris[i].includes(window.location.hostname))
            break;
        i = i + 1;
    }
    if (i < 4)
        window.location.replace(targeturi[i]);
})();
