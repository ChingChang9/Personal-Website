<template>
  <div>
    <div id="topic">Work Plan</div>
    <div id="line"></div>
    <table>
      <tr>
        <th>Week</th>
        <th>Initial Amounts</th>
        <th>Production</th>
        <th>Final Amounts</th>
        <th>Comments</th>
      </tr>
      <tr>
        <td>7</td>
        <td>
          <table>
            <tr>Bags: 0</tr>
            <tr>Wood: 0</tr>
            <tr>Done: 0</tr>
          </table>
        </td>
        <td>
          <table>
            <tr><input v-model="week7BagsPeople" /> people x <input v-model="week7BagsProduce" /> bags</tr>
            <tr><input v-model="week7WoodPeople" /> people x <input v-model="week7WoodProduce" /> wood</tr>
            <tr><input v-model="week7PackPeople" /> people x <input v-model="week7PackProduce" /> pack</tr>
          </table>
        </td>
        <td>
          <table>
            <tr>Bags: {{ week7FinalBags }}</tr>
            <tr>Wood: {{ week7FinalWood }}</tr>
            <tr>Done: {{ week7FinalDone }}</tr>
          </table>
        </td>
        <td>First week of production</td>
      </tr>
      <tr>
        <td>8</td>
        <td>
          <table>
            <tr>Bags: {{ week7FinalBags }}</tr>
            <tr>Wood: {{ week7FinalWood }}</tr>
            <tr>Done: {{ week7FinalDone }}</tr>
          </table>
        </td>
        <td>
          <table>
            <tr><input v-model="week8BagsPeople" /> people x <input v-model="week8BagsProduce" /> bags</tr>
            <tr><input v-model="week8WoodPeople" /> people x <input v-model="week8WoodProduce" /> wood</tr>
            <tr><input v-model="week8PackPeople" /> people x <input v-model="week8PackProduce" /> pack</tr>
          </table>
        </td>
        <td>
          <table>
            <tr>Bags: {{ week8FinalBags }}</tr>
            <tr>Wood: {{ week8FinalWood }}</tr>
            <tr>Done: {{ week8FinalDone }}</tr>
          </table>
        </td>
        <td>
          Spring break, 2 weeks
          <br />
          Product amounts x 2
        </td>
      </tr>
      <tr>
        <td>9</td>
        <td>
          <table>
            <tr>Bags: {{ week8FinalBags }}</tr>
            <tr>Wood: {{ week8FinalWood }}</tr>
            <tr>Done: {{ week8FinalDone }}</tr>
          </table>
        </td>
        <td>
          <table>
            <tr><input v-model="week9BagsPeople" /> people x <input v-model="week9BagsProduce" /> bags</tr>
            <tr><input v-model="week9WoodPeople" /> people x <input v-model="week9WoodProduce" /> wood</tr>
            <tr><input v-model="week9PackPeople" /> people x <input v-model="week9PackProduce" /> pack</tr>
          </table>
        </td>
        <td>
          <table>
            <tr>Bags: {{ week9FinalBags }}</tr>
            <tr>Wood: {{ week9FinalWood }}</tr>
            <tr>Done: {{ week9FinalDone }}</tr>
          </table>
        </td>
        <td>2 days before the WEM Tradeshow</td>
      </tr>
      <tr>
        <td>10</td>
        <td>
          <table>
            <tr>Bags: {{ week9FinalBags }}</tr>
            <tr>Wood: {{ week9FinalWood }}</tr>
            <tr>Done: {{ week9FinalDone }}</tr>
          </table>
        </td>
        <td>
          <table>
            <tr><input v-model="week10BagsPeople" /> people x <input v-model="week10BagsProduce" /> bags</tr>
            <tr><input v-model="week10WoodPeople" /> people x <input v-model="week10WoodProduce" /> wood</tr>
            <tr><input v-model="week10PackPeople" /> people x <input v-model="week10PackProduce" /> pack</tr>
          </table>
        </td>
        <td>
          <table>
            <tr>Bags: {{ week10FinalBags }}</tr>
            <tr>Wood: {{ week10FinalWood }}</tr>
            <tr>Done: {{ week10FinalDone }}</tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>11</td>
        <td>
          <table>
            <tr>Bags: {{ week10FinalBags }}</tr>
            <tr>Wood: {{ week10FinalWood }}</tr>
            <tr>Done: {{ week10FinalDone }}</tr>
          </table>
        </td>
        <td>
          <table>
            <tr><input v-model="week11BagsPeople" /> people x <input v-model="week11BagsProduce" /> bags</tr>
            <tr><input v-model="week11WoodPeople" /> people x <input v-model="week11WoodProduce" /> wood</tr>
            <tr><input v-model="week11PackPeople" /> people x <input v-model="week11PackProduce" /> pack</tr>
          </table>
        </td>
        <td>
          <table>
            <tr>Bags: {{ week11FinalBags }}</tr>
            <tr>Wood: {{ week11FinalWood }}</tr>
            <tr>Done: {{ week11FinalDone }}</tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>12</td>
        <td>
          <table>
            <tr>Bags: {{ week11FinalBags }}</tr>
            <tr>Wood: {{ week11FinalWood }}</tr>
            <tr>Done: {{ week11FinalDone }}</tr>
          </table>
        </td>
        <td>
          <table>
            <tr><input v-model="week12BagsPeople" /> people x <input v-model="week12BagsProduce" /> bags</tr>
            <tr><input v-model="week12WoodPeople" /> people x <input v-model="week12WoodProduce" /> wood</tr>
            <tr><input v-model="week12PackPeople" /> people x <input v-model="week12PackProduce" /> pack</tr>
          </table>
        </td>
        <td>
          <table>
            <tr>Bags: {{ week12FinalBags }}</tr>
            <tr>Wood: {{ week12FinalWood }}</tr>
            <tr>Done: {{ week12FinalDone }}</tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>13</td>
        <td>
          <table>
            <tr>Bags: {{ week12FinalBags }}</tr>
            <tr>Wood: {{ week12FinalWood }}</tr>
            <tr>Done: {{ week12FinalDone }}</tr>
          </table>
        </td>
        <td>
          <table>
            <tr><input v-model="week13BagsPeople" /> people x <input v-model="week13BagsProduce" /> bags</tr>
            <tr><input v-model="week13WoodPeople" /> people x <input v-model="week13WoodProduce" /> wood</tr>
            <tr><input v-model="week13PackPeople" /> people x <input v-model="week13PackProduce" /> pack</tr>
          </table>
        </td>
        <td>
          <table>
            <tr>Bags: {{ week13FinalBags }}</tr>
            <tr>Wood: {{ week13FinalWood }}</tr>
            <tr>Done: {{ week13FinalDone }}</tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>14</td>
        <td>
          <table>
            <tr>Bags: {{ week13FinalBags }}</tr>
            <tr>Wood: {{ week13FinalWood }}</tr>
            <tr>Done: {{ week13FinalDone }}</tr>
          </table>
        </td>
        <td>
          <table>
            <tr><input v-model="week14BagsPeople" /> people x <input v-model="week14BagsProduce" /> bags</tr>
            <tr><input v-model="week14WoodPeople" /> people x <input v-model="week14WoodProduce" /> wood</tr>
            <tr><input v-model="week14PackPeople" /> people x <input v-model="week14PackProduce" /> pack</tr>
          </table>
        </td>
        <td>
          <table>
            <tr>Bags: {{ week14FinalBags }}</tr>
            <tr>Wood: {{ week14FinalWood }}</tr>
            <tr>Done: {{ week14FinalDone }}</tr>
          </table>
        </td>
        <td>A week before ABHOF</td>
      </tr>
      <tr>
        <td>15</td>
        <td>
          <table>
            <tr>Bags: {{ week14FinalBags }}</tr>
            <tr>Wood: {{ week14FinalWood }}</tr>
            <tr>Done: {{ week14FinalDone }}</tr>
          </table>
        </td>
        <td>
          <table>
            <tr><input v-model="week15BagsPeople" /> people x <input v-model="week15BagsProduce" /> bags</tr>
            <tr><input v-model="week15WoodPeople" /> people x <input v-model="week15WoodProduce" /> wood</tr>
            <tr><input v-model="week15PackPeople" /> people x <input v-model="week15PackProduce" /> pack</tr>
          </table>
        </td>
        <td>
          <table>
            <tr>Bags: {{ week15FinalBags }}</tr>
            <tr>Wood: {{ week15FinalWood }}</tr>
            <tr>Done: {{ week15FinalDone }}</tr>
          </table>
        </td>
        <td>
          Last week of production
          <br />
          2 days before ABHOF
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "WorkPlan",
  data() {
    return {
      week7BagsPeople: localStorage.week7BagsPeople || 13,
      week7WoodPeople: localStorage.week7WoodPeople || 0,
      week7PackPeople: localStorage.week7PackPeople || 0,
      week7BagsProduce: localStorage.week7BagsProduce || 40,
      week7WoodProduce: localStorage.week7WoodProduce || 0,
      week7PackProduce: localStorage.week7PackProduce || 0,

      week8BagsPeople: localStorage.week8BagsPeople || 0,
      week8WoodPeople: localStorage.week8WoodPeople || 13,
      week8PackPeople: localStorage.week8PackPeople || 0,
      week8BagsProduce: localStorage.week8BagsProduce || 0,
      week8WoodProduce: localStorage.week8WoodProduce || 12,
      week8PackProduce: localStorage.week8PackProduce || 0,

      week9BagsPeople: localStorage.week9BagsPeople || 0,
      week9WoodPeople: localStorage.week9WoodPeople || 8,
      week9PackPeople: localStorage.week9PackPeople || 5,
      week9BagsProduce: localStorage.week9BagsProduce || 0,
      week9WoodProduce: localStorage.week9WoodProduce || 11,
      week9PackProduce: localStorage.week9PackProduce || 60,

      week10BagsPeople: localStorage.week10BagsPeople || 2,
      week10WoodPeople: localStorage.week10WoodPeople || 9,
      week10PackPeople: localStorage.week10PackPeople || 2,
      week10BagsProduce: localStorage.week10BagsProduce || 40,
      week10WoodProduce: localStorage.week10WoodProduce || 10,
      week10PackProduce: localStorage.week10PackProduce || 40,

      week11BagsPeople: localStorage.week11BagsPeople || 2,
      week11WoodPeople: localStorage.week11WoodPeople || 9,
      week11PackPeople: localStorage.week11PackPeople || 2,
      week11BagsProduce: localStorage.week11BagsProduce || 40,
      week11WoodProduce: localStorage.week11WoodProduce || 10,
      week11PackProduce: localStorage.week11PackProduce || 40,

      week12BagsPeople: localStorage.week12BagsPeople || 2,
      week12WoodPeople: localStorage.week12WoodPeople || 9,
      week12PackPeople: localStorage.week12PackPeople || 2,
      week12BagsProduce: localStorage.week12BagsProduce || 40,
      week12WoodProduce: localStorage.week12WoodProduce || 10,
      week12PackProduce: localStorage.week12PackProduce || 40,

      week13BagsPeople: localStorage.week13BagsPeople || 1,
      week13WoodPeople: localStorage.week13WoodPeople || 10,
      week13PackPeople: localStorage.week13PackPeople || 2,
      week13BagsProduce: localStorage.week13BagsProduce || 40,
      week13WoodProduce: localStorage.week13WoodProduce || 10,
      week13PackProduce: localStorage.week13PackProduce || 40,

      week14BagsPeople: localStorage.week14BagsPeople || 1,
      week14WoodPeople: localStorage.week14WoodPeople || 9,
      week14PackPeople: localStorage.week14PackPeople || 3,
      week14BagsProduce: localStorage.week14BagsProduce || 40,
      week14WoodProduce: localStorage.week14WoodProduce || 10,
      week14PackProduce: localStorage.week14PackProduce || 40,

      week15BagsPeople: localStorage.week15BagsPeople || 1,
      week15WoodPeople: localStorage.week15WoodPeople || 0,
      week15PackPeople: localStorage.week15PackPeople || 12,
      week15BagsProduce: localStorage.week15BagsProduce || 20,
      week15WoodProduce: localStorage.week15WoodProduce || 0,
      week15PackProduce: localStorage.week15PackProduce || 10
    };
  },
  computed: {
    week7FinalBags() {
      return this.week7BagsPeople * this.week7BagsProduce;
    },
    week7FinalWood() {
      return this.week7WoodPeople * this.week7WoodProduce;
    },
    week7FinalDone() {
      return this.week7PackPeople * this.week7PackProduce;
    },

    week8FinalBags() {
      return this.week7FinalBags + this.week8BagsPeople * this.week8BagsProduce * 2;
    },
    week8FinalWood() {
      return this.week7FinalWood + this.week8WoodPeople * this.week8WoodProduce * 2;
    },
    week8FinalDone() {
      return this.week7FinalDone + this.week8PackPeople * this.week8PackProduce * 2;
    },

    week9FinalBags() {
      return this.week8FinalBags + this.week9BagsPeople * this.week9BagsProduce;
    },
    week9FinalWood() {
      return this.week8FinalWood + this.week9WoodPeople * this.week9WoodProduce;
    },
    week9FinalDone() {
      return this.week8FinalDone + this.week9PackPeople * this.week9PackProduce;
    },

    week10FinalBags() {
      return this.week9FinalBags + this.week10BagsPeople * this.week10BagsProduce;
    },
    week10FinalWood() {
      return this.week9FinalWood + this.week10WoodPeople * this.week10WoodProduce;
    },
    week10FinalDone() {
      return this.week9FinalDone + this.week10PackPeople * this.week10PackProduce;
    },

    week11FinalBags() {
      return this.week10FinalBags + this.week11BagsPeople * this.week11BagsProduce;
    },
    week11FinalWood() {
      return this.week10FinalWood + this.week11WoodPeople * this.week11WoodProduce;
    },
    week11FinalDone() {
      return this.week10FinalDone + this.week11PackPeople * this.week11PackProduce;
    },

    week12FinalBags() {
      return this.week11FinalBags + this.week12BagsPeople * this.week12BagsProduce;
    },
    week12FinalWood() {
      return this.week11FinalWood + this.week12WoodPeople * this.week12WoodProduce;
    },
    week12FinalDone() {
      return this.week11FinalDone + this.week12PackPeople * this.week12PackProduce;
    },

    week13FinalBags() {
      return this.week12FinalBags + this.week13BagsPeople * this.week13BagsProduce;
    },
    week13FinalWood() {
      return this.week12FinalWood + this.week13WoodPeople * this.week13WoodProduce;
    },
    week13FinalDone() {
      return this.week12FinalDone + this.week13PackPeople * this.week13PackProduce;
    },

    week14FinalBags() {
      return this.week13FinalBags + this.week14BagsPeople * this.week14BagsProduce;
    },
    week14FinalWood() {
      return this.week13FinalWood + this.week14WoodPeople * this.week14WoodProduce;
    },
    week14FinalDone() {
      return this.week13FinalDone + this.week14PackPeople * this.week14PackProduce;
    },

    week15FinalBags() {
      return this.week14FinalBags + this.week15BagsPeople * this.week15BagsProduce;
    },
    week15FinalWood() {
      return this.week14FinalWood + this.week15WoodPeople * this.week15WoodProduce;
    },
    week15FinalDone() {
      return this.week14FinalDone + this.week15PackPeople * this.week15PackProduce;
    }
  },
  watch: {
    week7BagsPeople() { localStorage.week7BagsPeople = this.week7BagsPeople },
    week7WoodPeople() { localStorage.week7WoodPeople = this.week7WoodPeople },
    week7PackPeople() { localStorage.week7PackPeople = this.week7PackPeople },
    week7BagsProduce() { localStorage.week7BagsProduce = this.week7BagsProduce },
    week7WoodProduce() { localStorage.week7WoodProduce = this.week7WoodProduce },
    week7PackProduce() { localStorage.week7PackProduce = this.week7PackProduce },
    week8BagsPeople() { localStorage.week8BagsPeople = this.week8BagsPeople },
    week8WoodPeople() { localStorage.week8WoodPeople = this.week8WoodPeople },
    week8PackPeople() { localStorage.week8PackPeople = this.week8PackPeople },
    week8BagsProduce() { localStorage.week8BagsProduce = this.week8BagsProduce },
    week8WoodProduce() { localStorage.week8WoodProduce = this.week8WoodProduce },
    week8PackProduce() { localStorage.week8PackProduce = this.week8PackProduce },
    week9BagsPeople() { localStorage.week9BagsPeople = this.week9BagsPeople },
    week9WoodPeople() { localStorage.week9WoodPeople = this.week9WoodPeople },
    week9PackPeople() { localStorage.week9PackPeople = this.week9PackPeople },
    week9BagsProduce() { localStorage.week9BagsProduce = this.week9BagsProduce },
    week9WoodProduce() { localStorage.week9WoodProduce = this.week9WoodProduce },
    week9PackProduce() { localStorage.week9PackProduce = this.week9PackProduce },
    week10BagsPeople() { localStorage.week10BagsPeople = this.week10BagsPeople },
    week10WoodPeople() { localStorage.week10WoodPeople = this.week10WoodPeople },
    week10PackPeople() { localStorage.week10PackPeople = this.week10PackPeople },
    week10BagsProduce() { localStorage.week10BagsProduce = this.week10BagsProduce },
    week10WoodProduce() { localStorage.week10WoodProduce = this.week10WoodProduce },
    week10PackProduce() { localStorage.week10PackProduce = this.week10PackProduce },
    week11BagsPeople() { localStorage.week11BagsPeople = this.week11BagsPeople },
    week11WoodPeople() { localStorage.week11WoodPeople = this.week11WoodPeople },
    week11PackPeople() { localStorage.week11PackPeople = this.week11PackPeople },
    week11BagsProduce() { localStorage.week11BagsProduce = this.week11BagsProduce },
    week11WoodProduce() { localStorage.week11WoodProduce = this.week11WoodProduce },
    week11PackProduce() { localStorage.week11PackProduce = this.week11PackProduce },
    week12BagsPeople() { localStorage.week12BagsPeople = this.week12BagsPeople },
    week12WoodPeople() { localStorage.week12WoodPeople = this.week12WoodPeople },
    week12PackPeople() { localStorage.week12PackPeople = this.week12PackPeople },
    week12BagsProduce() { localStorage.week12BagsProduce = this.week12BagsProduce },
    week12WoodProduce() { localStorage.week12WoodProduce = this.week12WoodProduce },
    week12PackProduce() { localStorage.week12PackProduce = this.week12PackProduce },
    week13BagsPeople() { localStorage.week13BagsPeople = this.week13BagsPeople },
    week13WoodPeople() { localStorage.week13WoodPeople = this.week13WoodPeople },
    week13PackPeople() { localStorage.week13PackPeople = this.week13PackPeople },
    week13BagsProduce() { localStorage.week13BagsProduce = this.week13BagsProduce },
    week13WoodProduce() { localStorage.week13WoodProduce = this.week13WoodProduce },
    week13PackProduce() { localStorage.week13PackProduce = this.week13PackProduce },
    week14BagsPeople() { localStorage.week14BagsPeople = this.week14BagsPeople },
    week14WoodPeople() { localStorage.week14WoodPeople = this.week14WoodPeople },
    week14PackPeople() { localStorage.week14PackPeople = this.week14PackPeople },
    week14BagsProduce() { localStorage.week14BagsProduce = this.week14BagsProduce },
    week14WoodProduce() { localStorage.week14WoodProduce = this.week14WoodProduce },
    week14PackProduce() { localStorage.week14PackProduce = this.week14PackProduce },
    week15BagsPeople() { localStorage.week15BagsPeople = this.week15BagsPeople },
    week15WoodPeople() { localStorage.week15WoodPeople = this.week15WoodPeople },
    week15PackPeople() { localStorage.week15PackPeople = this.week15PackPeople },
    week15BagsProduce() { localStorage.week15BagsProduce = this.week15BagsProduce },
    week15WoodProduce() { localStorage.week15WoodProduce = this.week15WoodProduce },
    week15PackProduce() { localStorage.week15PackProduce = this.week15PackProduce },
  }
}
</script>

<style lang="scss" scoped>
$grey: #cac5c9;

table {
  background-color: $black;
  margin-bottom: 25px;
  table {
    background-color: $white;
    margin-bottom: 0px;
  }
  th, td, tr {
    background-color: $white;
    vertical-align: top;
    font-size: 20px;
    font-family: menlo;
    input {
      outline-width: 0px;
      width: 20px;
      border: 2px solid $grey;
      border-radius: 3px;
      font-size: 16px;
      font-family: monospace;
      &:focus {
        border: 2px solid $secondary-colour;
      }
    }
  }
}
</style>