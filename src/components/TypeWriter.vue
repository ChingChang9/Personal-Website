<template>
  <div>
    {{ typed }}
    <div class="status-bar">{{ status }}</div>
    <br v-if="finished" />
  </div>
</template>

<script>
export default {
  name: "TypeWriter",
  props: {
    text: {
      type: String,
      default: "You forgot to enter the text!"
    },
    load: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      textLength: Number,
      slicePlace: 1,
      intervalID: Number,
      typed: "",
      finished: false,
      status: "",
      loaded: false
    };
  },
  watch: {
    finished() {
      if (this.finished && this.load < 0) {
        this.$emit("triggered", 150);
      }
    },
    loaded() {
      if (this.loaded) {
        this.$emit("triggered", 1500);
      }
    }
  },
  mounted() {
    this.intervalID = setInterval(function() {
      if (this.slicePlace <= this.text.length) {
        this.typed = this.text.slice(0, this.slicePlace);
        this.slicePlace++;
      } else {
        clearInterval(this.intervalID);
        this.finished = true;
        if (this.load >= 0) {
          setTimeout(function() {
            this.intervalID = setInterval(function() {
              setTimeout(function() {
                if (this.status.length < 35) {
                  this.status += ".";
                } else {
                  clearInterval(this.intervalID);
                  this.loaded = true;
                }
              }.bind(this), Math.floor(Math.random() * this.load) * 1000);
            }.bind(this), 20);
          }.bind(this), 250);
        }
      }
    }.bind(this), 20);
  },
  beforeDestroy() {
    clearInterval(this.intervalID);
  }
}
</script>

<style scoped>
.status-bar {
  font-size: 14px;
  background-color: #20c20e;
  position: absolute;
  left: 45vw;
  margin-top: -20px;
}
</style>