console.log("is even?");

function even(n) {
	if (n % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}


console.log("recursive factorial");

function factorial(n) {
	if (n < 1) {
		return 1;
	}
	else {
		return n * factorial(n-1);
	}
}

console.log("find and replace");

function findAndReplace(str) {
	var str = str.replace(/-/g,"_");
	return str
}

function sing() {
	console.log("twinkle twinkle...");
	console.log("how I wonder...");
}

