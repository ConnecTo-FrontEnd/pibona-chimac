function Fibonacci(n) {
  let fibonacci = [1, 1];
  while (true) {
    let value =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (value > n) break;
    fibonacci.push(value);
  }
}

