// ==UserScript==
// @name         drives
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  instantly switch drive links to googleAPI drive links
// @author       chv & yossiz
// @match        https://mitmachim.top/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    /* globals require */

    require(['composer/formatting'], function(formatting) {
        require(['composer/controls'], function(controls) {
            formatting.addButton("fa fa-edit", function(textArea){controls.insertIntoTextarea(textArea, "[טקסט הקישור](https://www.googleapis.com/drive/v3/files/    ?alt=media&key=AIzaSyD5idO0-IZORg2flSMbYqJIMvF8-1fNk1M)")}, "קישור מקוצר לדרייב");
        })
    });
})();