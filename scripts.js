var a = 3,
	b = 5,
	value = (a * a) - (2 * a * b) - (b * b);

console.log(value);

if (value > 0) {
	console.log("wynik dodatni")
} else if (value == 0 ) {
	console.log("wynik równy zero")
} else {
	console.log("wynik ujemny")
}

switch (value) {
	case 0:
	console.log("wynik jest równy zero")
	break;

	default:
	console.log("wynik nie jest równy zero")
}
