<template>
    <navcomp/>
<div class="header">
    <h1>Projetos</h1>
<h2>Projetos Concluidos/Desenvolvimento</h2>
</div>

<div class="cardsProjects">
<cardP/>
<cardP2/>
<cardP3/>
</div>
</template>

<script>
import navcomp from '../components/nav.component.vue';
import cardP from '../components/cardEkko.component.vue'
import cardP2 from '../components/cardGameZone.component.vue'
import cardP3 from '../components/cardLol.component.vue'

export default{
    components:{
        navcomp,
        cardP,
        cardP2,
        cardP3,
        
    },
}
</script>

<style>
@import "@/styles/tech.css";
</style>