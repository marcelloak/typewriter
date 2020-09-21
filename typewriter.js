const typewriter = function(sentence) {
  let counter = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 1000 + counter)
    counter += 50;
  }
  setTimeout(() => {
    console.log("");
  }, 1000 + counter)
}

typewriter("hello there from lighthouse labs");