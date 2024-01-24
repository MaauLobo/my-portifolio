<template>
<navcomp/>
<aboutme/>
<work/>
<educa/>

</template>

<script>
import navcomp from '../components/nav.component.vue';
import aboutme from '../components/aboutme.component.vue';
import work from '../components/work.component.vue';
import educa from '../components/educa.component.vue';
export default {
    components:{
        navcomp,
        aboutme,
        work,
        educa,
    }
}
</script>

<style>
@import "../styles/about.css";
</style>