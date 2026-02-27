<template>
  <div class="max-w-4xl mx-auto my-12 px-4">
    <div class="space-y-4">
      <div 
        v-for="(item, index) in faqs" 
        :key="item.id || index" 
        class="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:border-eeg-green shadow-sm"
        :class="{ 'ring-2 ring-eeg-green/20 border-eeg-green': openIndex === index }"
      >
        <button 
          @click="toggleFaq(index)" 
          class="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors group"
        >
          <span class="text-lg font-bold text-slate-800 group-hover:text-eeg-green transition-colors">
            {{ item.frage }}
          </span>
          <span 
            class="ml-4 text-eeg-green transition-transform duration-300 shrink-0"
            :class="{ 'rotate-180': openIndex === index }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        <div 
          v-show="openIndex === index" 
          class="px-6 pb-6 animate-fadeIn"
        >
          <div class="h-px bg-slate-100 mb-6"></div>
          
          <div class="text-slate-600 leading-relaxed prose prose-slate max-w-none" v-html="item.antwort"></div>

          <div v-if="item.bildURL" class="mt-6">
            <div 
              @click="activeBildId = (activeBildId === item.id ? null : item.id)"
              :class="[
                activeBildId === item.id ? 'max-w-full' : 'max-w-[180px] cursor-zoom-in',
                'relative overflow-hidden rounded-xl border shadow-sm transition-all duration-500'
              ]"
            >
              <img :src="item.bildURL" class="w-full h-auto" alt="Info Bild" />
              <div v-if="activeBildId !== item.id" class="absolute inset-0 bg-black/5 flex items-end p-2 opacity-0 hover:opacity-100 transition-opacity">
                <span class="bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold shadow-sm">VERGRÖSSERN 🔍</span>
              </div>
            </div>
          </div>

          <div v-if="item.videoID" class="mt-6">
            <div 
              @click="activeVideoId = (activeVideoId === item.id ? null : item.id)"
              :class="[
                activeVideoId === item.id ? 'max-w-full' : 'max-w-xs grayscale',
                'relative overflow-hidden rounded-xl border shadow-lg transition-all duration-500 cursor-pointer'
              ]"
            >
              <div class="aspect-video">
                <iframe 
                  class="w-full h-full" 
                  :src="'https://www.youtube-nocookie.com/embed/' + item.videoID" 
                  frameborder="0" 
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <button 
              v-if="activeVideoId === item.id" 
              @click="activeVideoId = null"
              class="mt-3 text-xs font-black text-eeg-green uppercase underline"
            >
              Video verkleinern
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
    ref,
    onMounted
} from 'vue';
import eegImage from '@/assets/eegPrinzip.png';
let activeVideoId = ref(null);
let activeBildId = ref(null);
const openIndex = ref(null);
const faqs = ref( [{
        id: 1,
        frage: "Was ist eine Energiegemeinschaft?",
        antwort: `
            <p>
            Der Grundgedanke einer <strong>EEG</strong> ist die Gewinnung von Energie aus 
            <em>erneuerbaren Quellen</em> und deren <em>regionale Verteilung</em>.
            </p>
            <p>
            Die EEG <strong>Taufkirchen/Nord</strong> erzeugt gemeinsam mit ihren Mitgliedern Strom aus Sonnenenergie. 
            Dieser wird innerhalb der Gemeinschaft – also zwischen <strong>Erzeugern</strong> und <strong>Verbrauchern</strong> – 
            bedarfsgerecht verteilt.
            </p>
            `
    },
    {
        id: 2,
        frage: "Wie funktioniert eine Energiegemeinschaft?",
        antwort: `
            <p>
            Erneuerbare-Energie-Gemeinschaften sind auf den <strong>Nahebereich</strong> beschränkt. 
            Alle Teilnehmer:innen befinden sich im selben <strong>Niederspannungsnetz</strong> 
            und werden vom selben Transformator versorgt.
            </p>
            <div class="mt-4">
            <table class="eeg-table">
            <tr>
            <td class="col-left">
            Die Mitglieder mit PV-Anlagen liefern ihren Strom zuerst an die EEG.
            Wird dieser gerade benötigt, wird er innerhalb der Gemeinschaft verteilt.
            Bei Überschuss wird er an den jeweiligen <strong>Primärabnehmer</strong> verkauft.
            </td>
            <td class="col-center">
            <img src="${eegImage}" />
            </td>
            <td class="col-right">
            Benötigt ein Mitglied Strom, wird zuerst die EEG genutzt.
            Reicht dieser nicht aus, wird die fehlende Energie automatisch
            vom <strong>Primärversorger</strong> bereitgestellt.
            </td>
            </tr>
            </table>
            </div>
            `
    },
    {
        id: 3,
        frage: "Wo liegt der Vorteil einer Mitgliedschaft?",
        antwort: `
            <p>
            Der Strompreis setzt sich (2026) aus drei Hauptbestandteilen zusammen:
            </p>
            <ul class="list-disc list-inside space-y-1">
            <li><strong>Energiepreis</strong> – ca. 42 %</li>
            <li><strong>Netzentgelte</strong> – ca. 25 - 28 %</li>
            <li><strong>Steuern & Abgaben</strong> – ca. 32-34 %</li>
            </ul>
            <p class="mt-3 font-semibold">Deine Vorteile in der EEG:</p>
            <ul class="list-disc list-inside space-y-1">
            <li>Energiepreis orientiert sich an der <a href="https://www.oem-ag.at" target="_blank" class="text-eeg-green font-semibold">OeMAG</a></li>
            <li>Netzentgelte reduzieren sich gesetzlich um <strong>57 %</strong></li>
            <li>Für EEG-Strom fallen <strong>kaum staatliche Abgaben</strong> an</li>
            </ul>
            `
    },
    {
        id: 4,
        frage: "Wie kann ich die Stromkosten beeinflussen?",
        antwort: `
            <p>
            Der wichtigste Hebel für deine Stromkosten ist <strong>der Zeitpunkt deines Verbrauchs</strong>.
            </p>
            <p>
            Wenn viel Sonne scheint, produziert die EEG besonders viel günstigen Strom.
            Genau dann solltest du möglichst viele deiner Stromverbraucher nutzen.
            </p>
            <ul class="list-disc list-inside space-y-1">
            <li>Waschmaschine, Trockner oder Geschirrspüler tagsüber starten</li>
            <li>E-Auto oder E-Bike bei Sonnenschein laden</li>
            <li>Warmwasser und Wärmepumpe mittags betreiben</li>
            <li>Klimaanlage oder Pooltechnik gezielt tagsüber nutzen</li>
            </ul>
            <p class="mt-3 font-semibold">
            Das bringt dir:
            </p>
            <ul class="list-disc list-inside space-y-1">
            <li>mehr günstigen EEG-Strom</li>
            <li>weniger Bezug vom teureren Anbieter</li>
            <li>mehr regionale Nutzung erneuerbarer Energie</li>
            </ul>
            <p class="mt-3 font-semibold text-eeg-green">
            Je besser du deinen Verbrauch an die Sonnenzeiten anpasst,
            desto mehr sparst du.
            </p>
            `
    },
    {
        id: 5,
        frage: "Woher weiß ich, wann viel Strom erzeugt wird?",
        antwort: `
            <p>
            Im <strong>Online-Portal</strong> siehst du in Echtzeit, wie viel Strom gerade in der EEG produziert wird.
            </p>
            <p>
            So kannst du genau erkennen, wann es sich lohnt, Geräte einzuschalten oder dein Fahrzeug zu laden.
            </p>
            <p>
            Für technisch versierte Mitglieder steht zusätzlich eine <strong>API-Schnittstelle</strong> zur Verfügung.
            </p>
            `
    },
    {
        id: 6,
        frage: "Wie wird die Abrechnung durchgeführt?",
        antwort: `
            <p>
            Die Abrechnung erfolgt <strong>quartalsweise</strong>.
            </p>
            <ul class="list-disc list-inside space-y-1">
            <li>Offene Beträge werden per <strong>Bankeinzug</strong> abgebucht</li>
            <li>Guthaben werden per <strong>Überweisung</strong> ausbezahlt</li>
            </ul>
            <p>
            Alle Details findest du jederzeit in deinem <strong>Online-Portal</strong>.
            </p>
            <p>
            Die gesamte Kommunikation erfolgt <strong>ausschließlich digital</strong>.
            Es werden <strong>keine Briefe</strong> versendet.
            </p>
            <p class="font-semibold text-eeg-green">
            Transparent, papierlos und jederzeit online verfügbar.
            </p>
            `
    },
    {
        id: 7,
        frage: "Habe ich Verpflichtungen als Mitglied?",
        antwort: `
            <p>Nein – es bestehen <strong>keine Verpflichtungen</strong>.</p>
            <p>Du kannst jederzeit aus der Mitgliedschaft austreten.</p>
            `
    },
    {
        id: 8,
        frage: "Kann ich bei mehreren EEGs Mitglied sein?",
        antwort: `
            <p>
            Ja. Gesetzlich sind bis zu <strong>5 Energiegemeinschaften</strong> erlaubt.
            </p>
            <p>
            Du gibst einfach an, welcher Anteil deines Stroms über welche EEG laufen soll.
            </p>
            `
    },
    {
        id: 9,
        frage: "Welche Kosten fallen an?",
        antwort: `
            <p>
            Es wird ein <strong>Mitgliedsbeitrag von € 1.00 pro Quartal</strong> eingehoben.
            </p>
            <p>
            Dieser deckt laufende Kosten wie Plattform, Abrechnung und Kontoführung.
            </p>
            <p>
            Alle Einnahmen und Ausgaben werden transparent dargestellt.
            Überschüsse werden an die Mitglieder ausbezahlt.
            </p>
            `
    },
    {
        id: 10,
        frage: "Was ändert eine Mitgliedschaft bei den bestehenden Verträgen mit meinem Stromanbieter?",
        antwort: `
            <p>
            Es ändert sich <strong>nichts</strong> an deinen bestehenden Verträgen mit deinem Stromanbieter.
            Du kannst weiterhin deinen Stromanbieter frei wählen und wechseln. Die EEG ist eine Ergänzung zu deinem bestehenden Vertrag, kein Ersatz.
            </p>
            <br>
            <p>
          Die <strong>reuzierten Netzgebühren</strong> werden weiterhin über deinen Energieversorger in der Monats- oder Jahresabrechnung ausgewiesen und dort automatisch korrekt verrechnet. Du musst dich um nichts kümmern.
            </p> `   
    },
    {
        id: 11,
        frage: "Ich habe keine PV-Anlage. Wäre die EEG Taufkirchen/Nord auch etwas für mich?",
        antwort: `
            <p>
           Auch für Haushalte, die <strong>keine</strong> PV-Anlage haben (Platzgründe, keine Investition geplant,…), ist die EEG <strong>Taufkirchen/Nord</strong> interessant,
            </p>
            <br>
            <p>
          Es kann Strom in Zeiten, in denen Überschuss besteht, <strong>günstig</strong> bezogen werden kann. So nutzt du auch nachhaltigen, regional erzeugten Strom .
            </p> `   
    },
    {
        id: 12,
        frage: "Was wäre ideal?",
        antwort: `
            <p>
            Ideal wäre das Betreiben eines <strong>Akkus</strong> mit entsprechender Kapaziät durch die EEG Taufkirchen/Nord.
            </p>
            <br>
            <p>
          Dies müsste jedoch die EEG Taufkirchen/Nord selbst organisieren, finanzieren und betreiben. Es gibt aktuell keine Pläne oder Ressourcen, um dies umzusetzen.
            </p> `   
    }
])
const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
// 4. Methoden werden als einfache Funktionen geschrieben
/* const toggleVideoSize = (id) => {
    activeVideoId.value = (activeVideoId.value === id) ? null : id;
    console.log("Video Fokus auf ID:", activeVideoId.value);
};
const toggleBildSize = (id) => {
    activeBildId.value = (activeBildId.value === id) ? null : id;
}; */
// 5. Lifecycle Hooks
onMounted(() => {
    console.log("INFO VIEW GEMOUNTED (Setup)");
});
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
:deep(.custom-list) {
    list-style-type: '►';
    /* Dein gewünschtes Präfix */
    padding-left: 80px;
    /* Großzügige Einrückung für den langen Präfix */
    margin: 1rem 0;
}

/* Optional: Abstand zwischen dem 'Hier ' und dem Text optimieren */

:deep(.custom-list li) {
    padding-left: 10px;
}

td {
    padding: 10px;
    border: 1px solid #eee;
    /* optional für die Struktur */
}

/* Die Tabelle darf den Inhalt nicht erzwingen, wenn das Bild groß sein soll */

:deep(.eeg-table) {
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;
    /* 'auto' statt 'fixed' erlaubt der Mitte, breiter zu werden */
}

/* Mittlere Spalte bekommt 50% der Breite */

:deep(.eeg-table td.col-center) {
    width: 50%;
    text-align: center;
}

/* Seitliche Spalten bekommen je 25% */

:deep(.eeg-table td.col-left),
:deep(.eeg-table td.col-right) {
    width: 25%;
    vertical-align: middle;
}

/* Das Bild darf so groß sein wie die Zelle, aber nicht größer als das Original */

:deep(.eeg-table img) {
    width: 100%;
    max-width: 740px;
    /* Deine Originalbreite */
    height: auto;
    display: block;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
}

/* MOBILE ANSICHT (Responsive) */

@media (max-width: 600px) {
    :deep(.eeg-table tr) {
        display: flex;
        flex-direction: column;
        /* Stapelt die Zellen untereinander */
    }
    :deep(.eeg-table td) {
        width: 100% !important;
        text-align: center;
        /* Auf dem Handy alles zentriert besser */
        padding: 5px 0;
    }
}
</style>
