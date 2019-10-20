<template>
  <div>
    <div id="topic">Grade Calculator</div>
    <div id="line"></div>
    <div class="subject-cards">
      <div v-for="(subjectData, subject) in allSubjects" class="card">
        <div class="title">{{ subject }}</div>
        <div class="settings"></div>
        <div v-for="assessment in subjectData.assessments" class="assessment">
          <select v-model="assessment.unit">
            <option v-for="(unitWeightings, unit) in subjectData.weightings.unit">{{ unit }}</option>
          </select>
          <select v-model="assessment.type">
            <option v-for="(typeWeighting, type) in subjectData.weightings.type">{{ type }}</option>
          </select>
          <div><input v-model="assessment.mark" /> %</div>
        </div>
        <div class="assessment add-field" @click="createAssessment(subject)">
          <span>+</span>
        </div>
      </div>
      <div class="card">
        <div class="add-field" @click="promptCreateSubject">+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GradeCalculator",
  metaInfo: {
    title: "Grade Calculator",
    meta: [
      { name: "description", content: "" },
      { name: "keywords", content: "" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/projects/grade-calculator" }
    ]
  },
  data() {
    return {
      allSubjects: {}
    };
  },
  watch: {
    allSubjects() {
      localStorage.allSubjects = this.allSubjects;
    }
  },
  mounted() {
    this.createSubject("History", {unit1: 6, unit2: 37}, {quiz: 4, exam: 53});
    this.createSubject("Chemistry", {unit1: 6, unit2: 37}, {quiz: 4, exam: 53});
    this.createSubject("Math", {unit1: 6, unit2: 37}, {quiz: 4, exam: 53});
  },
  methods: {
    promptCreateSubject() {

    },
    createSubject(title, unitWeightings, typeWeightings) {
      this.$set(this.allSubjects, title, {
        weightings: {
          unit: unitWeightings,
          type: typeWeightings
        },
        assessments: []
      });
    },
    createAssessment(title) {
      this.allSubjects[title].assessments.push({
        unit: Object.keys(this.allSubjects[title].weightings.unit)[0],
        type: Object.keys(this.allSubjects[title].weightings.type)[0]
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.subject-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 15px;
  .card {
    width: 400px;
    border: 3px solid $black;
    border-radius: 3px;
    margin-bottom: 30px;
    position: relative;
    .title {
      font-size: 36px;
      padding-bottom: 10px;
      border-bottom: 3px solid $secondary-colour;
      margin: 10px 0 10px 2.5%;
    }
    .settings {
      background-image: url("../../assets/icons/settings.svg");
      width: 25px;
      height: 25px;
      cursor: pointer;
      position: absolute;
      top: 5px;
      right: 5px;
    }
    .assessment {
      display: flex;
      justify-content: space-between;
      width: 95%;
      margin-bottom: 10px;
      margin-left: 2.5%;
      select, input {
        font-size: 18px;
        border: 2px solid $grey;
        &:focus {
          border-color: $secondary-colour;
        }
      }
      input {
        width: 30px;
        height: 20px;
        border-radius: 3px;
        padding: 5px;
        text-align: right;
      }
    }
  }
  .add-field {
    user-select: none;
    border-radius: 4px;
    background-color: $primary-colour;
    padding: 5px 0;
    cursor: pointer;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      color: $black;
      font-size: 22px;
      border: 2px solid $black;
      width: 21px;
      height: 21px;
      border-radius: 50%;
    }
  }
}
</style>