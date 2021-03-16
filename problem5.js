function Function() {
	var number = prompt("Enter a number : ");
	var a = 0;
	for (var i = 0; i < number; i++) {
		var r = number % i;
		if (r == 0) {
			a += i;
		}
	}
	if (a == number) {
		window.alert(a + " is a Perfect number.");
	}
	else {
		window.alert(a + " is not a Perfect number.");
	}
}