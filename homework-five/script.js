//page83 xndir 28,29, 30

// Task xndir 28??

// Task xndir 29
function printPrimes(N) {
  let i, j, k;

  for (i = 1; i <= N; i++) {
    if (i == 1 || i == 0) {
      continue;
    }
    k = 1;

    for (j = 2; j <= i / 2; ++j) {
      if (i % j == 0) {
        k = 0;
        break;
      }
    }

    if (k == 1) {
      console.log(i);
    }
  }
}

//printPrimes(100);
// Task xndir 30??
