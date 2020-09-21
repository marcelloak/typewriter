const typewriter = function(sentence) {
  let counter = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 1000 + counter) // <= 1s delay to make it noticeable. Can dial it down later.
    counter += 50;
  }
  setTimeout(() => {
    console.log("");
  }, 1000 + counter)
}

typewriter("hello there from lighthouse labs");