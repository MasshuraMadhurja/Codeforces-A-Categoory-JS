var input = readline().split(" ");
var n = parseInt(input[0]);
var k = parseInt(input[1]);
var result = 0;

var score = readline().split(" ");
for (let i = 0; i < n; i++) {
  var num = parseInt(score[i]);
  if (n >= k && num >= score[k-1] && num!==0) {
    result = result + 1;
  }
}
console.log(result);
