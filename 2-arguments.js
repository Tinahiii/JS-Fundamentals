// 2-arguments.js
// Count the CLI arguments (ignore "node" and script path)
const argCount = process.argv.length - 2;

if (argCount === 0) {
  console.log("No argument");
} else if (argCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
