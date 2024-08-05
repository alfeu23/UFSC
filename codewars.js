function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.replace(vowels, "");
}
console.log(disemvowel("This website is for losers LOL!")); // Ths wbst s fr lsrs LL!
