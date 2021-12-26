var n1 = 0;
var n2 = 1;
var num = prompt("enter requried num of fibbinoci");
num = parseInt(num);
console.log(n1);
console.log(n2);
while (num > 0) {
  var n3 = n1 + n2;
  console.log(n3);
  n1 = n2;
  n2 = n3;
  num = num - 1;
}
