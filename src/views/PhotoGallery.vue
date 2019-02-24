<template>
  <div>
    <div id="topic">Photo Gallery</div>
    <div id="line"></div>

    <div>Since I love nature, most of the photos I took are about nature</div>
    <div>Some photos were taken by my iPad mini 2 back when it wasn't broken, the others were taken
      by my iPod Touch 6</div>
    <img id="right-arrow" class="arrow" src="@/assets/photos/arrow.svg" draggable="false" @click="next" />
    <img id="left-arrow" class="arrow" src="@/assets/photos/arrow.svg" draggable="false" @click="previous" />

    <div id="photos">
      <img id="loading" src="@/assets/photos/loading.gif" draggable="false" />
      <img id="photo" :src="require(`@/assets/photos/${ photos[index] }.jpg`)" draggable="false" />
    </div>
    <div id="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "PhotoGallery",
  data() {
    return {
      standardRatio: 1052.78 / 529.547,
      photos: [],
      index: 0,
      description: "The best wallpaper I've ever made. Accurately describes my life. Keep it lowkey though, I ain't want to go to no therapist."
    };
  },
  created() {
    for (let photoReference = 2; photoReference < 43; photoReference++) {
      this.photos.push(photoReference);
    }
    this.photos = this.shuffle(this.photos);
    this.photos.unshift(1);
  },
  mounted() {
    document.getElementById("photos").style.height = `${ parseFloat(window.getComputedStyle(document.getElementById("photos")).width) / this.standardRatio }px`
    document.addEventListener("keydown", this.changePhotoWithKeys);
    window.addEventListener("resize", this.positionArrows);
    this.positionArrows();
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.changePhotoWithKeys);
    window.removeEventListener("resize", this.positionArrows);
  },
  methods: {
    changePhotoWithKeys(event) {
      if (event.which === 37) {
        this.previous();
      } else if (event.which === 39) {
        this.next();
      }
    },
    positionArrows() {
      document.getElementById("right-arrow").style.marginLeft = `${ parseFloat(window.getComputedStyle(document.getElementById("photos")).width) - 48 }px`;
      document.getElementById("right-arrow").style.marginTop = `${ parseFloat(window.getComputedStyle(document.getElementById("photos")).width) / 4 - 20 }px`;
      document.getElementById("left-arrow").style.marginTop = `${ parseFloat(window.getComputedStyle(document.getElementById("photos")).width) / 4 - 20 }px`;
    },
    next() {
      if (this.index === this.photos.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.changePhoto();
    },
    previous() {
      if (this.index === 0) {
        this.index = this.photos.length - 1;
      } else {
        this.index--;
      }
      this.changePhoto();
    },
    changePhoto() {
      document.getElementById("loading").style.display = "block";
      document.getElementById("photo").style.visibility = "hidden";
      document.getElementById("photo").addEventListener("load", this.resizePhoto);
      this.changeDescription();
    },
    resizePhoto() {
      if (parseFloat(window.getComputedStyle(document.getElementById("photo")).width) / parseFloat(window.getComputedStyle(document.getElementById("photo")).height) > this.standardRatio) {
        document.getElementById("photo").style.width = "calc(100% - 10px)";
        document.getElementById("photo").style.height = "auto";
        document.getElementById("photo").style.marginTop = `${ (parseFloat(window.getComputedStyle(document.getElementById("photos")).height) - parseFloat(window.getComputedStyle(document.getElementById("photo")).height)) / 2 }px`;
      } else {
        document.getElementById("photo").style.height = "calc(100% - 10px)";
        document.getElementById("photo").style.width = "auto";
        document.getElementById("photo").style.marginTop = "0px";
      }
      document.getElementById("loading").style.display = "none";
      document.getElementById("photo").style.visibility = "visible";
      document.getElementById("photo").removeEventListener("load", this.resizePhoto);
    },
    changeDescription() {
      switch (this.photos[this.index]) {
        case 1:
          this.description = "The best wallpaper I've ever made. Accurately describes my life. Keep it lowkey though, I ain't want to go to no therapist";
          break;
        case 2:
          this.description = "Above the clouds!";
          break;
        case 3:
          this.description = "Sunlight shining on the ruin of Rome";
          break;
        case 4:
          this.description = "My grandfather was a farmer, this picture reminds me of my roots";
          break;
        case 5:
          this.description = "Pink sky";
          break;
        case 6:
          this.description = "Clouds in winter are always astonishing";
          break;
        case 7:
          this.description = "Gorgeous sunrise in front of my house";
          break;
        case 8:
          this.description = "Snow in front of my house";
          break;
        case 9:
          this.description = "Back in junior high, I would shovel the snow every day after school to play ball";
          break;
        case 10:
          this.description = "Fall in Canada";
          break;
        case 11:
          this.description = "[Insert your imagination here]";
          break;
        case 12:
          this.description = "A beautiful rainbow at 7 in the morning. Taken on top of Erge mountain in Taiwan";
          break;
        case 13:
          this.description = "Awesome view of the Taipei city from Erge Mountain. The really tall building is Taipei 101, which used to be the tallest building in the world";
          break;
        case 14:
          this.description = "This type of farm land always reminds me of my childhood 😊";
          break;
        case 15:
          this.description = "Mountain on one side and sea on the other side, what else do we need to make this picture better?";
          break;
        case 16:
          this.description = "General James Wolfe";
          break;
        case 17:
          this.description = "The best time of a day is when there's no people";
          break;
        case 18:
          this.description = "A sea of clouds that can only be seen on top of Erge Mountain in Taiwan. The tall building at the center of the picture is Taipei 101";
          break;
        case 19:
          this.description = "See the line where the sky meets the clouds? It calls me!";
          break;
        case 20:
          this.description = "University of Taiwan";
          break;
        case 21:
          this.description = "A natural lake formed near my school when the ice melt in April";
          break;
        case 22:
          this.description = "This picture makes me feel relaxed";
          break;
        case 23:
          this.description = "A great place to play capture the flag";
          break;
        case 24:
          this.description = "I would love to swim with some polar bears here";
          break;
        case 25:
          this.description = "Rainbow by the waterfall!";
          break;
        case 26:
          this.description = "The most beautiful lake in Canada -Moraine Lake";
          break;
        case 27:
          this.description = "Summer time!";
          break;
        case 28:
          this.description = "Banff National Park";
          break;
        case 29:
          this.description = "The other side of Moriane Lake";
          break;
        case 30:
          this.description = "Sunset near my campsite";
          break;
        case 31:
          this.description = "Peyto Lake";
          break;
        case 32:
          this.description = "An urban area that's super close to the airport, got the luck to take a close up shot when the plane was right by the sun on a 2D viewpoint";
          break;
        case 33:
          this.description = "Venice";
          break;
        case 34:
          this.description = "The 🅱️ig 🅱️en";
          break;
        case 35:
          this.description = "A different view of London Eye";
          break;
        case 36:
          this.description = "Queen Victorial Memorial";
          break;
        case 37:
          this.description = "No description is needed for this piece of art";
          break;
        case 38:
          this.description = "Baker street";
          break;
        case 39:
          this.description = "A tavern close to Greenwich Observatory";
          break;
        case 40:
          this.description = "That contrast between the open field and that city is just 👌";
          break;
        case 41:
          this.description = "The perfect park doesn't exis...";
          break;
        case 42:
          this.description = "The Trevi Fountain";
          break;
      }
    },
    shuffle(array) {
      let length = array.length - 1;
      let randomIndex;
      while (length !== 0) {
        randomIndex = Math.floor(Math.random() * length);
        [array[length], array[randomIndex]] = [array[randomIndex], array[length]];
        length--;
      }
      return array;
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  font-size: calc(18px + 0.24vw);
  margin-bottom: 21px;
}
#loading {
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  display: none;
  border: 5px solid $orange;
  border-radius: 5px 5px 0px 0px;
}
#photos {
  text-align: center;
  width: 100%;
  user-select: none;
  background: $orange;
  margin-bottom: -5px;
  border-radius: 4px 4px 0px 0px;
  #photo {
    width: calc(100% - 10px);
    border: 5px solid $orange;
    border-radius: 4px 4px 0px 0px;
  }
}
#description {
  text-align: center;
  border: 5px solid $orange;
  border-radius: 0px 0px 4px 4px;
  background: $white;
  font-size: 25px;
  padding: 15px 5px;
  margin-bottom: 25px;
}
.arrow {
  cursor: pointer;
  user-select: none;
  opacity: 0.3;
  position: absolute;
  width: 40px;
  &:hover {
    opacity: 1;
  }
}
#left-arrow {
  transform: rotateY(180deg);
  margin-left: 8px;
}
</style>