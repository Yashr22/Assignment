const prompt = require('prompt-sync')();

class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  divide(f) {
    let num = this.numerator * f.denominator;
    let den = this.denominator * f.numerator;
    let g = gcd(num, den);
    return new Fraction(num / g, den / g);
  }
}

function gcd(a, b) {
  let t = 0;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function input_fraction() {
  let numerator = parseInt(prompt("Enter the numerator of the fraction: "));
  let denominator = parseInt(prompt("Enter the denominator of the fraction: "));
  return new Fraction(numerator, denominator);
}

function output_result(f1, f2, result) {
  console.log("%d/%d ÷ %d/%d is %d/%d", f1.numerator, f1.denominator, f2.numerator, f2.denominator, result.numerator, result.denominator);
}

function main() {
  let f1 = input_fraction();
  let f2 = input_fraction();
  let f3 = f1.divide(f2);
  output_result(f1, f2, f3);
}

main();
