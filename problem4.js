function Function() {
    const number = prompt("Enter a number : ");
    let sum = 0;
    let i = number;
    while (i > 0) {
        let a = i % 10;
        sum += a * a * a;
        i = parseInt(i / 10);
    }
    if (sum == number) {
        alert(`${number} is an Armstrong number.`);
    }
    else {
        alert(`${number} is not an Armstrong number.`);
    }
}
