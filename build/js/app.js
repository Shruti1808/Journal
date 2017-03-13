(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#journal-entry-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry (title, body);
    var resultCount = entry.wordCount();
    var resultConsonantVowel = entry.getVowelsAndConsonants();
    $('#results').text("Word count: " + resultCount + " " + resultConsonantVowel);
  });
});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  return this.title.split(' ').length + this.body.split(' ').length;
};

Entry.prototype.getVowelsAndConsonants = function() {
  var vowelsCount = 0;
  var consonantCount = 0;
  var title = this.title.toLowerCase().split(' ');
  var body = this.body.toLowerCase().split(' ');

  title.forEach(function(word){
    console.log(word);
    for (var i = 0; i < word.length ; i++){
      console.log(word.charAt(2));
      if(word.charAt(i) === 'a' || word.charAt(i) === 'e' || word.charAt(i) === 'i' || word.charAt(i) === 'o' || word.charAt(i) === 'u'){
        vowelsCount +=1;
      }else {
        consonantCount += 1;
      }
    }
  });

  body.forEach(function(word){
    console.log(word);
    for (var j = 0; j < word.length ; j++){
      console.log(word.charAt(j));
      if(word.charAt(j) === 'a' || word.charAt(j) === 'e' || word.charAt(j) === 'i' || word.charAt(j) === 'o' || word.charAt(j) === 'u'){
        vowelsCount +=1;
      }else {
        consonantCount += 1;
      }
    }
  });

    var vowelsAndConsonants = "Consonants: " + consonantCount + " Vowels: " + vowelsCount;
    return vowelsAndConsonants;
};

Entry.prototype.getTeaser = function() {
  var body = this.body.split('.');
  var firstSentence = body[0];
  var words = firstSentence.split(' ');

  if(words.length > 8) {
    firstSentence = words.substr(0, 8);
  }

  return words;
};

exports.entryModule = Entry;

},{}]},{},[1]);
