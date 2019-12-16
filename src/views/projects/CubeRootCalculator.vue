<template>
  <div>
    <div id="topic">Cube Root Calculator</div>
    <div id="line"></div>
    <div id="equation">
      0=<input v-model="a" />x<sup>3</sup>+<input v-model="b" />x<sup>2</sup>+<input v-model="c" />x+<input v-model="d" />
    </div>
    <div id="roots">
      <div>x<sub>1</sub>={{ roots[0] }}</div>
      <div>x<sub>2</sub>={{ roots[1] }}</div>
      <div>x<sub>3</sub>={{ roots[2] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CubeRootCalculator",
  metaInfo: {
    title: "Cube Root Calculator",
    meta: [
      { name: "description", content: "" },
      { name: "keywords", content: "" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/cube-root-calculator" }
    ]
  },
  data() {
    return {
      a: 1,
      b: 2,
      c: 0,
      d: 0
    };
  },
  computed: {
    roots() {
      let a = this.b / this.a;
      let b = this.c / this.a;
      let c = this.d / this.a;
      let p = this.add(this.fraction(b), this.fraction(a ** 2, -3));
      let q = this.add(this.fraction(2 * (a ** 3), 27), this.add(this.fraction(-b * a, 3), this.fraction(c)));
      let w = {
        firstTerm: {
          numerator: 3,
          denominator: 1,
          imaginary: true,
          type: "sqrt"
        },
        secondTerm: {
          numerator: -1,
          denominator: 1,
          typed: "normal"
        },
        type: "mixed"
      };
      let fraction1 = this.multiply(q, this.fraction(-1, 2));
      let fraction2 = this.square(this.multiply(q, this.fraction(1, 2)));
      let fraction3 = this.cube(this.multiply(p, this.fraction(1, 3)));
      let term1 = this.cbrt(this.add(fraction1, this.sqrt(this.add(fraction2, fraction3))));
      let term2 = this.cbrt(this.add(fraction1, this.multiply(this.sqrt(this.add(fraction2, fraction3)), this.fraction(-1))));
      let root1 = this.add(term1, this.add(term2, this.fraction(a, -3)));
      let root2 = this.add(this.multiply(term1, w), this.multiply(term2, w));
      root2 = this.multiply(this.add(root2, this.fraction(2 * a, -3)), this.fraction(1, 2));
      let root3 = this.add(this.multiply(term1, w), this.multiply(term2, w));
      root3 = this.multiply(this.add(root3, this.fraction(2 * a, -3)), this.fraction(1, 2));
      return [root1, root2, root3];
    }
  },
  methods: {
    fraction(numerator, denominator = 1) {
      let greatestCommonDivisor = this.greatestCommonDivisor(numerator, denominator);
      numerator /= greatestCommonDivisor;
      denominator /= greatestCommonDivisor;
      if (numerator < 0 && denominator < 0) {
        numerator *= -1;
        denominator *= -1;
      }
      return {
        firstTerm: {
          numerator: numerator,
          denominator: denominator,
          type: "normal"
        },
        type: "normal"
      };
    },
    add(a, b) {
      if (a.type === "normal") {
        if (b.type === "normal") {
          let numeratorA = a.firstTerm.numerator * b.firstTerm.denominator;
          let numeratorB = b.firstTerm.numerator * a.firstTerm.denominator;
          let commonDenominator = a.firstTerm.denominator * b.firstTerm.denominator;
          return this.fraction(numeratorA + numeratorB, commonDenominator);
        }
        if (b.type === "mixed") {
          return {
            firstTerm: a.firstTerm,
            secondTerm: b,
            type: "mixed"
          };
        }
        return {
          firstTerm: a.firstTerm,
          secondTerm: b.firstTerm,
          type: "mixed"
        };
      }
      return {
        firstTerm: a,
        secondTerm: b,
        type: "mixed"
      };
    },
    multiply(a, b) {
      return this.fraction(a.firstTerm.numerator * b.firstTerm.numerator, a.firstTerm.denominator * b.firstTerm.denominator);
    },
    square(fraction) {
      return this.fraction(fraction.firstTerm.numerator ** 2, fraction.firstTerm.denominator ** 2);
    },
    cube(fraction) {
      return this.fraction(fraction.firstTerm.numerator ** 3, fraction.firstTerm.denominator ** 3);
    },
    sqrt(fraction) {
      let imaginary = false;
      if (fraction.firstTerm.numerator * fraction.firstTerm.denominator < 0) {
        fraction.firstTerm.numerator < 0 ? fraction.firstTerm.numerator *= -1 : fraction.firstTerm.denominator *= -1;
        imaginary = true;
      }
      if (Math.sqrt(fraction.firstTerm.numerator) % 1 || Math.sqrt(fraction.firstTerm.denominator) % 1) {
        return {
          firstTerm: {
            numerator: fraction.firstTerm.numerator,
            denominator: fraction.firstTerm.denominator,
            imaginary: imaginary,
            type: "sqrt"
          },
          type: "sqrt"
        };
      }
      return {
        firstTerm: {
          numerator: Math.sqrt(fraction.firstTerm.numerator),
          denominator: Math.sqrt(fraction.firstTerm.denominator),
          imaginary: imaginary,
          type: "normal"
        },
        type: "normal"
      };
    },
    cbrt(fraction) {
      if (fraction.type === "normal") {
        if (Math.cbrt(fraction.firstTerm.numerator) % 1 || Math.cbrt(fraction.firstTerm.denominator) % 1) {
          return {
            firstTerm: {
              numerator: fraction.firstTerm.numerator,
              denominator: fraction.firstTerm.denominator,
              type: "cbrt"
            },
            type: "cbrt"
          };
        }
        return this.fraction(Math.cbrt(fraction.firstTerm.numerator), Math.cbrt(fraction.firstTerm.denominator));
      }
      return {
        firstTerm: fraction,
        type: "cbrt"
      };
    },
    greatestCommonDivisor(a, b) {
      if (!b) {
        return a;
      }
      return this.greatestCommonDivisor(b, a % b);
    }
  }
}
</script>

<style lang="scss" scoped>
#equation {
  font-size: 36px;
  sup {
    font-size: 20px;
  }
  input {
    font-size: 28px;
    width: 2em;
    padding: 5px;
    border: 2px solid $grey;
    border-radius: 3px;
    text-align: right;
    &:focus {
      border-color: $secondary-colour;
    }
  }
}
#roots {
  font-size: 28px;
  div {
    background-color: $white;
    display: table;
  }
}
</style>