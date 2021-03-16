function Function() {
  const number = parseInt(prompt("Enter a number : "));
  var n = number;
  var s = [0, 1];
  if (n > 1) {
    for (i = 2; i <= n; i++) {
      s.push(s[i - 1] + s[i - 2]);
    }
  }
  alert(s[n]);
}