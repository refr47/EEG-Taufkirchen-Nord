<template>
    <h3 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight   mt-4 border-l-8 border-eeg-green pl-6">
        So wirst du Mitglied
    </h3>
    <div class="max-w-5xl mx-auto py-12 px-4">
    
        <div class="bg-amber-100 border border-amber-200 p-4 rounded-xl text-center">
            <h4 class="text-lg uppercase tracking-wider font-extrabold text-amber-800">
                Wichtiger Hinweis
            </h4>
            <div class="mt-1 text-2xl font-black text-amber-900 leading-tight">
                Zählpunkt / Zählernummer erforderlich!!
            </div>
            <p class="text-sm text-amber-700 mt-2 italic">
                Gilt für die Neuregistrierung bei Netz OÖ
            </p>
        </div>
        <h2 class="text-red-600"> </h2><br>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div @click="toggleStep('portal')" :class="[
                                                                                              'cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300',
                                                                                              activeStep === 'portal' ? 'border-eeg-green bg-green-50 shadow-md' : 'border-slate-100 bg-white hover:border-eeg-green/30'
                                                                                            ]">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-3xl">🌐</span>
                    <span v-if="activeStep === 'portal'" class="text-eeg-green">●</span>
                </div>
                <h4 class="font-bold text-slate-900">1. eService-Portal</h4>
                <p class="text-xs text-slate-500 mt-2">Registrierung bei Netz OÖ</p>
            </div>
            <div @click="toggleStep('beitritt')" :class="[
                                                                                              'cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300',
                                                                                              activeStep === 'beitritt' ? 'border-eeg-green bg-green-50 shadow-md' : 'border-slate-100 bg-white hover:border-eeg-green/30'
                                                                                            ]">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-3xl">✍️</span>
                </div>
                <h4 class="font-bold text-slate-900">2. Beitrittserklärung</h4>
                <p class="text-xs text-slate-500 mt-2">Formular & Anmeldung</p>
            </div>
            <div @click="toggleStep('zaehlpunkt')" :class="[
                                                                                              'cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300',
                                                                                              activeStep === 'zaehlpunkt' ? 'border-eeg-green bg-green-50 shadow-md' : 'border-slate-100 bg-white hover:border-eeg-green/30'
                                                                                            ]">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-3xl">🔢</span>
                </div>
                <h4 class="font-bold text-slate-900">Zählpunkt/Zählernummer</h4>
                <p class="text-xs text-slate-500 mt-2">Die wichtigste Nummer</p>
            </div>
        </div>
        <div class="relative overflow-hidden transition-all duration-500">
            <transition name="expand">
                <div v-if="activeStep" class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                    <div v-if="activeStep === 'portal'" class="prose prose-slate max-w-none">
                        <h3 class="text-eeg-green">Schritt 1: Das eService-Portal</h3>
                        <p>Wenn du noch keinen Zugang beim eService-Portal hast, musst du dich bei der Netz OÖ registrieren.</p>
                        <ul class="list-disc list-inside space-y-2">
                            <li>Besuche <a href="https://www.netzooe.at/" target="_blank" class="text-eeg-green hover:underline">Netz OÖ</a></li>
                            <li>Halte Kundennummer bereit</li>
                            <li>Wichtig: Zählpunkt (AT00 30xxxxxxx) und Zählernummer bereit halten (insgesamt 33(!) Stellen)"</li>
                        </ul>
                        <div class="p-4">
                            <h3 class="text-lg font-bold mb-4">Anleitung: Schritt für Schritt</h3>
                            <div class="flex space-x-4 overflow-x-auto pb-6 snap-x scrollbar-hide">
                                <StepScreenshot title="Schritt 1: Login" :src="register" />
                                <StepScreenshot title="Schritt 2: Felder ausfüllen, Benutzername und Password aufschreiben" :src="registerErkl" />
                            </div>
                        </div>
                    </div>
                    <div v-if="activeStep === 'beitritt'" class="prose prose-slate max-w-none">
                        <h3 class="text-eeg-green mb-4">Schritt 2: Beitrittserklärung</h3>
    
                        <p class="mb-6">
                            Nach der Registrierung und dem Erhalt der Zählpunkte benötigen wir die schriftliche Zustimmung für die <strong>EEG Taufkirchen/Nord</strong>.
                        </p>
    
                        <!-- Download Sektion -->
                        <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                            <div>
                                <h4 class="margin-0 text-slate-900 font-semibold">Beitrittserklärung PDF</h4>
                                <p class="text-sm text-slate-500 m-0">Bitte ausfüllen und unterschrieben retournieren.</p>
                            </div>
                            <a :href="`/downloads/eegBeitritt.pdf`" download="eegBeitritt.pdf" target="_blank" class="inline-flex items-center px-6 py-3 bg-eeg-green text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm no-underline font-medium">
                            Datei herunterladen
                        </a>
                            <div class="mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200 italic text-slate-700">
                                <strong>Ausgefülllt an folgende E-Mail
                                    Adresse senden:</strong><br>
                                office@eeg-taufkirchen-nord.at
                            </div>
                        </div>
    
                        <h4 class="text-slate-900 font-bold mb-4">Wie geht es weiter?</h4>
    
                        <div class="space-y-6">
                            <!-- Schritt A -->
                            <div class="flex gap-4">
                                <div class="flex-none w-8 h-8 bg-eeg-green text-white rounded-full flex items-center justify-center font-bold">A</div>
                                <p class="m-0">Die Energiegemeinschaft schickt dir eine <strong>Bestätigung der Anmeldung</strong> und informiert Netz OÖ über die Anmeldung zu einer EEG. </p>
                            </div>
    
                            <!-- Schritt B -->
                            <div class="flex gap-4">
                                <div class="flex-none w-8 h-8 bg-eeg-green text-white rounded-full flex items-center justify-center font-bold">B</div>
                                <div>
                                    <p class="font-semibold text-slate-900 m-0">Freigabe im Portal:</p>
                                    <p class="mt-1 leading-relaxed text-justify">
                                        Sobald diese Anfrage im System von Netz OÖ eingegangen ist - dies kann einige Tage dauern -  erscheint diese im <strong>Netz OÖ eService-Portal</strong> unter dem Menüpunkt „Datenfreigaben“. Dort mußt du aktiv auf den blauen Haken oder „Bestätigen“ klicken.
                                    </p>
    
                                    <!-- Wichtiger Hinweis innerhalb von Schritt B -->
                                    <div class="mt-3 p-3 bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-sm">
                                        <strong>Wichtig:</strong> Achte darauf, dass für <strong>beide Zählpunkte</strong> (Verbrauch & Einspeisung) die Viertelstundenwerte aktiviert sind.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200 italic text-slate-700">
                            <strong>Zusammengefasst:</strong> Du mußt nicht selbst aktiv „melden“. Die EEG stellt die
                            Anfrage, welche Du lediglich im Portal der Netz OÖ bestätigen mußt.
                        </div>
                      
                        
                    </div>
                    <div v-if="activeStep === 'zaehlpunkt'" class="prose prose-slate max-w-none">
                        <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4 mb-6 shadow-sm">
                            <h2 class="text-blue-900 font-bold text-lg flex items-center gap-2 mb-2">
                                <!-- Icon für "Wichtig" -->
                                Wichtig: Zähler vs. Zählpunkt
                            </h2>
                            <p class="text-gray-700 leading-relaxed mb-3">
                                Ein physischer Zähler (9-stellig) kann <strong>zwei Zählpunkte</strong> (33-stellig) haben – einen für den Bezug (Verbrauch) und einen für die Lieferung (Einspeisung).
                            </p>
                            <ul class="space-y-2 text-gray-700">
                                <li class="flex gap-2">
                                    <span class="font-bold text-blue-600">a)</span>
                                    <span><strong>Verbraucher:</strong> Zählpunkt in der Stromrechnung des Lieferanten angeführt.</span>
                                </li>
                                <li class="flex gap-2">
                                    <span class="font-bold text-blue-600">b)</span>
                                    <span><strong>Einspeiser:</strong> Zählpunkt in der Bestätigung der OeMAG (oder des abnehmenden Energieunternehmens) angeführt.</span>
                                </li>
                            </ul>
                        </div>
                        <!-- Sektion: Zählpunkt -->
                        <section class="mb-10">
                            <h3 class="text-eeg-green flex items-center gap-2">
                                <span class="p-1 bg-eeg-green/10 rounded">1</span> Der Zählpunkt
                            </h3>
                            <p>Der Zählpunkt ist 33-stellig und beginnt immer mit <strong>AT00...</strong></p>
                            <div class="flex items-start gap-3 p-4 my-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg shadow-sm">
                                <span class="text-2xl mt-1">⚠️</span>
                                <div>
                                    <p class="text-amber-900 font-bold m-0">Wichtiger Hinweis</p>
                                    <p class="text-amber-800 m-0 leading-tight text-sm">
                                        Fehler beim Ablesen des Zählpunktes sind recht umständlich zu beheben! Bitte prüfe die Zahlen doppelt.
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-4 mt-4">
                                <div class="w-60 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                                    <StepScreenshot title="Zählpunkt (für Strombezug) ist in der Stromrechnung des jeweiligen Stromlieferanten angeführt" :src="zaehlpunkt" />
                                </div>
                                <div class="flex-1  overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                                    <article class="prose prose-slate lg:prose-xl mx-auto text-justify">
                                        <h2>Beispiel Zählpunkt OeMAG</h2>
                                        <div @click="isOpen = !isOpen" class="cursor-pointer transition-all duration-300">
                                            <p :class="[
                                                            'text-justify text-gray-700 leading-relaxed',
                                                            isOpen ? '' : 'line-clamp-3'
                                                          ]">
                                                hiermit bestätigen wir Ihnen gerne, dass ab dem Stichtag 01.01.2026 der von Ihrer Ökostromanlage (Zählpunktbezeichnung <strong>AT00300000000000000000000NNNNNNNNN)</strong> in das öffentliche Netz abgegebene
                                                Strom von der OeMAG abgenommen wird. Die Vergütung der Einspeisemengen Ihrer Ökostromanlage kann somit ab diesem Zeitpunkt erfolgen. Ihre Daten AnlagenbetreiberIn: "NAME" Zählpunktbezeichnung: <strong>AT00300000000000000000000NNNNNNNNN</strong>                                            Vertragsnummer: FA00NNN Standort: 4775 Taufkirchen an der Pram Strasse Die Messung und Übermittlung der Einspeisemengen erfolgt ausschließlich durch den Netzbetreiber. Diese Daten werden, je nach Ihrer Vereinbarung
                                                mit dem Netzbetreiber, vor Ort abgelesen oder digital über Ihren Smart Meter ausgelesen und an die OeMAG zur Abrechnung übermittelt.
                                            </p>
                                            <!-- Button-Indikator -->
                                            <button class="mt-2 text-sm font-semibold text-blue-600 hover:text-blue-800">
                                                        {{ isOpen ? 'Weniger anzeigen' : 'Mehr anzeigen...' }}
                                                      </button>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>
                        <!-- Sektion: Zählernummer -->
                        <section class="border-t pt-8">
                            <h3 class="text-eeg-green flex items-center gap-2">
                                <span class="p-1 bg-eeg-green/10 rounded">2</span> Die Zählernummer
                            </h3>
                            <p>Die Zählernummer ist eine <strong>9-stellige Nummer</strong> und kann vom Smart Meter abgelesen werden. Häufig wird diese als <span class="italic text-gray-600">INV.NR</span> gekennzeichnet.</p>
                            <!-- Bildgröße begrenzt auf max. 400px (max-w-sm) -->${publicPath}
                            <div class="flex flex-wrap gap-4 mt-4">
                                <!-- Erstes Bild (Großansicht/Kontext) -->
                                <div class="w-48 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                                    <StepScreenshot title="Smart Meter Gesamt" :src="zaehlernummerGross" />
                                </div>
                                <!-- Zweites Bild (Detailansicht) -->
                                <div class="h-100 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                                    <StepScreenshot title="Zählernummer Detail" :src="zaehlernummer" />
                                </div>
                            </div>
                        </section>
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
import {
    ref,
    onMounted
} from 'vue';
import StepScreenshot from '../components/StepScreenshot.vue';
import register from '../assets/netzOE/netzOEReg.png';
import registerErkl from '../assets/netzOE/netzOEReg1.png'
import zaehlpunkt from '../assets/netzOE/zaehlpunkt.png'
import zaehlernummer from '../assets/netzOE/zaehlerNummer.jpg'
import zaehlernummerGross from '../assets/netzOE/zaehlerNummerGross.jpg'
//const publicPath = import.meta.env.BASE_URL;

const activeStep = ref(null);
const isOpen = ref(false);
const toggleStep = (step) => {
    // Wenn der gleiche Step nochmal geklickt wird, schließe ihn (null)
    activeStep.value = activeStep.value === step ? null : step;


};
onMounted(() => {
    console.log('KontaktView wurde erfolgreich gemountet!')
})
</script>


<style scoped>
.expand-enter-active,
.expand-leave-active {
    transition: all 0.4s ease-in-out;
    max-height: 500px;
}

.expand-enter-from,
.expand-leave-to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
}
</style>