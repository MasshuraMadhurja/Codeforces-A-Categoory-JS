var inputs = [];
var b = readline();
for (let i = 1; i <= b; i++) {
  var b = readline();
  inputs.push(b);
}

var processedWords = [];

for (let j = 1; j <= inputs.length; j++) {
  var a = inputs[j];

  if (!isNaN(a)) {
    a = parseFloat(a);
  } else {
    if (typeof a === "string" && a.length >= 10) {
      var c = a.length - 1;
      console.log(c);
      console.log(a[c]);
      a = a[0] + (a.length - 2).toString() + a[c];
    } else if (typeof a === "string" && a.length < 10) {
      // No need to assign a = a; in this case
    } else {
      a = " ";
    }
  }
  if (isNaN(a)) {
    processedWords.push(a);
  }
}

// Print the results
for (let k = 0; k < processedWords.length; k++) {
  console.log(processedWords[k]);
}
