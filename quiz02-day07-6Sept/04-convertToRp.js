function conversionMoney(number) {
  const banknotes = [100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000];
  const res = [];

  for (const note of banknotes) {
    while (number >= note) {
      res.push(note);
      number -= note;
    }
  }
  
  return res;
}

const result = conversionMoney(74000);
console.log(result);