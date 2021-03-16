function Function() {
    var i = parseInt(prompt("enter first number : "));
    var j = parseInt(prompt("enter second number : "));
    var a = 0;
    for (i; i <= j; i++) {
        if (i % 2 != 0) {
            a = a + i;
        }
    }
    document.write(a);
}