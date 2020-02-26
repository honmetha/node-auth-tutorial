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
  return (string.includes("xxx") || string.toLowerCase().includes("viagra")) == true ? true : false;
}

checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");