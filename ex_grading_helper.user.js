// ==UserScript==
// @name CMPT165 Exercise Grading URL Rewrite Script
// @namespace https://courses.cs.sfu.ca/2017sp-cmpt-165-d1
// @version 1.0
// @description This script will rewrite the URL for grading
// @author xiangbom
// @include https://courses.cs.sfu.ca/2017sp-cmpt-165-d1/*/submission/*/*/get
// @grant none
// ==/UserScript==

var links = document.getElementsByTagName("a");

links[0].href = 'http://cmpt165.csil.sfu.ca:8000/check?url=' + encodeURI(links[0].href);
