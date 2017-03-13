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
    firstSentence = words.slice(0, 9);
  }

  return firstSentence.join(' ');
};

exports.entryModule = Entry;
