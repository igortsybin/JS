function pow(x, n) {
  console.log(n);
  if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x*pow(x, n - 1);

  } else {
    return 'error';
  }
}

console.log( pow(2, 3) ); // 8
