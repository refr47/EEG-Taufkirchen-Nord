<template>
  <div class="max-w-5xl mx-auto py-12 px-4">
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div 
        @click="toggleStep('portal')"
        :class="[
          'cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300',
          activeStep === 'portal' ? 'border-eeg-green bg-green-50 shadow-md' : 'border-slate-100 bg-white hover:border-eeg-green/30'
        ]"
      >
        <div class="flex items-center justify-between mb-4">
          <span class="text-3xl">🌐</span>
          <span v-if="activeStep === 'portal'" class="text-eeg-green">●</span>
        </div>
        <h4 class="font-bold text-slate-900">1. eService-Portal</h4>
        <p class="text-xs text-slate-500 mt-2">Registrierung bei Netz OÖ</p>
      </div>

      <div 
        @click="toggleStep('beitritt')"
        :class="[
          'cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300',
          activeStep === 'beitritt' ? 'border-eeg-green bg-green-50 shadow-md' : 'border-slate-100 bg-white hover:border-eeg-green/30'
        ]"
      >
        <div class="flex items-center justify-between mb-4">
          <span class="text-3xl">✍️</span>
        </div>
        <h4 class="font-bold text-slate-900">2. Beitrittserklärung</h4>
        <p class="text-xs text-slate-500 mt-2">Formular & Anmeldung</p>
      </div>

      <div 
        @click="toggleStep('zaehlpunkt')"
        :class="[
          'cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300',
          activeStep === 'zaehlpunkt' ? 'border-eeg-green bg-green-50 shadow-md' : 'border-slate-100 bg-white hover:border-eeg-green/30'
        ]"
      >
        <div class="flex items-center justify-between mb-4">
          <span class="text-3xl">🔢</span>
        </div>
        <h4 class="font-bold text-slate-900">Der Zählpunkt</h4>
        <p class="text-xs text-slate-500 mt-2">Die wichtigste Nummer</p>
      </div>
    </div>

    <div class="relative overflow-hidden transition-all duration-500">
      <transition name="expand">
        <div v-if="activeStep" class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
          
          <div v-if="activeStep === 'portal'" class="prose prose-slate max-w-none">
            <h3 class="text-eeg-green">Schritt 1: Das eService-Portal</h3>
            <p>Wenn du noch keinen Zugang beim eService-Portal hast, musst du dich bei der Netz OÖ registriert haben.</p>
            <ul class="text-sm">
              <li>Besuchen Sie <a href="#">service.netzooe.at</a></li>
              <li>Halten Sie Ihre Kundennummer bereit</li>
              <li>Aktivieren Sie die Option "Datenaustausch für Energiegemeinschaften"</li>
            </ul>
          </div>

          <div v-if="activeStep === 'beitritt'" class="prose prose-slate max-w-none">
            <h3 class="text-eeg-green">Schritt 2: Beitrittserklärung</h3>
            <p>Nachdem die technische Basis steht, benötigen wir Ihre schriftliche Zustimmung für die EEG Taufkirchen/Nord.</p>
            <div class="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
              <span class="text-sm font-medium">Beitrittserklärung_EEG.pdf</span>
              <button class="bg-eeg-green text-white px-4 py-2 rounded-lg text-xs">Download</button>
            </div>
          </div>

          <div v-if="activeStep === 'zaehlpunkt'" class="prose prose-slate max-w-none">
            <h3 class="text-eeg-green">Die Zählpunktnummer (Metering Point ID)</h3>
            <p>Der Zählpunkt ist das "Nummernschild" Ihres Stromanschlusses. Er ist 33-stellig und beginnt in Österreich immer mit <strong>AT00...</strong></p>
            <div class="bg-amber-50 border-l-4 border-amber-400 p-4 my-4">
              <p class="text-sm text-amber-800 font-medium">Wo finde ich diese Nummer?</p>
              <p class="text-xs text-amber-700">Sie finden die Nummer auf Ihrer letzten Jahresstromrechnung oder direkt auf dem Display Ihres Smart Meters (wird oft als OBIS-Code 1.8.0 oder ähnliches angezeigt).</p>
            </div>
          </div>

          <button @click="activeStep = null" class="mt-6 text-slate-400 hover:text-slate-600 text-xs flex items-center">
            <span class="mr-1">✕</span> Details schließen
          </button>
        </div>
      </transition>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeStep = ref(null);

const toggleStep = (step) => {
  // Wenn der gleiche Step nochmal geklickt wird, schließe ihn (null)
  activeStep.value = activeStep.value === step ? null : step;
};
</script>


<style scoped>
.expand-enter-active, .expand-leave-active {
  transition: all 0.4s ease-in-out;
  max-height: 500px;
}
.expand-enter-from, .expand-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
</style>