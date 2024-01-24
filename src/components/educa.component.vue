<template>
    <div class="work">
        <h1>Formação Acadêmica</h1>
        <div class="work1">
            <h2>Desenvolvimento De Sistemas - Técnico</h2> 
            <div class="company-info">
            <p>
                <font-awesome-icon :icon="['fas', 'building']" />
                SENAI
            </p>
            <p>
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                Feira De Santana
            </p>
            <p>
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                Fev 2022 - Jun 2023
            </p>

            
            <button>Completo</button>
            </div>
        </div>
        <span class="separator2"></span>
        
        <div class="work1">
            <h2>Análise e Desenvolvimento De Sistemas - Superior</h2> 
            <div class="company-info">
            <p>
                <font-awesome-icon :icon="['fas', 'building']" />
                UNIFAN
            </p>
            <p>
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                Feira De Santana
            </p>
            <p>
                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                Ago 2023
            </p>

            
            <button>Cursando</button>
            </div>
        </div>
        <span class="separator2"></span>
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
    @import "../styles/about.css";
</style>
