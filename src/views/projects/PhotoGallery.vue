<template>
  <div>
    <div id="topic">Photo Gallery</div>
    <div id="line"></div>

    <div style="margin-bottom: 10px;">Since I love nature, most of the photos I took are about nature</div>
    <div>
      Some photos were taken by my iPad mini 2 back when it wasn't broken, the others were taken
      by my iPod Touch 6
    </div>

    <div id="photos">
      <img id="loading" src="@/assets/photo-gallery/loading.gif" alt="loading" />
      <img id="photo" :src="require(`@/assets/photo-gallery/${ photos[index] }.jpg`)" alt="travel photo" />
      <div id="left-arrow" class="arrow" draggable="false" @click="previous"></div>
      <div id="right-arrow" class="arrow" draggable="false" @click="next"></div>
    </div>
    <div id="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "PhotoGallery",
  metaInfo: {
    title: "Photo Gallery",
    meta: [
      { name: "description", content: "A collection of beautiful photos I took around the world. These are taken by my iPod because I don't have any professional cameras, but they still look nice." },
      { name: "keywords", content: "photo gallery, travel, images, HD, wallpaper, landscape, nature, beautiful, mountains, outdoor" }
    ],
    link: [
      { rel: "canonical", href: "https://chingchang.netlify.com/photo-gallery" }
    ]
  },
  data() {
    return {
      photos: [],
      index: 0,
      description: ""
    };
  },
  created() {
    for (let photoReference = 1; photoReference < 42; photoReference++) {
      this.photos.push(photoReference);
    }
    this.photos = this.shuffle(this.photos);
  },
  mounted() {
    document.addEventListener("keydown", this.changePhotoWithKeys);
    this.changeDescription();
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.changePhotoWithKeys);
  },
  methods: {
    changePhotoWithKeys(event) {
      if (event.which === 37) {
        this.previous();
      } else if (event.which === 39) {
        this.next();
      }
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
      document.querySelector("#loading").style.display = "block";
      document.querySelector("#photo").style.display = "none";
      document.querySelector("#photo").addEventListener("load", this.removeLoadingGif);
      this.changeDescription();
    },
    removeLoadingGif() {
      document.querySelector("#loading").style.display = "none";
      document.querySelector("#photo").style.display = "block";
      document.querySelector("#photo").removeEventListener("load", this.removeLoadingGif);
    },
    changeDescription() {
      switch (this.photos[this.index]) {
        case 1:
          this.description = "The Trevi Fountain";
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
          this.description = "Awesome view of Taipei from Erge Mountain. The really tall building is Taipei 101, which used to be the tallest building in the world";
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
  font-size: 20px;
}
#photos {
  display: flex;
  position: relative;
  width: 100%;
  height: 67.5vmin;
  user-select: none;
  background: $primary-colour;
  margin-top: 25px;
  border-radius: 4px 4px 0 0;
  #loading, #photo {
    border: 5px solid $primary-colour;
    border-radius: 4px 4px 0 0;
  }
  #loading {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    display: none;
  }
  #photo {
    margin: auto;
    max-width: calc(100% - 10px);
    max-height: calc(100% - 10px);
  }
}
#description {
  text-align: center;
  border: 5px solid $primary-colour;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background: $white;
  font-size: 24px;
  padding: 15px 5px;
}
.arrow {
  position: absolute;
  top: calc(50% - 20px);
  cursor: pointer;
  user-select: none;
  opacity: 0.3;
  width: 40px;
  height: 40px;
  background-image: url("../../assets/icons/arrow.svg");
  background-size: contain;
  &:hover {
    opacity: 1;
  }
  &#right-arrow {
    right: 10px;
  }
  &#left-arrow {
    transform: rotateY(180deg);
    left: 10px;
  }
}
</style>