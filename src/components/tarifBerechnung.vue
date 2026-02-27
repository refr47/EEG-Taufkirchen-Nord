<template>
    <div class="max-w-5xl mx-auto my-12 px-4">
        <div class="overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl bg-white">
    
            <div class="bg-slate-900 p-6 text-center text-white">
                <h3 class="font-black uppercase tracking-widest text-lg">Detaillierter Kostenvergleich</h3>
                <p class="text-slate-400 text-[10px] mt-1 uppercase font-bold tracking-widest">Transparente Aufschlüsselung pro kWh</p>
            </div>
    
            <div class="overflow-x-auto">
                <table class="w-full border-collapse text-left">
                    <thead>
                        <tr class="bg-slate-50 border-b border-slate-100">
                            <th class="p-6 text-[10px] font-black uppercase text-slate-400">Posten</th>
                            <th class="p-6 text-[10px] font-black uppercase text-slate-400 text-center">Energieversorger (Netto)</th>
                            <th class="p-6 text-[10px] font-black uppercase text-slate-400 text-center ">MwSt</th>
                            <th class="p-6 text-[10px] font-black uppercase text-slate-400 text-center">Btto</th>
                            <th class="p-6 text-[10px] font-black uppercase text-slate-400 text-center">EEG (Netto)</th>
                            <th class="p-6 text-[10px] font-black uppercase text-slate-400 text-center">MWSt</th>
                            <th class="p-6 text-[10px] font-black uppercase text-slate-400 text-center">Btto</th>
                        </tr>
                    </thead>
    
                    <tbody class="divide-y divide-slate-50 font-medium text-slate-700">
                        <tr>
                            <td class="p-6">
                                <span class="block font-bold text-slate-800">Energiepreis</span>
                                <span class="text-[10px] text-slate-400 uppercase font-black italic">Reiner Arbeitspreis, festgelegt vom Anbieter</span>
                            </td>
                            <td class="p-6 text-center text-slate-500 italic">{{ pricing.energie.arbeitspreis }} </td>
                            <td class="p-6 text-center text-slate-500 italic">
                                {{pricing.energie.arbeitspreis * 0.2 }}
                            </td>
                            <td class="p-6 text-center text-slate-500 italic">
                                {{pricing.energie.arbeitspreis * 1.2 }}
                            </td>
                            <td class="p-6 text-center text-slate-500 italic">
                                {{ pricing.bezug.netto }}
                            </td>
                            <td class="p-6 text-center text-slate-500 italic">
                                0.00
                            </td>
                            <td class="p-6 text-center text-slate-500 italic">
                                {{ pricing.bezug.netto }}
                            </td>
                        </tr>
    
                        <tr>
                            <td class="p-6">
                                <span class="block font-bold text-slate-800">Netzentgelt</span>
                                <span class="text-[10px] text-slate-400 uppercase font-black italic">Netz-Ebene 6 & 7</span>
                            </td>
                            <td class="p-6 text-center text-slate-500 italic"> {{pricing.energie.netzgebuehren }} </td>
                            <td class="p-6 text-center text-slate-500 italic"> {{formatIt(pricing.energie.netzgebuehren * 0.2)}} </td>
                            <td class="p-6 text-center text-slate-500 italic"> {{formatIt(pricing.energie.netzgebuehren * 1.2)}} </td>
                            <td class="p-6 text-center text-slate-500 italic"> {{ formatIt((1-pricing.energie.netzentgelt) * pricing.energie.netzgebuehren ) }} </td>
                            <td class="p-6 text-center text-slate-500 italic"> {{ formatIt((1-pricing.energie.netzentgelt) * pricing.energie.netzgebuehren * 0.2) }} </td>
                            <td class="p-6 text-center text-slate-500 italic"> {{ formatIt((1-pricing.energie.netzentgelt) * pricing.energie.netzgebuehren * 1.2) }} </td>
    
                        </tr>
    
                        <tr>
                            <td class="p-6">
                                <span class="block font-bold text-slate-800">Abgaben & Steuern</span>
                                <span class="text-[10px] text-slate-400 uppercase font-black italic">Elektrizitätsabgabe etc.</span>
                            </td>
                            <td class="p-6 text-center text-slate-500 italic">{{pricing.energie.abgabenSteuern}} </td>
                            <td class="p-6 text-center text-slate-500 italic"> {{formatIt(pricing.energie.abgabenSteuern * 0.2)}} </td>
                            <td class="p-6 text-center text-slate-500 italic"> {{formatIt(pricing.energie.abgabenSteuern * 1.2)}} </td>
                             <td class="p-6 text-center text-slate-500 italic">{{pricing.energie.aufgabenSteuernEEG}} </td>
                              <td class="p-6 text-center text-slate-500 italic">{{pricing.energie.aufgabenSteuernEEG*0.2}} </td>
                               <td class="p-6 text-center text-slate-500 italic">{{pricing.energie.aufgabenSteuernEEG*1.2}} </td>
                        </tr>
    
                        <tr class="bg-slate-900">
                            <td class="p-6 text-white font-black uppercase tracking-widest text-sm">Gesamtpreis</td>
                             <td class="p-6 text-center text-slate-400 font-bold line-through decoration-red-500/50"></td>
                             <td class="p-6 text-center text-slate-400 font-bold line-through decoration-red-500/50"></td>
                            <td class="p-6 text-2xl text-center text-slate-400 font-bold line-through decoration-red-500/50">{{ getGesamt() }}</td>
                             <td class="p-6 text-center text-slate-400 font-bold line-through decoration-red-500/50"></td>
                            <td class="p-6 text-center text-slate-400 font-bold line-through decoration-red-500/50"></td>
                            <td class="p-6 text-center bg-eeg-green">
                                <span class="text-2xl font-black text-white">{{ getGesamtEEG() }} ct/kWh</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
            <div class="p-4 bg-slate-50 text-[9px] text-slate-400 text-center uppercase tracking-[0.2em] font-bold border-t border-slate-100">
                Hinweis: Die Energie-Lieferung der EEG unterliegen der Kleinunternehmerregelung gemäß § 6 Abs. 1 Z 27 UStG und es wird keine Umsatzsteuer erhoben und ausgewiesen.<br> Die Netzentgelte unterliegen der gesetzlichen MwSt des Netzbetreibers.
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { pricing } from '@/siteConfig';

const formatIt = (preis) => {
    if (preis === undefined || preis === null) return "0.00";
    return Number(preis).toFixed(2);
};
const getGesamt = () => {
    const gesamt = Number(pricing.energie.arbeitspreis) + Number(pricing.energie.netzgebuehren) + Number(pricing.energie.abgabenSteuern);
    return formatIt(gesamt*1.2);
};
const getGesamtEEG = () => {
    const gesamt = Number(pricing.bezug.netto) + Number(pricing.energie.aufgabenSteuernEEG) + Number(pricing.energie.netzentgelt * pricing.energie.netzgebuehren);
    return formatIt(gesamt*1.2);
};
</script>