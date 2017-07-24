words = process.argv.slice(2);
for (var i = 0; i < words.length; i++) {
  var word = words[i];
  var reversedWord = "";
  for (var j = word.length - 1; j >= 0; j--) {
    reversedWord += word.charAt(j);
  }
  console.log(reversedWord);
}