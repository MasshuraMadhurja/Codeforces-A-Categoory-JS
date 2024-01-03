
  var n = parseInt(readline());
  var total = [];
  var result = 0;

  for (let i = 1; i <= n; i++) {
    // Read the entire line as a string
    var line = readline().split(" ");
    
    // Parse the three integers from the string
    var a = parseInt(line[0]);
    var b = parseInt(line[1]);
    var c = parseInt(line[2]);

    if (a === 1 && b === 1 && c === 1) {
      total.push(1);
    } else if (a === 1 && b === 1) {
      total.push(1);
    } else if (b === 1 && c === 1) {
      total.push(1);
    } else if (a === 1 && c === 1) {
      total.push(1);
    } else {
      total.push(0);
    }
  }

  for (let j = 0; j < total.length; j++) {
    if (total[j] === 1) {
      result = result + 1;
    } else {
      result = result;
    }
  }
  console.log(result);


