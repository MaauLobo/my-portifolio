<template>
    <div class="aboutme">
      <h1>Sobre mim</h1>
      <p ref="typewriter">
        The Generator App is an online tool that helps you to export ready-made
        templates ready to work as your future website. It helps you to combine
        slides, panels, and other components and export it as a set of static
        files: HTML/CSS/JS.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.typewriterEffect();
    },
    methods: {
      typewriterEffect() {
        const element = this.$refs.typewriter;
        const text = element.innerText;
        element.innerText = "";
  
        let i = 0;
        const addCharacter = () => {
          element.innerHTML += text[i];
          i++;
  
          if (i < text.length) {
            setTimeout(addCharacter, 20);
          }
        };
  
        addCharacter();
      },
    },
  };
  </script>
  
  <style>
  @import "@/styles/about.css";
  </style>
  