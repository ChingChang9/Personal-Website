<template>
  <div>
    <div id="topic">Cube Root Calculator</div>
    <div id="line"></div>
    <div id="equation">
      0=<input v-model="a" @focus="$event.target.select()" />x<sup>3</sup>+<input v-model="b" @focus="$event.target.select()" />x<sup>2</sup>+<input v-model="c" @focus="$event.target.select()" />x+<input v-model="d" @focus="$event.target.select()" />
    </div>
    <div v-if="showExact" id="roots">
      <div>x<sub>1</sub>=<span v-html="exactRoots[0]"></span></div>
      <div>x<sub>2</sub>=<span v-html="exactRoots[1]"></span></div>
      <div>x<sub>3</sub>=<span v-html="exactRoots[2]"></span></div>
    </div>
    <div v-else id="roots">
      <div>x<sub>1</sub>={{ roots[0] }}</div>
      <div>x<sub>2</sub>={{ roots[1] }}</div>
      <div>x<sub>3</sub>={{ roots[2] }}</div>
    </div>
    <div class="button" @click="showExact = !showExact">
      Show
      <span v-if="showExact">Decimals</span>
      <span v-else>Exact Values</span>
    </div>
    <div class="title">How are the roots calculated?</div>
    <div class="text">
      The roots are calculated with the formulas I derived for <a :href="MathIA" target="_blank">my IB Mathematics Exploration</a>, where the steps and applications are broken down into further details.
      The variables <em>a</em>, <em>b</em>, <em>c</em>, and <em>d</em> are coefficients in a cubic formula expressed in the form of f(x)=ax<sup>3</sup>+b<sup>2</sup>+cx+d.
      When f(x)=0, the three roots of x's can be found with the following formulas:
      <picture>
        <source srcset="@/assets/pictures/cubic-formula.webp" type="image/webp" />
        <source srcset="@/assets/pictures/cubic-formula.jpg" type="image/jpeg" />
        <img src="@/assets/pictures/cubic-formula.jpg" alt="cubic formulas with 3 roots" />
      </picture>
    </div>
    <div class="title">Why not just graph the function and find the zeros?</div>
    <div class="text">
      If only it were that easy. When solving a quadratic function with the quadratic formula, there is a ± sign that results in two roots. Whether these roots are the same or extraneous, we would always have 2 before we cross out the duplicate or the extraneous one. However, when solving cubic functions by graphing, we are not guaranteed to have 3 roots. Up to two roots can disappear on the graph because they are imaginary. To obtain the imaginary roots, we must solve the cubic function algebraically.
    </div>
  </div>
</template>

<script>
import MathIA from "../../assets/pdf/MathExplorationChangChing.pdf";
import Complex from "complex.js";

export default {
  name: "CubeRootCalculator",
  metaInfo: {
    title: "Cube Root Calculator",
    meta: [
      { name: "description", content: "Algebraically calculates the roots of any cubic functions including the imaginary roots in exact values using the cubic formula I derived for my IB Math IA." },
      { name: "keywords", content: "cubic formula, cube root calculator, 3 solutions, exact value, imaginary, cubic function, IB Math IA, cubic formula calculator, steps, proof" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/cube-root-calculator" }
    ]
  },
  data() {
    return {
      a: 1,
      b: 0,
      c: 0,
      d: 0,
      showExact: true,
      MathIA
    };
  },
  computed: {
    exactRoots() {
      let a = this.b / this.a;
      let b = this.c / this.a;
      let c = this.d / this.a;
      let p = this.add(this.fraction(b), this.fraction(a ** 2, -3));
      let q = this.add(this.fraction(2 * (a ** 3), 27), this.add(this.fraction(-b * a, 3), this.fraction(c)));
      let fraction1 = this.multiply(q, this.fraction(-1, 2));
      let fraction2 = this.square(this.multiply(q, this.fraction(1, 2)));
      let fraction3 = this.cube(this.multiply(p, this.fraction(1, 3)));
      let term1 = this.cbrt(this.add(fraction1, this.sqrt(this.add(fraction2, fraction3))));
      let term2 = this.cbrt(this.add(fraction1, this.sqrt(this.add(fraction2, fraction3))));
      let root1 = this.add(term1, this.add(term2, this.fraction(a, -3)));
      root1 = this.format(root1);
      let root2 = 0;
      let root3 = 0;
      if (root1.includes("∛")) {
        root2 = root1.replace(")–", ")(–i√(3)–1)–");
        root2 = root2.replace("+∛", "(i√(3)–1)+∛");
        root2 = `(${ root2 })/2`;
        root3 = root1.replace(")–", ")(i√(3)–1)–");
        root3 = root3.replace("+∛", "(–i√(3)–1)+∛");
        root3 = `(${ root3 })/2`;
      } else if (root1.includes("6√")) {
        root2 = root1.replace(")–", ")(–i√(3)–1)–");
        root2 = root2.replace("+6√", "(i√(3)–1)+6√");
        root2 = `(${ root2 })/2`;
        root3 = root1.replace(")–", ")(i√(3)–1)–");
        root3 = root3.replace("+6√", "(–i√(3)–1)+6√");
        root3 = `(${ root3 })/2`;
      }
      if (root1 == "NaN") {
        return ["Please enter a valid number", "Please enter a valid number", "Please enter a valid number"]
      }
      return [root1, root2, root3];
    },
    roots() {
      let a = this.b / this.a;
      let b = this.c / this.a;
      let c = this.d / this.a;
      let w = new Complex(-1 / 2, -Math.sqrt(3) / 2);
      let fraction1 = new Complex(-(a ** 3) / 27);
      let fraction2 = new Complex(b * a / 6);
      let fraction3 = new Complex(c / 2);
      let subterm1 = fraction1.add(fraction2).sub(fraction3);
      let fraction4 = new Complex(subterm1.re ** 2);
      let fraction5 = new Complex(b / 3);
      let fraction6 = new Complex((a ** 2) / 9);
      let fraction7 = fraction5.sub(fraction6);
      let subterm2 = new Complex(fraction7.re ** 3);
      subterm2 = subterm2.add(fraction4).sqrt();
      let term1;
      let term2;
      if (!subterm2.im) {
        term1 = new Complex(Math.cbrt(subterm1.re + subterm2.re));
        term2 = new Complex(Math.cbrt(subterm1.re - subterm2.re));
      } else {
        term1 = subterm1.add(subterm2).pow(1 / 3);
        term2 = subterm1.sub(subterm2).pow(1 / 3);
      }
      let term3 = new Complex(a / 3);
      let root1 = term1.add(term2).sub(term3);
      term1 = term1.mul(w);
      term2 = term2.mul(w).mul(w);
      let root2 = term1.add(term2).sub(term3);
      term1 = term1.mul(w);
      term2 = term2.mul(w).mul(w);
      let root3 = term1.add(term2).sub(term3);
      if (root1 == "NaN") {
        return ["Please enter a valid number", "Please enter a valid number", "Please enter a valid number"]
      }
      root1 = root1.toString().replace(" - ", "–").replace(" + ", "+");
      root2 = root2.toString().replace(" - ", "–").replace(" + ", "+");
      root3 = root3.toString().replace(" - ", "–").replace(" + ", "+");
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
              type: "normal"
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
    },
    objectDepth(object) {
      let level = 1;
      for (let key in object) {
        if (typeof object[key] == "object") {
          let depth = this.objectDepth(object[key]) + 1;
          level = Math.max(depth, level);
        }
      }
      return level;
    },
    format(object, expression = "") {
      if (object.type === "normal") {
        if (object.firstTerm) {
          if (object.firstTerm.denominator === 1) {
            expression += `${ object.firstTerm.numerator }`;
          } else {
            expression += `${ object.firstTerm.numerator }/${ object.firstTerm.denominator }`;
          }
        } else {
          if (object.denominator === 1) {
            expression += `${ object.numerator }`;
          } else {
            expression += `${ object.numerator }/${ object.denominator }`;
          }
        }
      } else if (object.type === "sqrt") {
        if (object.imaginary) {
          expression += "i";
        }
        if (object.denominator === 1) {
          expression += `√(${ object.numerator })`;
        } else {
          expression += `√(${ object.numerator }/${ object.denominator })`;
        }
      } else if (object.type === "cbrt") {
        expression += `∛(${ this.format(object.firstTerm, expression) })`;
      } else {
        expression += `${ this.format(object.firstTerm, expression) }+${ this.format(object.secondTerm, expression) }`;
      }
      expression = expression.replace(/\+-/g, "–");
      let count = 0;
      expression = expression.replace(/\+√/g, function(match) {
        count++;
        return (count === 2) ? "–√" : match;
      });
      expression = expression.replace("(0+√", "(√");
      expression = expression.replace("(0–√", "(–√");
      expression = expression.replace(")+0", ")");
      expression = expression.replace(/∛\(√/g, "6√");
      expression = expression.replace(/∛\(–√/g, "–6√");
      if (expression.includes("6√")) {
        expression = expression.replace(/\)\)/g, ")");
        expression = expression.replace(/6√/g, "<sup style='font-size: 13px;'>6</sup>√");
      }
      return expression;
    }
  }
}
</script>

<style lang="scss" scoped>
#equation {
  font-size: 36px;
  margin-bottom: 25px;
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
  background-color: $white;
  font-size: 28px;
  div {
    word-wrap: break-word;
    width: 100%;
    display: inline-block;
    margin-bottom: 10px;
  }
}
.button {
  user-select: none;
  width: 230px;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  background-color: $secondary-colour;
  font-size: 24px;
  font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
  cursor: pointer;
  &:hover {
    filter: brightness(97%);
  }
}
.title {
  display: table;
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: 36px;
  font-family: PoetsenOne, "Arial Black", Impact, sans-serif;
  background-color: $white;
}
.text {
  margin-bottom: 15px;
  font-size: 22px;
  display: table;
  background: $white;
  img {
    width: 100%;
  }
}

@media (max-width: 414px) {
  #equation {
    font-size: 24px;
    sup {
      font-size: 16px;
    }
    input {
      font-size: 14px;
    }
  }
  #roots {
    font-size: 20px;
  }
  .title {
    font-size: 30px;
  }
  .text {
    font-size: 20px;
  }
}
</style>