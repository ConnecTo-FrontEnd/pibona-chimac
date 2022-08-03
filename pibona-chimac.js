function pibona_chimac(n) {
  // 이주님께서 제작하실 n보다 작은 피보나치 수열 배열입니다.
  // 테스트를 위해 임시로 작성해두었습니다.
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

