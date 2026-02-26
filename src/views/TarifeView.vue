<template>
  <div class="py-12 px-4 max-w-5xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-black text-slate-800 uppercase tracking-tight">Unser Tarif</h2>
      <div class="h-1.5 w-24 bg-eeg-green mx-auto mt-4 rounded-full"></div>
      <p class="mt-6 text-slate-600 max-w-2xl mx-auto">
        Transparente Preise für die Region. Als Mitglied der <b>EEG Taufkirchen/Nord</b> profitierst du von stabilen Konditionen und sparst zusätzlich bei den Netzkosten.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <div v-for="(tarif, index) in tarife" :key="index" 
           class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow">
        <div class="bg-slate-50 p-8 border-b border-gray-100 text-center">
          <h3 class="text-sm font-black text-eeg-green uppercase tracking-widest">{{ tarif.name }}</h3>
          <div class="mt-4 flex justify-center items-baseline">
            <span class="text-5xl font-black text-slate-800">{{ tarif.preis }}</span>
            <span class="ml-1 text-slate-500 font-bold">Cent/kWh</span>
          </div>
          <p class="text-xs text-slate-400 mt-2 italic">* exkl. MwSt. & Netzentgelte</p>
        </div>
        
        <div class="p-8">
          <ul class="space-y-4">
            <li v-for="(vorteil, i) in tarif.details" :key="i" class="flex items-start">
              <svg class="h-5 w-5 text-eeg-green mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-slate-600 text-sm" v-html="vorteil"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-eeg-green/10 border-2 border-eeg-green/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
      <div class="bg-eeg-green text-white p-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div class="flex-grow">
        <h4 class="font-bold text-slate-800">Dein lokaler Vorteil</h4>
        <p class="text-sm text-slate-600">
          Durch den Bezug innerhalb der EEG sparst du bis zu <b>28% der Netzentgelte</b> (Arbeitspreis Netz), da der Strom nicht durch das überregionale Netz fließen muss.
        </p>
      </div>
      <router-link to="/mitglied-werden" class="whitespace-nowrap bg-eeg-green text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-md">
        Jetzt beitreten
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TarifView',
  data() {
    return {
      tarife: [
        {
          name: "Bezugstarif",
          preis: "12,50",
          details: [
            "Günstiger <b>Regionalstrom</b>",
            "Keine versteckten Gebühren",
            "Reduzierte Netzentgelte",
            "Grundgebühr: 2,00 € / Monat"
          ]
        },
        {
          name: "Einspeisetarif",
          preis: "8,00",
          details: [
            "Faire Vergütung für Überschuss",
            "Direkte Abrechnung",
            "Unterstützung der Gemeinschaft",
            "Keine Mindestmenge erforderlich"
          ]
        }
      ]
    }
  }
}
</script>