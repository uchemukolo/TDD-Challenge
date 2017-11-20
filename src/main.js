function words(str) {
  let wordCount = {};
  let splitString = str.split(/\s+/);
  splitString.forEach(function(str) {
    if(wordCount.hasOwnProperty(str)) {
      wordCount[str]++;  //increment's word by 1 if it re-occurs
    } else {
      wordCount[str] = 1;
    }
  });
  return wordCount;
}

exports.words = words;