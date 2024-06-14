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
<cardP4/>
<cardP5/>
</div>
</template>

<script>
import navcomp from '../components/nav.component.vue';
import cardP from '../components/cardEkko.component.vue'
import cardP2 from '../components/cardGameZone.component.vue'
import cardP3 from '../components/cardLol.component.vue'
import cardP4 from '../components/cataline.component.vue'
import cardP5 from '../components/prosel.component.vue'


export default{
    components:{
        navcomp,
        cardP,
        cardP2,
        cardP3,
        cardP4,
        cardP5
        
    },
}
</script>

<style>
@import "../styles/tech.css";
</style>