#!/usr/bin/node
if (process.argv.length <= 3) {
[2;2R[>77;30603;0c]10;rgb:bfbf/bfbf/bfbf]11;rgb:0000/0000/0000  console.log(0);
} else {
  const args = process.argv.map(Number)
    .slice(2, process.argv.length)
    .sort((a, b) => a - b);
  console.log(args[args.length - 2]);
}
