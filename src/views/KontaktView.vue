<template>
    <h3 class="text-2xl md:text-3xl font-black text-slate-800 leading-tight mb-12 border-l-8 border-eeg-green pl-6">
        Bei offenen Fragen, Anregungen oder Interesse .....
    </h3>
    <div class="max-w-6xl mx-auto p-6">
    
    
        <div class="flex flex-col md:flex-row gap-12 items-start">
    
            <div class="w-full md:w-1/3 lg:w-1/4">
                <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[450px]">
                    <img :src="trafo" class="w-full h-full object-cover" :style="{ transform: `scale(${trafoSettings.scale})` }" alt="Trafo Station" />
                </div>
            </div>
    
            <div class="w-full md:w-2/3 lg:w-3/4 space-y-8 py-4">
                <div class="grid grid-cols-1 gap-8">
    
                    <div class="flex items-center space-x-5 group">
                        <div class="bg-eeg-green/10 p-4 rounded-2xl group-hover:bg-eeg-green group-hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                        </div>
                        <div>
                            <p class="text-xs uppercase font-black tracking-widest text-slate-400">Adresse</p>
                            <p class="text-normal text-slate-700">EEG Taufkirchen/Nord <br>{{ pricing.organisation.adresse }}</p>
                        </div>
                    </div>
    
                    <div class="flex items-center space-x-5 group">
                        <div class="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                        </div>
                        <div>
                            <p class="text-normal uppercase font-black tracking-widest text-slate-400">E-Mail</p>
                            <a :href="`mailto:${pricing.organisation.email}`" class="text-normal   hover:underline">
                                           {{ pricing.organisation.email }}
                                        </a>
                        </div>
                    </div>
    
                    <div class="flex items-center space-x-5 group">
                        <div class="bg-slate-100 p-4 rounded-2xl group-hover:bg-slate-800 group-hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                        </div>
                        <div>
                            <p class="text-xs uppercase font-black tracking-widest text-slate-400">ZVR-Zahl</p>
                            <p class="text-normal font-mono font-bold text-slate-600 tracking-tighter">{{ pricing.organisation.zvr }}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-5 group">
                        <div class="bg-blue-50 p-4 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
                        </div>
                        <div>
                            <p class="text-normal uppercase font-black tracking-widest text-slate-400">Verrechnungssoftware</p>
                            <a :href="`${pricing.organisation.softwareLink}`" target="_blank" class="text-normal   hover:underline">
                                           {{ pricing.organisation.software }}
                                        </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-5 group">
                        <div class="bg-slate-100 p-4 rounded-2xl group-hover:bg-slate-800 group-hover:text-white transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M2.25 21h19.5m-18-18v14.25M21 3v14.25M3.75 6.75h16.5M3.75 10.5h16.5M9.75 14.25c0 .621.504 1.125 1.125 1.125s1.125-.504 1.125-1.125v-1.125a3.375 3.375 0 00-3.375-3.375c-.621 0-1.125.504-1.125 1.125v1.125a3.375 3.375 0 003.375 3.375zm0 0v1.125c0 .621.504 1.125 1.125 1.125s1.125-.504 1.125-1.125v-1.125M6.75 6.75v3.75m0-3.75a.75.75 0 01.75-.75h.75m1.5 0h.75a.75.75 0 01.75.75m0 3.75v3.75m3-7.5v3.75m0-3.75a.75.75 0 01.75-.75h.75m1.5 0h.75a.75.75 0 01.75.75m0 3.75v3.75m3-7.5v3.75m0-3.75a.75.75 0 01.75-.75h.75m1.5 0h.75a.75.75 0 01.75.75m0 3.75v3.75" 
          />
        </svg>
                        </div>
                        <div>
                            <p class="text-xs uppercase font-black tracking-widest text-slate-400">Bankverbindung</p>
                            <p class="text-normal  font-mono text-slate-600 tracking-tighter">{{ pricing.organisation.bank}}</p>
                            <p class="text-normal font-mono text-slate-600 tracking-tighter">Konto: {{ pricing.organisation.konto}}</p>
                            <p class="text-normal font-mono text-slate-600 tracking-tighter">IBAN: {{ pricing.organisation.iban}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="mt-2 border-t border-slate-200/60 pb-8 text-slate-500">
        <div class="max-w-6xl mx-auto px-6">
    
            <div class="flex flex-col items-end space-y-1">
    
                <div class="flex items-center space-x-6 bg-slate-50 px-4  rounded-full border border-slate-100 w-fit">
                    <span class="text-[10px] uppercase tracking-widest font-bold text-slate-400">Powered by</span>
                    <div class="flex items-center gap-1.5">
                        <svg class="h-4 w-4 text-[#42b883]" viewBox="0 0 128 128">
                      <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z"/>
                      <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
                    </svg>
                        <span class="text-sm font-bold text-slate-700">Vue.js</span>
                    </div>
                </div>
    
                <div class="text-right">
                    <p class="font-medium text-slate-700">
                        © {{ currentYear }} EEG Taufkirchen/Nord
                    </p>
                    <p class="text-xs  text-slate-500 text-sm py-1">
                        Design & Development by <a href="https://at.linkedin.com/in/franz-reitinger-1949a54b" target="_blank" rel="noopener noreferrer" class="hover:text-eeg-green transition-colors cursor-default hover:underline">Franz Reitinger</a>
                    </p>
                </div>
    
            </div>
    
            <div class="mt-4 flex justify-end space-x-6 text-[11px] uppercase tracking-widest font-semibold text-slate-400">
    
                <router-link to="/datenschutz" class="hover:text-eeg-green">Datenschutz</router-link>
            </div>
    
        </div>
    </footer>
</template>

<script setup>
import trafo from '@/assets/trafo/trafo.png';
import { pricing } from '@/siteConfig';
const trafoSettings = {
    scale: 1.1, // 1.1 = 110% (leichter Zoom)
    brightness: 1.05,
    saturation: 0.5
};
</script>



/*  Bei Fragen, Anregungen oder Interesse an einer Mitgliedschaft stehen wir Ihnen gerne zur Verfügung. Kontaktieren Sie uns über die folgenden Kanäle: