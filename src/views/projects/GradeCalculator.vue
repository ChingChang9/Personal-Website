<template>
  <div>
    <div id="topic">Grade Calculator</div>
    <div id="line"></div>
    <!-- <h1>{{ subject[] }}</h1> -->
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
      { rel: "canonical", href: "https://chingchang.netlify.com/projects/grade-calculator" }
    ]
  },
  data() {
    return {
      weightings: {

      },
      allSubjects: {
        subject: {
          unit: {
            mark: {

            }
          }
        }
      }
    };
  },
  computed() {

  },
  methods: {
    createSubject() {

    },
    createUnit() {

    },
    createMark() {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>