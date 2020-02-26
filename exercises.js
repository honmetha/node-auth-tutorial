// Ex 1
function random(min, max) {
  return Math.random() * (max - min) + min;
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

// Ex 2
function ucFirst(string) {
  return string[0].toUpperCase() + string.slice(1)
}

ucFirst("honma");

// Ex 3
function checkSpam(string) {
  str = string.toLowerCase();
  return (str.includes("xxx") ||
  str.includes("viagra"))
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");

// Ex 4
function truncate(str, maxlength) {
  return str.length > maxlength - 1 ? str.slice(0, maxlength - 1) + "..." : str;
}

truncate("What I'd like to tell on this topic is:", 20)
truncate("Hi everyone!", 20)

// Ex 5
function extractCurrencyValue(string, rate) {
  return string.slice(1) * rate
}

alert( extractCurrencyValue('$120', 30.5) === 3660 );