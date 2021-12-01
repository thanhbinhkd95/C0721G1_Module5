function fibonacci(n: number): number {
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("dung de quy: " + fibonacci(10));

function loopFibonacci(n: number): number {
  var a = 0;
  var b = 1;
  var next = 0;
  for (let i = 2; i <= n; i++) {
    if (i <= 1) {
      next = i;
      console.log(next);
    } else {
      next = a + b;
      a = b;
      b = next;
      console.log(next);
    }
  }
  return next;
}
loopFibonacci(10);
