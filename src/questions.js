console.log("what is your name?");
process.stdin.once("data", chunk => {
    let name = chunk.toString();
    console.log("hello!" + name + "!");
  });
  