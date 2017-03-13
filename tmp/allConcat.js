var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#journal-entry-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry (title, body);
    var resultCount = entry.wordCount();
    var resultConsonantVowel = entry.getVowelsAndConsonants();
    var teaser = entry.getTeaser();
    $('#results').text("Word count: " + resultCount + " " + resultConsonantVowel);
    $('#teaser').text("Beginning of post: " + teaser);
  });
});
