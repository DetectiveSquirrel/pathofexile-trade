// ==UserScript==
// @name         Always show Pathofexile.com/trade affix ranges
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.pathofexile.com/trade*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    addGlobalStyle('.newItemPopup .lc .d { display:contents }');

    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
})();