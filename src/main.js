function Fibonacci(n) {
  let fibonacci = [1, 1];
  let state = true;
  while (state) {
    let value = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (value > n) {
      state = false;
      break;
    }
    fibonacci.push(value);
  }
  return fibonacci;
}

function pibona_chimac(n) {
  const pibonachi = Fibonacci(n);

  function getBiggestSmallerGroup(n) {
    for (let i = pibonachi.length - 1; i >= 0; i--) {
      if (pibonachi[i] <= n) return i;
    }
  }

  let total = 0;
  while (n) {
    let groupIndex = getBiggestSmallerGroup(n);
    total += pibonachi[groupIndex - 1];
    n -= pibonachi[groupIndex];
  }
  output.innerHTML = total;
}

let btn = document.querySelector("button");
let input = document.querySelector("input");
let output = document.querySelector("strong");
btn.addEventListener("click", () => pibona_chimac(input.value));
