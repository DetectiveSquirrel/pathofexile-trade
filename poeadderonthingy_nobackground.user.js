// ==UserScript==
// @name         Sith's poe/trade visual changes (no backgorund)
// @namespace    https://github.com/DetectiveSquirrel/pathofexile-trade
// @version      0.3
// @description  Change pathofexile.com/trade to always show roll ranges and change colors
// @author       DetectiveSquirrel
// @match        https://www.pathofexile.com/trade*
// @updateURL    https://github.com/DetectiveSquirrel/pathofexile-trade/raw/master/poeadderonthingy_nobackground.user.js
// @downloadURL  https://github.com/DetectiveSquirrel/pathofexile-trade/raw/master/poeadderonthingy_nobackground.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // always show stat ranges
    addGlobalStyle('.newItemPopup .lc .d { display:contents }');

    // Section title color
    addGlobalStyle('.filter-title { color: #30ad3a; }');

    // Non selector color
    addGlobalStyle('#trade .filter-group .filter-group-body .filter-title { color: #daa9a9; background-color: rgba(45,49,54,0.3); border-left: 3px solid #732727;}');

    // set bnackground to be slightly transparent
    addGlobalStyle('#trade .top { background-color: #000000bf; font-size: 1.1em; }');

    // Remove background image
    addGlobalStyle('body { background: #000; }');

    // Non selector Fonts
    addGlobalStyle('#trade .search-bar { margin-left: 0;margin-right: 0;padding: 8px 8px 0;font-family: \'OpenFont\', sans-serif;}');

    // stat selector Fonts
    addGlobalStyle('.filter-title { margin-left: 0; margin-right: 0; padding: 8px 8px 0; font-family: \'OpenFont\', sans-serif; }');

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
