<template>
  <div>
    <div id="topic">Contact</div>
    <div id="line"></div>
    <form id="gform" method="post" action="https://script.google.com/macros/s/AKfycbzWpIiAJ9APKSxFUFc8M1b2zr6Kuhu4QLXCNTfp4neVZfqFcz8/exec">
      <div class="row">
        <input type="text" name="Name" placeholder="Name" required />
        <input type="text" name="Email" placeholder="Email" required />
      </div>
      <textarea type="text" name="Message" placeholder="Message" autocomplete="off" required />
      <input class="button" type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  metaInfo: {
    title: "Contact",
    meta: [
      { name: "description", content: "Want a website? Collaborate with me? Be friends? Suggest ideas? Please feel free to contact me for anything, I will always be glad to see people on my website." },
      { name: "keywords", content: "Ching Chang, contact, personal website, email, social media, web developer, freelance, full stack, profile, Alberta" }
    ],
    link: [
      { rel: "canonical", href: "https://www.chingchang.dev/contact" }
    ]
  }
}
</script>

<style lang="scss" scoped>
form {
  max-width: 1000px;
  width: 100%;
  input, textarea {
    font-size: 24px;
    padding: 10px;
    border: 3px $grey solid;
    border-radius: 5px;
    margin-bottom: 25px;
    transition-duration: 0.3s;
    outline-width: 0;
    &:focus {
      border-color: $secondary-colour;
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    input {
      min-width: 174px;
      max-width: 374px;
      width: 40%;
    }
  }
  textarea {
    resize: none;
    width: calc(100% - 26px);
    height: 250px;
  }
  .button {
    border: none;
    width: 120px;
    height: 50px;
    background-color: $primary-colour;
    box-shadow: 1px 1px 5px $black;
    transition-duration: 0s;
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
    &:active {
      transform: translate(1px, 1px);
      box-shadow: 0 0 5px $black;
    }
  }
}

@media(max-width: 480px) {
  form {
    .row {
      flex-direction: column;
      input {
        min-width: inherit;
        max-width: inherit;
        width: calc(100% - 26px);
      }
    }
  }
}
</style>