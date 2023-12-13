<template>
  <div class="aboutme">
    <h1>Sobre mim</h1>
    <p ref="typewriter">
      Me chamo Mauricio Lobo Lima, tenho 19 anos, residente de Feira De
      Santana/BA, Recém-formado no curso técnico de Desenvolvimento de Sistemas
      e atualmente cursando Superior em Análise e Desenvolvimento de Sistemas,
      sou um entusiasta apaixonado por tecnologia e programação. Ao longo da
      minha jornada acadêmica, dediquei-me intensivamente ao estudo e prática
      das mais recentes tendências e linguagens de programação, consolidando um
      sólido conhecimento na área. Estou aberto a oportunidades de estágio,
      trainee ou qualquer tipo de oportunidade que me permitam aplicar e aprimorar minhas
      habilidades em um ambiente profissional. Agradeço antecipadamente pela
      consideração e estou pronto para enfrentar novos desafios e contribuir
      para o sucesso de projetos inovadores na área de desenvolvimento de
      software.
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
