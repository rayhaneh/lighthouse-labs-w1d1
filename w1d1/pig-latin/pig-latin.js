words = process.argv.slice(2);

var pigWords = "";
for (var i = 0; i < words.length; i++) {
  pigWords += words[i].substring(1) + words[i].substring(0,1) + "ay ";
}
console.log (pigWords)