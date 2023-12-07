<template>
<navcomp/>
<aboutme/>

</template>

<script>
import navcomp from '../components/nav.component.vue';
import aboutme from '../components/aboutme.component.vue';
export default {
    components:{
        navcomp,
        aboutme,
    }
}
</script>

<style>
@import "@/styles/about.css";
</style>