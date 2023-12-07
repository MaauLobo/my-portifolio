<template>
<navcomp/>
<aboutme/>
<work/>

</template>

<script>
import navcomp from '../components/nav.component.vue';
import aboutme from '../components/aboutme.component.vue';
import work from '../components/work.component.vue';
export default {
    components:{
        navcomp,
        aboutme,
        work,
    }
}
</script>

<style>
@import "@/styles/about.css";
</style>