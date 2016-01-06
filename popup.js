// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */

// document.addEventListener('DOMContentLoaded', function() {
//   chrome.windows.update(1,{"left": 100,"top": 50,"width": 600,"height": 500,"focused": true,"drawAttention": true});
// });
document.addEventListener('DOMContentLoaded', function() {
  chrome.windows.getCurrent(function(wind) {
  console.log(wind.id);
  var maxWidth = window.screen.availWidth;
  var maxHeight = window.screen.availHeight;
  var updateInfo = {
      left: 0,
      top: 0,
      width: 600,
      height: 400
  };
  chrome.windows.update(wind.id, updateInfo);});

});
function start() {
 chrome.windows.getCurrent(function(wind) {
  console.log(wind.id);
  var maxWidth = window.screen.availWidth;
  var maxHeight = window.screen.availHeight;
  var updateInfo = {
      left: 0,
      top: 0,
      width: 600,
      height: 400
  };
  chrome.windows.update(wind.id, updateInfo);});

}
chrome.browserAction.onClicked.addListener(start);
