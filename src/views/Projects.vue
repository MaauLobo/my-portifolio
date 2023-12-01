<template>
    <navcomp/>
<div class="header">
    <h1>Projetos</h1>
<h2>Things I’ve built so far</h2>
</div>

<div class="cardsProjects">
<div class="cardP">
<div class="imageP"></div>
<h1>Ekko Page</h1>
<div class="descP">
    <h2>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content </h2>
</div>
</div>
</div>

</template>

<script>
import navcomp from '../components/nav.component.vue';
export default{
    components:{
        navcomp,
    },
}
</script>

<style>
@import "@/styles/tech.css";
</style>