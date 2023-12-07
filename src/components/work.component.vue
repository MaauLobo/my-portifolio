<template>
    <div class="work">
        <h1>Experiências Profissionais</h1>
        <div class="work1">
            <h2>Suporte de Software</h2> 
            <div class="company-info">
            <p>
                <font-awesome-icon :icon="['fas', 'building']" />
                P7GO
            </p>
            <p>
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                Feira De Santana
            </p>
            <p>
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                Abr 2022 - Fev 2023
            </p>

            
            <button>Efetivo</button>
            </div>
        </div>
        <span class="separator"></span>
    </div>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { fas } from '@fortawesome/free-solid-svg-icons';

    library.add(fas);

    export default {
        components: {
            FontAwesomeIcon,
        },
    };
</script>

<style>
    @import "@/styles/about.css";
</style>
