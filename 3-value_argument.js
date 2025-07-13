// 3-value_argument.js
// Print the first CLI argument, or “No argument” if none

const firstArg = process.argv[2];   // index 2 is the first user‑given word

if (firstArg === undefined) {
  console.log("No argument");
} else {
  console.log(firstArg);
}
