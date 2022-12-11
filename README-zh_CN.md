# Moe23333's userscripts

[English README](/README.md) | 简体中文

## 这是什么

这是一些 Moe 写的 userscripts（用户脚本，通常为`.user.js`文件）

## 如何使用

你可通过在浏览器中安装 [Firemonkey](https://addons.mozilla.org/firefox/addon/firemonkey) / [Violentmonkey](https://violentmonkey.github.io) 等脚本管理器扩展来使用它们。

对于移动端，你可选用支持添加脚本的 [Bromite](https://github.com/bromite/bromite) 浏览器，或选择使用 [Kiwi Browser](https://github.com/kiwibrowser/src.next) 并安装前述扩展以添加和使用它们。

## 脚本列表

- Wikipedia 移动端重定向 [[点击安装](https://raw.githubusercontent.com/Moe23333/userscripts/master/redirect_mobile_wikipedia.user.js)]

Google 常常在桌面端搜索结果中出现移动端的中文 Wikipedia 页面（例如[「葛立恒数」关键词的搜索结果](https://www.google.com/search?q=%E8%91%9B%E7%AB%8B%E6%81%92%E6%95%B0), [Web Archive](https://web.archive.org/web/20221205085332/https://www.google.com/search?q=%E8%91%9B%E7%AB%8B%E6%81%92%E6%95%B0)）。本 userscript 会将中文 Wikipedia 移动端页面自动重定向至桌面端页面，灵感来源于 RedirectChineseWikipedia。

- 隐私重定向 [[点击安装](https://raw.githubusercontent.com/Moe23333/userscripts/main/privacy_redirect.user.js)]

将 YouTube、Twitter、Reddit、Google 翻译重定向至它们的隐私友好型前端替代品。(Twitter -> Nitter, Youtube -> Piped, Reddit -> Libreddit, Google Translate -> SimplyTranslate)

_嗯... 写完后发现已经有个浏览器扩展 [LibRedirect](https://github.com/libredirect/libredirect) 了，我似乎在重复造轮子.webp_