<template>
  <main>
    <router-view />
  </main>
  <backtotop />
</template>

<script>
import backtotop from '@/components/backtotop.component.vue';

export default {
  components: {
    backtotop,
  },
};
</script>
