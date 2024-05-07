

const sentence = "hello there from lighthouse labs";

  count = 0;
  for (let letter of sentence) {
    setTimeout(() => {
      process.stdout.write(letter)}, count); 
      count += 50;
}

setTimeout(() => {
  console.log()}, sentence.length * 50);

