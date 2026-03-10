<template>
    <div id="app" class="min-h-screen  flex flex-col">
        <header class="fixed top-0 left-0 w-full z-[100] bg-white shadow-xl">
    
            <div class="absolute inset-0 z-0 pointer-events-none">
                <img src="./assets/headerBG.jpeg" class="w-full h-full object-cover opacity-10" />
            </div>
    
            <div class="relative z-10">
                <div class="flex items-center justify-between px-8 pt-4 pb-2">
    
                    <div class="flex items-center space-x-4">
                        <img src="@/assets/logo.png" class="h-16 w-auto" />
                        <div class="border-l-2 border-eeg-green pl-4">
                            <h1 class="text-2xl font-black text-slate-800 leading-none">EEG Taufkirchen/Nord</h1>
                            <p class="text-sm font-bold text-eeg-green tracking-widest uppercase">Lokale Energiegemeinschaft</p>
    
                            <nav class="hidden md:block mt-3">
                                <ul class="flex space-x-6 font-bold text-xs uppercase text-slate-600">
                                    <li>
                                        <router-link to="/" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/info" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1"> EEG auf einen Blick</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/mitglied-werden" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1">Mitglied werden</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/tarif" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1">Tarif</router-link>
                                    </li>
                                    <!-- Dieser Punkt erscheint nur, wenn ergieingeloggt -->
                                    <router-link v-if="isLoggedIn" to="/energie" class="font-bold text-eeg-green">
                                        Energie
                                    </router-link>
                                    <li>
                                        <router-link to="/verein" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1">Verein</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/kontakt" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1">Impressum</router-link>
                                    </li>
                                     <li>
                                        <router-link to="/datenschutz" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1">Datenschutz</router-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
    
                    <div class="flex items-center space-x-16">
                        <div class="hidden lg:block text-right">
                            <p class="text-[10px] uppercase font-bold text-slate-400 leading-none">Mitglieder</p>
                            <p class="text-xl font-black text-eeg-green">{{ pricing.organisation.anzahlMitglieder }}</p>
                        </div>
    
                        <!-- <button @click="showMap = !showMap" class="hidden md:block bg-eeg-green text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-green-700 shadow-sm transition-all">
                                            {{ showMap ? 'Einzugsgebiet schließen' : 'Einzugsgebiet' }}
                                        </button> -->
                        <MapModal :isOpen="showMap" :imageSrc="trafoPath" title="Alle grün eingefärbten Objekte!!" @close="showMap = false" />
    
                        <button @click="toggleMenu" class="md:hidden p-2 text-slate-800 text-2xl">
                                            {{ isMenuOpen ? '✕' : '☰' }}
                                        </button>
    
                        <button @click="toggleLogin" :class="[
                                'hidden md:block px-5 py-2 rounded-full text-xs font-bold shadow-sm transition-all border-2 border-eeg-green',
                                isLoggedIn 
                                    ? 'bg-white text-eeg-green hover:bg-slate-50' 
                                    : 'bg-eeg-green text-white hover:bg-green-700'
                            ]">
                            
                                            {{ isLoggedIn ? 'Angemeldet' : 'Anmelden' }}
                                        </button>
    
    
    
                    </div>
                </div>
    
                <nav v-show="isMenuOpen" class="md:hidden bg-white/95 backdrop-blur-md border-t p-6 shadow-2xl overflow-y-auto max-h-[80vh]">
                    <ul class="flex flex-col space-y-5 font-bold uppercase text-slate-700">
                        <li>
                            <router-link to="/" @click="closeMenu" class="block w-full">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/info" @click="closeMenu" class="block w-full">EEG auf einen Blick</router-link>
                        </li>
                        <li>
                            <router-link to="/mitglied-werden" @click="closeMenu" class="block w-full">Mitglied werden</router-link>
                        </li>
                        <li>
                            <router-link to="/tarif" @click="closeMenu" class="block w-full">Tarif</router-link>
                        </li>
                        <li v-if="isLoggedIn">
                            <router-link to="/energie" @click="closeMenu" class="text-eeg-green block w-full">Energie</router-link>
                        </li>
                        <li>
                            <router-link to="/verein" @click="closeMenu" class="block w-full">Verein</router-link>
                        </li>
                        <li>
                            <router-link to="/kontakt" @click="closeMenu" class="block w-full">Impressum</router-link>
                        </li>
                        <li>
                            <router-link to="/datenschutz" @click="closeMenu" class="block w-full">Datenschutz</router-link>
                        </li>
    
                        <hr class="border-gray-100" />
    
                        <div class="flex flex-col space-y-4 pt-2">
                            <div class="flex justify-between items-center px-2">
                                <span class="text-[10px] text-slate-400 uppercase tracking-widest">Mitglieder</span>
                                <span class="text-eeg-green font-black">1</span>
                            </div>
    
                            <button @click="showMap = !showMap; closeMenu()" class="w-full bg-slate-100 text-slate-700 py-3 rounded-xl text-sm font-bold active:bg-slate-200">
                        {{ showMap ? 'Einzugsgebiet schließen' : 'Einzugsgebiet Karte' }}
                    </button>
    
                            <button @click="toggleLogin(); closeMenu()" :class="[
                        'w-full py-3 rounded-xl text-sm font-bold transition-all shadow-sm',
                        isLoggedIn ? 'bg-white text-eeg-green border-2 border-eeg-green' : 'bg-eeg-green text-white'
                    ]">
                        {{ isLoggedIn ? 'Konto Abmelden' : 'Anmelden' }}
                    </button>
                        </div>
                    </ul>
                </nav>
            </div>
    
        </header>
    
    
        <main class="pt-32 flex-grow container mx-auto px-4">
            <div class="fixed inset-0 -z-50 w-full h-full pointer-events-none">
                <img src="./assets/trafo/trafo.png" class="w-full h-full object-cover opacity-10" />
    
            </div>
            <!-- <p class="bg-red-500 text-white">AB HIER BEGINNT DIE ROUTER-VIEW</p> -->
            <router-view></router-view>
        </main>
       <footer class="bg-slate-800 text-white py-8 mt-12">
    <div class="container mx-auto px-4 text-center">
        <!-- Haupt-Copyright -->
        <div class="text-sm mb-3">
            &copy; {{ new Date().getFullYear() }} EEG Taufkirchen/Nord. Alle Rechte vorbehalten.
        </div>

        <!-- EU-Slogan -->
        <div class="flex items-center justify-center space-x-1.5 text-xs text-slate-400">
            <span>Entwickelt & mit</span>
            <svg class="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001z" />
            </svg>
            <span>im EU-Raum gehostet</span>
        </div>
    </div>
</footer>
    
    </div>
</template>

<script setup>
import {
    ref,
    watch,

} from 'vue';
import {
    useRoute
} from 'vue-router';
import MapModal from './components/MapModal.vue';
import trafoPath from '@/assets/trafo5002.png';
import { pricing } from '@/siteConfig';
//import { pricing } from '@/siteConfig';
//import bgImage from '@/assets/trafo/trafo.png';

// State (Reaktive Variablen)
let isMenuOpen = ref(false);
let showMap = ref(false);
// Neu: Login Status
let isLoggedIn = ref(false);

/* onst backgroundStyle = computed(() => {
  return {
    // Sättigung und Helligkeit
    filter: `saturate(${pricing.saturation}) brightness(${pricing.brightness})`,
    WebkitFilter: `saturate(${pricing.saturation}) brightness(${pricing.brightness})`,
    
    // Größe / Zoom
    // scale(1.1) vergrößert das Bild leicht, damit bei Filtern keine Ränder entstehen
    transform: `scale(${pricing.scale})`,
    
    // Performance-Optimierung (wichtig bei Filtern!)
    willChange: 'filter',
    transition: 'filter 0.5s ease-in-out'
  };
}); */


// Simulation eines Login-Vorgangs
// Die Funktion, die aufgerufen werden soll
const toggleLogin = () => {
    console.log("Login Status wird geändert...");
    isLoggedIn.value = !isLoggedIn.value;
    // Hier könnte später stehen: if(isLoggedIn.value) { router.push('/dashboard') }
};

// Hilfsfunktionen
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

// Route-Watcher (schließt das Menü bei Navigation)
const route = useRoute();
watch(() => route.path, () => {
    closeMenu();
});
</script>

<style>
body {
    background-color: transparent !important;
}

/* Hier nur falls nötig globale Stile, am besten leer lassen */

.text-eeg-green {
    color: #16a34a;
}

/* Falls deine Tailwind-Config die Farbe nicht kennt */

.border-eeg-green {
    border-color: #16a34a;
}
</style>
