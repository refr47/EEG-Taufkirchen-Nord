<template>
    <div>
        <h3 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight mb-10  mt-4 border-l-8 border-eeg-green pl-6">
            Transparente Preisgestaltung
        </h3>
        <div class="bg-transparent min-h-screen">
    
            <section class="py-16 px-4  border-b border-slate-100">
                <div class="max-w-5xl mx-auto text-center">
    
    
                    <p class="text-base font-bold text-slate-700 max-w-xl mx-auto leading-relaxed">
                        Durch die Selbstbestimmung innerhalb der EEG Taufkirchen/Nord wird der Tarif monatlich angepasst und orientiert sich an den Preisvorgaben der OeMAG.
                    </p>
                </div>
                <p class="text-center text-base font-bold text-slate-400 mt-4">
                    Gültig ab: {{ pricing.tarife.gueltigAb }}
                </p>
            </section>
    
            <section class="py-12 px-4">
                <div class="max-w-6xl mx-auto">
                    <div class="grid lg:grid-cols-2 gap-8 items-stretch">
    
                        <div class="group relative bg-white rounded-[2rem] overflow-hidden shadow-md transition-all hover:shadow-2xl border border-slate-100 flex flex-col">
                            <div class="bg-eeg-green p-6 text-center">
                                <span class="text-white font-black uppercase tracking-widest text-sm">Bezugstarif</span>
                            </div>
    
                            <div class="p-8 md:p-10 flex-grow">
                                <h3 class="text-2xl font-black text-slate-800 mb-4 uppercase">Regional beziehen</h3>
                                <p class="text-slate-500 text-base mb-8">Strom der EEG Taufkirchen/Nord</p>
    
                                <div class="flex items-baseline mb-8">
                                    <span class="text-5xl font-black text-slate-900 tracking-tighter">{{ pricing.bezug.netto }}</span>
                                    <div class="ml-3">
                                        <span class="block text-xl font-black text-slate-400">ct/kWh</span>
                                        <span class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Netto</span>
                                    </div>
                                </div>
    
                                <ul class="space-y-4 mb-10">
                                    <li v-for="item in featuresBezug" :key="item" class="flex items-center text-md font-bold text-slate-700">
                                        <span class="w-6 h-6 bg-green-50 text-eeg-green rounded-full flex items-center justify-center mr-3 text-xs">✓</span> {{ item }}
                                    </li>
                                </ul>
                            </div>
    
                            <div class="p-8 bg-slate-50 border-t border-slate-100 mb-7">
                                <router-link to="/mitglied-werden" class="block w-full text-center py-4 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest hover:bg-eeg-green transition-all shadow-lg">
                                    Jetzt Anmelden
                                </router-link>
                            </div>
                            <p class="mt-2 text-[13px] leading-relaxed text-slate-400 italic text-center px-4">
                                Hinweis: Aufgrund der Anwendung der Kleinunternehmerregelung gemäß § 6 Abs. 1 Z 27 UStG wird keine Umsatzsteuer erhoben und ausgewiesen.
                            </p>
                        </div>
    
                        <div class="group relative bg-white rounded-[2rem] overflow-hidden shadow-md transition-all hover:shadow-2xl border border-slate-100 flex flex-col">
                            <div class="bg-blue-600 p-6 text-center">
                                <span class="text-white font-black uppercase tracking-widest text-sm">Einspeisetarif</span> /div>
    
                                <div class="p-8 md:p-10 flex-grow">
                                    <h3 class="text-2xl font-black text-slate-800 mb-4 uppercase">Regional liefern</h3>
                                    <p class="text-slate-500 text-base mb-8">Verkaufe deinen überschüssigen Strom fair innerhalb der EEG.</p>
    
                                    <div class="flex items-baseline mb-8">
                                        <span class="text-5xl font-black text-slate-800 tracking-tighter">{{ pricing.einspeisung.netto }}</span>
                                        <div class="ml-3">
                   import { pricing } from '@/siteConfig';                         <span class="block text-xl font-black text-slate-400">ct/kWh</span>
                                            <span class="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vergütung</span>
                                        </div>
                                    </div>
    
                                    <ul class="space-y-4 mb-10">
                                        <li v-for="item in featuresEinspeisung" :key="item" class="flex items-center text-md font-bold text-slate-700">
                                            <span class="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-3 text-xs">✓</span> {{ item }}
                                        </li>
                                    </ul>
                                </div>
    
                                <div class="p-8 bg-slate-50 border-t border-slate-100 mb-20">
                                    <router-link to="/kontakt" class="block w-full text-center py-4 border-2 border-slate-800 text-slate-800 rounded-xl font-black uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all">
                                        Anlage anmelden
                                    </router-link>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </section>
            <div class="mt-8 p-6 bg-slate-50/50 rounded-2xl border border-slate-200/60 text-sm leading-relaxed text-slate-600 italic">
                <h4 class="not-italic font-black uppercase tracking-widest text-[10px] text-slate-400 mb-4">Wichtige Hinweise zur Abrechnung</h4>
    
                <ul class="space-y-4">
                    <li class="flex gap-3">
                        <span class="text-eeg-green font-bold">*)</span>
                        <p>Der **Preis je kWh** bezieht sich auf die reinen Energiekosten. Netzentgelte, Steuern oder sonstige Abgaben werden separat von deinem jeweiligen Energieversorger festgelegt.</p>
                    </li>
    
                    <li class="flex gap-3">
                        <span class="text-eeg-green font-bold">*)</span>
                        <p>Der **EEG-Bezugspreis** wird monatlich von der Energiegemeinschaft Taufkirchen/Nord festgelegt und orientiert sich am aktuellen Marktpreis der **OeMAG**.</p>
                    </li>
    
                    <li class="flex gap-3">
                        <span class="text-eeg-green font-bold">*)</span>
                        <p>Sämtliche **Netzentgelte** - auch für jenen Strom, der innerhalb der EEG verbraucht wird, werden von der Netz OÖ direkt an deinen Energielieferanten verrechnet. Dieser reicht diese an den Endenkunden weiter.</p>
                    </li>
                </ul>
            </div>
            <tarifeBerechnung />
            </div>
        </div>
</template>

<script setup>
import tarifeBerechnung from '../components/tarifBerechnung.vue';
import { pricing } from '@/siteConfig';


// Features für die Listen
const featuresBezug = [
    'Reduzierte Netzentgelte ',
    'Stark reduzierte Steuern/Abgaben',
    '100% Ökostrom',
    'Keine Mindestvertragslaufzeit',
    'Direkte Quartalsabrechnung'
];

const featuresEinspeisung = [
    'Über Marktpreis-Vergütung',
    'Abnahmegarantie für Überschuss',
    'Förderung der lokalen Energiewende',
    'Einfacher Wechselprozess'
];
</script>