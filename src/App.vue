<template>
  <main>
    <router-view />
  </main>
  <backtotop />
</template>

<script>
import backtotop from '@/components/backtotop.component.vue';
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
  components: {
    backtotop,
  },
};
</script>
