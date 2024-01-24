<template>
  <div >
<navcomp />
    <!-- Sobre mim -->
    <about/>
    <!-- Minhas Tecnologias -->
    <tech/>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import navcomp from '../components/nav.component.vue';
import about from '../components/about.component.vue';
import tech from '../components/tech.component.vue'
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
  components: {
    FontAwesomeIcon,
    navcomp,
    about,
    tech,
  },
};
</script>

<style>
@import "../styles/style.css";
</style>
