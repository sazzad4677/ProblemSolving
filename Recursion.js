const multiPly = (a, b) => {
  if (b === 0) return 0;
  return a + multiPly(a, b - 1);
};
multiPly(4, 5);

/*
5 + 5 + 5 + 5 = 20
4 + 4 + 4 + 4 + 0 = 20
*/
