<template>
  <div>
    <div id="topic">Quotes</div>
    <div id="line"></div>

    <div id="quote-container" @click="nextQuote">
      <div>{{ quotes[index] }}</div>
    </div>

    <div id="button-container">
      <div id="save-button" @click="save">Save Image</div>
      <a ref="download" download="quote.jpg"></a>
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "Quotes",
  data() {
    return {
      quotes: [
        "No one cares about you, they only care about themselves -Mr. Johnson",
        "If you cannot change the circumstance, change your perspective -Mr. Johnson",
        "Every day, wake up and question yourself, \"am I a better person than who I was yesterday?\" -Mr. Johnson",
        "Suspicion always haunts the guilty mind -William Shakespeare",
        "I am in blood, stepped in so far that, should I wade no more. Returning were as tedious as go o’er -William Shakespeare",
        "You can put on a soccer jersey, doesn’t mean that you’re a soccer player -Mr. Johnson",
        "One important key to success is self-confidence. An important key to self-confidence is preparation -Arthur Ashe",
        "If you are going to be weird, be confident about it -Anonymous",
        "You don’t love someone because they are perfect. You love them in spite of the fact that they aren’t -Anonymous",
        "Stay strong and make them wonder how you are still smiling -Anonymous",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment -Ralph Waldo Emerson",
        "Those who mind don't matter. Those who matter don't mind -Bernard M. Baruch",
        "Don't cry because it's over. Smile because it happened -Dr. Seuss",
        "You cannot always have happiness, but you can always give happiness -Anonymous",
        "It may not be your fault, but it is your responsibility -Mr. Johnson",
        "Counting other people’s sins doesn’t make you a saint -Anonymous",
        "A fool thinks himself to be wise, but a wise man knows himself to be a fool -William Shakespeare",
        "'Tis safer to be that which we destroy. Than by destruction dwell in doubtful joy -William Shakespeare",
        "Rudeness is a weak man’s imitation of strength -Eric Hoffer",
        "The most common way people give up their power is by thinking they don’t have any -Alice Walker",
        "When you are happy, you enjoy the music. When you are sad, you understand the lyrics -Anonymous",
        "People will forget what you said. People will forget what you did. But they will never forget how you made them feel -Maya Angelou",
        "Stop being afraid of what could go wrong and think about what could go right",
        "Look for something positive in each day, even if some days you have to look a little harder -Anonymous",
        "With great power comes great responsibility -Stan Lee",
        "A rose by any other name would smell as sweet -William Shakespeare",
        "Don't cry over someone who wouldn't cry over you -Lauren Conrad",
        "Judge a man by his questions rather than his answers -Voltaire",
        "To do two things at once is to do neither -Publilius Syrus",
        "Hurt me with the truth. But never comfort me with a lie -Anonymous",
        "The kindest hearts have felt the most pain -Anonymous",
        "The best thing a human being can do is to help another human being know more -Charlie Munger",
        "It’s not how well you play the game, it’s deciding what game you want to play -Kwame Appiah",
        "I wasted time, and now doth time waste me -William Shakespeare",
        "The best way to get things done is to begin -Anonymous",
        "The key is not to prioritize your schedule, but to schedule your priority -Stephen Covey",
        "We don’t have time to wait, we are in IB -Mr. Johnson",
        "Your time is limited, so don’t waste it living someone else’s life -Steve Jobs",
        "Done is better than perfect -Sheryl Sandberg"
      ],
      index: 0
    };
  },
  created() {
    this.index = Math.floor(Math.random() * this.quotes.length);
  },
  methods: {
    nextQuote() {
      let lastIndex = this.index;
      while (this.index === lastIndex) {
        this.index = Math.floor(Math.random() * this.quotes.length);
      }
    },
    save() {
      html2canvas(document.querySelector("#quote-container")).then((canvas) => {
        this.$refs.download.href = canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
        this.$refs.download.click();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#quote-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 2px solid $black;
  border-radius: 5px;
  height: 40vh;
  padding: 0px 25px;
  background-image: url("../assets/quotes/wallpaper.jpg");
  background-size: 100% 100%;
  &:hover {
    filter: brightness(80%);
  }
  div {
    font-size: calc(18px + 1vw);
    text-shadow: 0px 0px 8px $primary-colour, 0px 0px 8px $secondary-colour, 0px 0px 8px $black;
    user-select: none;
    text-align: center;
    width: 100%;
    color: $white;
  }
}
#button-container {
  text-align: center;
  #save-button {
    user-select: none;
    background-color: $secondary-colour;
    display: inline-block;
    color: $white;
    font-size: 24px;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 25px;
    margin-bottom: 25px;
    cursor: pointer;
    box-shadow: 1px 1px 6px $black;
    &:hover {
      filter: brightness(80%);
    }
  }
}
</style>