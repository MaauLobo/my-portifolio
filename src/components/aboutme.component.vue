<template>
    <div class="aboutme">
      <h1>Sobre mim</h1>
      <p ref="typewriter">
        Aluno recém formado no curso técnico de Desenvolvimento de Sistemas , 
        Apaixonado por tecnologia e por programação. Em
busca de oportunidade na área de desenvolvimento de software e tecnologia
no geral, afim de poder fazer uso de todo seu aprendizado adquirido.
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
  