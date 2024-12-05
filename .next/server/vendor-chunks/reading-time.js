/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/reading-time";
exports.ids = ["vendor-chunks/reading-time"];
exports.modules = {

/***/ "(rsc)/./node_modules/reading-time/index.js":
/*!********************************************!*\
  !*** ./node_modules/reading-time/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports[\"default\"] = module.exports = __webpack_require__(/*! ./lib/reading-time */ \"(rsc)/./node_modules/reading-time/lib/reading-time.js\")\nmodule.exports.readingTimeStream = __webpack_require__(/*! ./lib/stream */ \"(rsc)/./node_modules/reading-time/lib/stream.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVhZGluZy10aW1lL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLHlCQUFzQixHQUFHLHVIQUE4QztBQUN2RSw2SEFBMEQiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWtlcGluMnIvRG9jdW1lbnRzL3Byb2plY3RzL21ha2VwaW4yci5naXRodWIuaW8vbm9kZV9tb2R1bGVzL3JlYWRpbmctdGltZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9yZWFkaW5nLXRpbWUnKVxubW9kdWxlLmV4cG9ydHMucmVhZGluZ1RpbWVTdHJlYW0gPSByZXF1aXJlKCcuL2xpYi9zdHJlYW0nKVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/reading-time/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/reading-time/lib/reading-time.js":
/*!*******************************************************!*\
  !*** ./node_modules/reading-time/lib/reading-time.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
eval("/*!\n * reading-time\n * Copyright (c) Nicolas Gryman <ngryman@gmail.com>\n * MIT Licensed\n */\n\n\n\n/**\n * @typedef {import('reading-time').Options['wordBound']} WordBoundFunction\n */\n\n/**\n * @param {number} number\n * @param {number[][]} arrayOfRanges\n */\nfunction codeIsInRanges(number, arrayOfRanges) {\n  return arrayOfRanges.some(([lowerBound, upperBound]) =>\n    (lowerBound <= number) && (number <= upperBound)\n  )\n}\n\n/**\n * @type {WordBoundFunction}\n */\nfunction isCJK(c) {\n  if ('string' !== typeof c) {\n    return false\n  }\n  const charCode = c.charCodeAt(0)\n  // Help wanted!\n  // This should be good for most cases, but if you find it unsatisfactory\n  // (e.g. some other language where each character should be standalone words),\n  // contributions welcome!\n  return codeIsInRanges(\n    charCode,\n    [\n      // Hiragana (Katakana not included on purpose,\n      // context: https://github.com/ngryman/reading-time/pull/35#issuecomment-853364526)\n      // If you think Katakana should be included and have solid reasons, improvement is welcomed\n      [0x3040, 0x309f],\n      // CJK Unified ideographs\n      [0x4e00, 0x9fff],\n      // Hangul\n      [0xac00, 0xd7a3],\n      // CJK extensions\n      [0x20000, 0x2ebe0]\n    ]\n  )\n}\n\n/**\n * @type {WordBoundFunction}\n */\nfunction isAnsiWordBound(c) {\n  return ' \\n\\r\\t'.includes(c)\n}\n\n/**\n * @type {WordBoundFunction}\n */\nfunction isPunctuation(c) {\n  if ('string' !== typeof c) {\n    return false\n  }\n  const charCode = c.charCodeAt(0)\n  return codeIsInRanges(\n    charCode,\n    [\n      [0x21, 0x2f],\n      [0x3a, 0x40],\n      [0x5b, 0x60],\n      [0x7b, 0x7e],\n      // CJK Symbols and Punctuation\n      [0x3000, 0x303f],\n      // Full-width ASCII punctuation variants\n      [0xff00, 0xffef]\n    ]\n  )\n}\n\n/**\n * @type {import('reading-time').default}\n */\nfunction readingTime(text, options = {}) {\n  let words = 0, start = 0, end = text.length - 1\n\n  // use provided value if available\n  const wordsPerMinute = options.wordsPerMinute || 200\n\n  // use provided function if available\n  const isWordBound = options.wordBound || isAnsiWordBound\n\n  // fetch bounds\n  while (isWordBound(text[start])) start++\n  while (isWordBound(text[end])) end--\n\n  // Add a trailing word bound to make handling edges more convenient\n  const normalizedText = `${text}\\n`\n\n  // calculate the number of words\n  for (let i = start; i <= end; i++) {\n    // A CJK character is a always word;\n    // A non-word bound followed by a word bound / CJK is the end of a word.\n    if (\n      isCJK(normalizedText[i]) ||\n      (!isWordBound(normalizedText[i]) &&\n        (isWordBound(normalizedText[i + 1]) || isCJK(normalizedText[i + 1]))\n      )\n    ) {\n      words++\n    }\n    // In case of CJK followed by punctuations, those characters have to be eaten as well\n    if (isCJK(normalizedText[i])) {\n      while (\n        i <= end &&\n        (isPunctuation(normalizedText[i + 1]) || isWordBound(normalizedText[i + 1]))\n      ) {\n        i++\n      }\n    }\n  }\n\n  // reading time stats\n  const minutes = words / wordsPerMinute\n  // Math.round used to resolve floating point funkyness\n  //   http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html\n  const time = Math.round(minutes * 60 * 1000)\n  const displayed = Math.ceil(minutes.toFixed(2))\n\n  return {\n    text: displayed + ' min read',\n    minutes: minutes,\n    time: time,\n    words: words\n  }\n}\n\n/**\n * Export\n */\nmodule.exports = readingTime\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVhZGluZy10aW1lL2xpYi9yZWFkaW5nLXRpbWUuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWjtBQUNBLGFBQWEsNkNBQTZDO0FBQzFEOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsWUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsS0FBSzs7QUFFakM7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL21ha2VwaW4yci9Eb2N1bWVudHMvcHJvamVjdHMvbWFrZXBpbjJyLmdpdGh1Yi5pby9ub2RlX21vZHVsZXMvcmVhZGluZy10aW1lL2xpYi9yZWFkaW5nLXRpbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiByZWFkaW5nLXRpbWVcbiAqIENvcHlyaWdodCAoYykgTmljb2xhcyBHcnltYW4gPG5ncnltYW5AZ21haWwuY29tPlxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgncmVhZGluZy10aW1lJykuT3B0aW9uc1snd29yZEJvdW5kJ119IFdvcmRCb3VuZEZ1bmN0aW9uXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcltdW119IGFycmF5T2ZSYW5nZXNcbiAqL1xuZnVuY3Rpb24gY29kZUlzSW5SYW5nZXMobnVtYmVyLCBhcnJheU9mUmFuZ2VzKSB7XG4gIHJldHVybiBhcnJheU9mUmFuZ2VzLnNvbWUoKFtsb3dlckJvdW5kLCB1cHBlckJvdW5kXSkgPT5cbiAgICAobG93ZXJCb3VuZCA8PSBudW1iZXIpICYmIChudW1iZXIgPD0gdXBwZXJCb3VuZClcbiAgKVxufVxuXG4vKipcbiAqIEB0eXBlIHtXb3JkQm91bmRGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gaXNDSksoYykge1xuICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBjKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgY29uc3QgY2hhckNvZGUgPSBjLmNoYXJDb2RlQXQoMClcbiAgLy8gSGVscCB3YW50ZWQhXG4gIC8vIFRoaXMgc2hvdWxkIGJlIGdvb2QgZm9yIG1vc3QgY2FzZXMsIGJ1dCBpZiB5b3UgZmluZCBpdCB1bnNhdGlzZmFjdG9yeVxuICAvLyAoZS5nLiBzb21lIG90aGVyIGxhbmd1YWdlIHdoZXJlIGVhY2ggY2hhcmFjdGVyIHNob3VsZCBiZSBzdGFuZGFsb25lIHdvcmRzKSxcbiAgLy8gY29udHJpYnV0aW9ucyB3ZWxjb21lIVxuICByZXR1cm4gY29kZUlzSW5SYW5nZXMoXG4gICAgY2hhckNvZGUsXG4gICAgW1xuICAgICAgLy8gSGlyYWdhbmEgKEthdGFrYW5hIG5vdCBpbmNsdWRlZCBvbiBwdXJwb3NlLFxuICAgICAgLy8gY29udGV4dDogaHR0cHM6Ly9naXRodWIuY29tL25ncnltYW4vcmVhZGluZy10aW1lL3B1bGwvMzUjaXNzdWVjb21tZW50LTg1MzM2NDUyNilcbiAgICAgIC8vIElmIHlvdSB0aGluayBLYXRha2FuYSBzaG91bGQgYmUgaW5jbHVkZWQgYW5kIGhhdmUgc29saWQgcmVhc29ucywgaW1wcm92ZW1lbnQgaXMgd2VsY29tZWRcbiAgICAgIFsweDMwNDAsIDB4MzA5Zl0sXG4gICAgICAvLyBDSksgVW5pZmllZCBpZGVvZ3JhcGhzXG4gICAgICBbMHg0ZTAwLCAweDlmZmZdLFxuICAgICAgLy8gSGFuZ3VsXG4gICAgICBbMHhhYzAwLCAweGQ3YTNdLFxuICAgICAgLy8gQ0pLIGV4dGVuc2lvbnNcbiAgICAgIFsweDIwMDAwLCAweDJlYmUwXVxuICAgIF1cbiAgKVxufVxuXG4vKipcbiAqIEB0eXBlIHtXb3JkQm91bmRGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gaXNBbnNpV29yZEJvdW5kKGMpIHtcbiAgcmV0dXJuICcgXFxuXFxyXFx0Jy5pbmNsdWRlcyhjKVxufVxuXG4vKipcbiAqIEB0eXBlIHtXb3JkQm91bmRGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gaXNQdW5jdHVhdGlvbihjKSB7XG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGMpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zdCBjaGFyQ29kZSA9IGMuY2hhckNvZGVBdCgwKVxuICByZXR1cm4gY29kZUlzSW5SYW5nZXMoXG4gICAgY2hhckNvZGUsXG4gICAgW1xuICAgICAgWzB4MjEsIDB4MmZdLFxuICAgICAgWzB4M2EsIDB4NDBdLFxuICAgICAgWzB4NWIsIDB4NjBdLFxuICAgICAgWzB4N2IsIDB4N2VdLFxuICAgICAgLy8gQ0pLIFN5bWJvbHMgYW5kIFB1bmN0dWF0aW9uXG4gICAgICBbMHgzMDAwLCAweDMwM2ZdLFxuICAgICAgLy8gRnVsbC13aWR0aCBBU0NJSSBwdW5jdHVhdGlvbiB2YXJpYW50c1xuICAgICAgWzB4ZmYwMCwgMHhmZmVmXVxuICAgIF1cbiAgKVxufVxuXG4vKipcbiAqIEB0eXBlIHtpbXBvcnQoJ3JlYWRpbmctdGltZScpLmRlZmF1bHR9XG4gKi9cbmZ1bmN0aW9uIHJlYWRpbmdUaW1lKHRleHQsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgd29yZHMgPSAwLCBzdGFydCA9IDAsIGVuZCA9IHRleHQubGVuZ3RoIC0gMVxuXG4gIC8vIHVzZSBwcm92aWRlZCB2YWx1ZSBpZiBhdmFpbGFibGVcbiAgY29uc3Qgd29yZHNQZXJNaW51dGUgPSBvcHRpb25zLndvcmRzUGVyTWludXRlIHx8IDIwMFxuXG4gIC8vIHVzZSBwcm92aWRlZCBmdW5jdGlvbiBpZiBhdmFpbGFibGVcbiAgY29uc3QgaXNXb3JkQm91bmQgPSBvcHRpb25zLndvcmRCb3VuZCB8fCBpc0Fuc2lXb3JkQm91bmRcblxuICAvLyBmZXRjaCBib3VuZHNcbiAgd2hpbGUgKGlzV29yZEJvdW5kKHRleHRbc3RhcnRdKSkgc3RhcnQrK1xuICB3aGlsZSAoaXNXb3JkQm91bmQodGV4dFtlbmRdKSkgZW5kLS1cblxuICAvLyBBZGQgYSB0cmFpbGluZyB3b3JkIGJvdW5kIHRvIG1ha2UgaGFuZGxpbmcgZWRnZXMgbW9yZSBjb252ZW5pZW50XG4gIGNvbnN0IG5vcm1hbGl6ZWRUZXh0ID0gYCR7dGV4dH1cXG5gXG5cbiAgLy8gY2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygd29yZHNcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgLy8gQSBDSksgY2hhcmFjdGVyIGlzIGEgYWx3YXlzIHdvcmQ7XG4gICAgLy8gQSBub24td29yZCBib3VuZCBmb2xsb3dlZCBieSBhIHdvcmQgYm91bmQgLyBDSksgaXMgdGhlIGVuZCBvZiBhIHdvcmQuXG4gICAgaWYgKFxuICAgICAgaXNDSksobm9ybWFsaXplZFRleHRbaV0pIHx8XG4gICAgICAoIWlzV29yZEJvdW5kKG5vcm1hbGl6ZWRUZXh0W2ldKSAmJlxuICAgICAgICAoaXNXb3JkQm91bmQobm9ybWFsaXplZFRleHRbaSArIDFdKSB8fCBpc0NKSyhub3JtYWxpemVkVGV4dFtpICsgMV0pKVxuICAgICAgKVxuICAgICkge1xuICAgICAgd29yZHMrK1xuICAgIH1cbiAgICAvLyBJbiBjYXNlIG9mIENKSyBmb2xsb3dlZCBieSBwdW5jdHVhdGlvbnMsIHRob3NlIGNoYXJhY3RlcnMgaGF2ZSB0byBiZSBlYXRlbiBhcyB3ZWxsXG4gICAgaWYgKGlzQ0pLKG5vcm1hbGl6ZWRUZXh0W2ldKSkge1xuICAgICAgd2hpbGUgKFxuICAgICAgICBpIDw9IGVuZCAmJlxuICAgICAgICAoaXNQdW5jdHVhdGlvbihub3JtYWxpemVkVGV4dFtpICsgMV0pIHx8IGlzV29yZEJvdW5kKG5vcm1hbGl6ZWRUZXh0W2kgKyAxXSkpXG4gICAgICApIHtcbiAgICAgICAgaSsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVhZGluZyB0aW1lIHN0YXRzXG4gIGNvbnN0IG1pbnV0ZXMgPSB3b3JkcyAvIHdvcmRzUGVyTWludXRlXG4gIC8vIE1hdGgucm91bmQgdXNlZCB0byByZXNvbHZlIGZsb2F0aW5nIHBvaW50IGZ1bmt5bmVzc1xuICAvLyAgIGh0dHA6Ly9kb2NzLm9yYWNsZS5jb20vY2QvRTE5OTU3LTAxLzgwNi0zNTY4L25jZ19nb2xkYmVyZy5odG1sXG4gIGNvbnN0IHRpbWUgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgKiA2MCAqIDEwMDApXG4gIGNvbnN0IGRpc3BsYXllZCA9IE1hdGguY2VpbChtaW51dGVzLnRvRml4ZWQoMikpXG5cbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiBkaXNwbGF5ZWQgKyAnIG1pbiByZWFkJyxcbiAgICBtaW51dGVzOiBtaW51dGVzLFxuICAgIHRpbWU6IHRpbWUsXG4gICAgd29yZHM6IHdvcmRzXG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvcnRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSByZWFkaW5nVGltZVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/reading-time/lib/reading-time.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/reading-time/lib/stream.js":
/*!*************************************************!*\
  !*** ./node_modules/reading-time/lib/stream.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*!\n * reading-time\n * Copyright (c) Nicolas Gryman <ngryman@gmail.com>\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n */\nconst readingTime = __webpack_require__(/*! ./reading-time */ \"(rsc)/./node_modules/reading-time/lib/reading-time.js\")\nconst Transform = (__webpack_require__(/*! stream */ \"stream\").Transform)\nconst util = __webpack_require__(/*! util */ \"util\")\n\n/**\n * @typedef {import('reading-time').Options} Options\n * @typedef {import('reading-time').Options['wordBound']} WordBoundFunction\n * @typedef {import('reading-time').readingTimeStream} ReadingTimeStream\n * @typedef {import('stream').TransformCallback} TransformCallback\n */\n\n/**\n * @param {Options} options\n * @returns {ReadingTimeStream}\n */\nfunction ReadingTimeStream(options) {\n  // allow use without new\n  if (!(this instanceof ReadingTimeStream)) {\n    return new ReadingTimeStream(options)\n  }\n\n  Transform.call(this, { objectMode: true })\n\n  this.options = options || {}\n  this.stats = {\n    minutes: 0,\n    time: 0,\n    words: 0\n  }\n}\nutil.inherits(ReadingTimeStream, Transform)\n\n/**\n * @param {Buffer} chunk\n * @param {BufferEncoding} encoding\n * @param {TransformCallback} callback\n */\nReadingTimeStream.prototype._transform = function(chunk, encoding, callback) {\n  const stats = readingTime(chunk.toString(encoding), this.options)\n\n  this.stats.minutes += stats.minutes\n  this.stats.time += stats.time\n  this.stats.words += stats.words\n\n  callback()\n}\n\n/**\n * @param {TransformCallback} callback\n */\nReadingTimeStream.prototype._flush = function(callback) {\n  this.stats.text = Math.ceil(this.stats.minutes.toFixed(2)) + ' min read'\n\n  this.push(this.stats)\n  callback()\n}\n\n/**\n * Export\n */\nmodule.exports = ReadingTimeStream\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVhZGluZy10aW1lL2xpYi9zdHJlYW0uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQU8sQ0FBQyw2RUFBZ0I7QUFDNUMsa0JBQWtCLHVEQUEyQjtBQUM3QyxhQUFhLG1CQUFPLENBQUMsa0JBQU07O0FBRTNCO0FBQ0EsYUFBYSxnQ0FBZ0M7QUFDN0MsYUFBYSw2Q0FBNkM7QUFDMUQsYUFBYSwwQ0FBMEM7QUFDdkQsYUFBYSxvQ0FBb0M7QUFDakQ7O0FBRUE7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsa0JBQWtCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsZ0JBQWdCO0FBQzNCLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWtlcGluMnIvRG9jdW1lbnRzL3Byb2plY3RzL21ha2VwaW4yci5naXRodWIuaW8vbm9kZV9tb2R1bGVzL3JlYWRpbmctdGltZS9saWIvc3RyZWFtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogcmVhZGluZy10aW1lXG4gKiBDb3B5cmlnaHQgKGMpIE5pY29sYXMgR3J5bWFuIDxuZ3J5bWFuQGdtYWlsLmNvbT5cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cbmNvbnN0IHJlYWRpbmdUaW1lID0gcmVxdWlyZSgnLi9yZWFkaW5nLXRpbWUnKVxuY29uc3QgVHJhbnNmb3JtID0gcmVxdWlyZSgnc3RyZWFtJykuVHJhbnNmb3JtXG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgncmVhZGluZy10aW1lJykuT3B0aW9uc30gT3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgncmVhZGluZy10aW1lJykuT3B0aW9uc1snd29yZEJvdW5kJ119IFdvcmRCb3VuZEZ1bmN0aW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdyZWFkaW5nLXRpbWUnKS5yZWFkaW5nVGltZVN0cmVhbX0gUmVhZGluZ1RpbWVTdHJlYW1cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3N0cmVhbScpLlRyYW5zZm9ybUNhbGxiYWNrfSBUcmFuc2Zvcm1DYWxsYmFja1xuICovXG5cbi8qKlxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gKiBAcmV0dXJucyB7UmVhZGluZ1RpbWVTdHJlYW19XG4gKi9cbmZ1bmN0aW9uIFJlYWRpbmdUaW1lU3RyZWFtKG9wdGlvbnMpIHtcbiAgLy8gYWxsb3cgdXNlIHdpdGhvdXQgbmV3XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZWFkaW5nVGltZVN0cmVhbSkpIHtcbiAgICByZXR1cm4gbmV3IFJlYWRpbmdUaW1lU3RyZWFtKG9wdGlvbnMpXG4gIH1cblxuICBUcmFuc2Zvcm0uY2FsbCh0aGlzLCB7IG9iamVjdE1vZGU6IHRydWUgfSlcblxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMuc3RhdHMgPSB7XG4gICAgbWludXRlczogMCxcbiAgICB0aW1lOiAwLFxuICAgIHdvcmRzOiAwXG4gIH1cbn1cbnV0aWwuaW5oZXJpdHMoUmVhZGluZ1RpbWVTdHJlYW0sIFRyYW5zZm9ybSlcblxuLyoqXG4gKiBAcGFyYW0ge0J1ZmZlcn0gY2h1bmtcbiAqIEBwYXJhbSB7QnVmZmVyRW5jb2Rpbmd9IGVuY29kaW5nXG4gKiBAcGFyYW0ge1RyYW5zZm9ybUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5SZWFkaW5nVGltZVN0cmVhbS5wcm90b3R5cGUuX3RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgY29uc3Qgc3RhdHMgPSByZWFkaW5nVGltZShjaHVuay50b1N0cmluZyhlbmNvZGluZyksIHRoaXMub3B0aW9ucylcblxuICB0aGlzLnN0YXRzLm1pbnV0ZXMgKz0gc3RhdHMubWludXRlc1xuICB0aGlzLnN0YXRzLnRpbWUgKz0gc3RhdHMudGltZVxuICB0aGlzLnN0YXRzLndvcmRzICs9IHN0YXRzLndvcmRzXG5cbiAgY2FsbGJhY2soKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7VHJhbnNmb3JtQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblJlYWRpbmdUaW1lU3RyZWFtLnByb3RvdHlwZS5fZmx1c2ggPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICB0aGlzLnN0YXRzLnRleHQgPSBNYXRoLmNlaWwodGhpcy5zdGF0cy5taW51dGVzLnRvRml4ZWQoMikpICsgJyBtaW4gcmVhZCdcblxuICB0aGlzLnB1c2godGhpcy5zdGF0cylcbiAgY2FsbGJhY2soKVxufVxuXG4vKipcbiAqIEV4cG9ydFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWRpbmdUaW1lU3RyZWFtXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/reading-time/lib/stream.js\n");

/***/ })

};
;