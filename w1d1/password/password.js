console.log(obfuscate(process.argv[2]));
  // var substr    = ["a", "e", "o", "l"];
  // var newsubstr = ["4", "3", "0", "1"];

function obfuscate (pass) {
  var substr    = ["a", "e", "o", "l"];
  var newsubstr = ["4", "3", "0", "1"];

  for (var i = 0; i < substr.length; i++) {
    var re = new RegExp(substr[i], 'g');
    pass = pass.replace(re, newsubstr[i]);
  }
  return pass;
}
