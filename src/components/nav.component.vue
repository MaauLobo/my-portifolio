<template>
  <nav>
    <div class="container">
      <div class="logo">
        <h1>Mau</h1>
      </div>

      <!-- Botão de menu responsivo -->
    

      <!-- Opções de navegação -->
      <div class="nav-options" :class="{ active: isMenuActive }">
        
        <router-link class="router-link" to="/">
      <font-awesome-icon icon="home" /> Home
      </router-link>

      <router-link class="router-link" to="/about">
      <font-awesome-icon icon="user" /> About
      </router-link>
      
      <router-link class="router-link" to="/projects">
        <font-awesome-icon icon="code" />Projects
      </router-link>
      
      </div>

      <div class="social-icons">
    <a href="https://github.com/MaauLobo" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a href="mailto:mauriciolobo509@gmail.com">
      <font-awesome-icon :icon="['fas', 'envelope']" />
    </a>
    <a href="https://www.linkedin.com/in/mauricio-lobo-lima-449066269/" target="_blank">
      <font-awesome-icon :icon="['fab', 'linkedin']" />
    </a>
</div>



      <div class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faHome,
  faUser,
  faCode,
  faEnvelope,
  faGithub,
  faTwitter,
  faLinkedin
);


export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  components: {
    FontAwesomeIcon,
  },

  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style>
@import "../styles/nav.css"
</style>