function Fibonacci(n) {
  let fibonacci = [1, 1];
  let state = true;
  while (state) {
    let value =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (value > n) {
      state = false;
      break;
    }
    fibonacci.push(value);
  }
  console.log(fibonacci);
}

Fibonacci(6);
