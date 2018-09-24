function sum(...numbers) {
  let output = 0;
  for (let i = 0; i < numbers.length; i++) {
    output += numbers[i];
  }
  return output;
}