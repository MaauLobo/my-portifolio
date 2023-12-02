<template>
    <navcomp/>
<div class="header">
    <h1>Projetos</h1>
<h2>Things I’ve built so far</h2>
</div>

<div class="cardsProjects">
<cardP/>
<cardP2/>
</div>

</template>

<script>
import navcomp from '../components/nav.component.vue';
import cardP from '../components/cardEkko.component.vue'
import cardP2 from '../components/cardGameZone.component.vue'
export default{
    components:{
        navcomp,
        cardP,
        cardP2
    },
}
</script>

<style>
@import "@/styles/tech.css";
</style>