function pibona_chimac(n) {
  const pibonachi = [1, 1, 2, 3, 5, 8, 13];

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
  return total;
}

