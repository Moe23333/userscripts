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
    /* 二维数组, 定义需要重定向的uri
     * 添加: 在最后一个空字符串前添加所需uri, 例如["github.com"]
     */
    let uris = [
        ["twitter.com", "mobile.twitter.com"],
        ["www.youtube.com", "m.youtube.com", "www.youtube-nocookie.com", "youtu.be"],
        ["www.reddit.com", "redd.it", "v.redd.it"],
        ["translate.google.com"],
        [""]
    ];
    /* 重定向后的uri
     * 注意: 重定向后的uri一定要和「需要重定向的uri」组成一一对应关系
     * 例如, twitter.com和mobile.twitter.com对应"https://twiiit.com" + (window.location.pathname === "/i/redirect" ? (new URL(decodeURIComponent(window.location.search.replace("?url=", ""))).pathname) : window.location.pathname),
     * translate.google.com对应"https://simplytranslate.org" + window.location.search
     */
    let targeturi =[
        "https://twiiit.com" + (window.location.pathname === "/i/redirect" ? (new URL(decodeURIComponent(window.location.search.replace("?url=", ""))).pathname) : window.location.pathname),
        "https://piped.video" + window.location.pathname + window.location.search,
        "https://libreddit.spike.codes" + window.location.pathname,
        "https://simplytranslate.org" + window.location.search
    ];
    let i = 0;  //传参, 参数为数组内的地址(因为uris和targeturi组成一一对应关系)
    while (i < uris.length) {
        if (uris[i].includes(window.location.hostname))
            break;  //循环控制: 如果包含则立即退出循环不进行下一次计算; 此时i为uris中包含域名的地址
        i = i + 1;
    }
    if (i < 4)
        window.location.replace(targeturi[i]);
})();
