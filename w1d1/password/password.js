console.log(obfuscate(process.argv[2]));

function obfuscate (pass) {
  substr    = ["a", "e", "o", "l"];
  newsubstr = ["4", "3", "0", "1"];

  for (i = 0; i < substr.length; i++) {
    var re = new RegExp(substr[i], 'g');
    pass = pass.replace(re, newsubstr[i]);
  }


  return pass;
}
