function words(str) {
  const objCount = {};
  const splitString = str.split(/\s+/);
  splitString.forEach(function(str) {
    if(objCount.hasOwnProperty(str)) {
      objCount[str]++;  //increment's word by 1 if it re-occurs
    } else {
      objCount[str] = 1;
    }
  });
  return objCount;
}

exports.words = words;