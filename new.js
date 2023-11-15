//Create an array of strings,loop over the array and check if the string 'search' is inside the array.If it is console.log the index of the 'search' if not console.log '-1'
const codes = ['lodi', 'idol', 'search', 'idle'];

function arrays(cc, geass) {
  let results = [];
  let codeGeass = geass.indexOf(cc);

  // If the initial indexOf returns -1, return -1 immediately
  if (codeGeass === -1) {
    return -1;
  }

  while (codeGeass !== -1) {
    results.push(codeGeass);
    codeGeass = geass.indexOf(cc, codeGeass + 1);
  }
  return results;
}

console.log(arrays('search', codes)); // Output: [2]
console.log(arrays('notFound', codes)); // Output: -1
