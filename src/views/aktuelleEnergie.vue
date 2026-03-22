<template>
    <div class="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <header class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-100 pb-6">
            <div>
                <h3 class="text-3xl md:text-4xl font-black text-slate-800 leading-tight   mt-4 border-l-8 border-eeg-green pl-6">
                    Dashboard
                </h3>
                <p class="text-slate-500 text-sm italic mt-1 ml-1">Zuletzt angemeldet: {{ userData.zuletztEingeloggt }}</p>
            </div>
            <div class="flex items-center space-x-2 bg-eeg-green/5 px-4 py-2 rounded-xl border border-eeg-green/20">
                <span class="text-[10px] uppercase font-black text-eeg-green leading-none">Login-ID:</span>
                <span class="text-sm font-mono font-bold text-slate-700">{{ person.phonePrimary }}</span>
            </div>
        </header>
        <div class="flex border-b border-slate-200 space-x-8 overflow-x-auto">
            <button @click="activeTab = 'stammdaten'" :class="tabClass(activeTab === 'stammdaten')">Stammdaten</button>
            <button @click="activeTab = 'meine'" :class="tabClass(activeTab === 'meine')">Meine Energiebilanz</button>
            <button @click="activeTab = 'eeg'" :class="tabClass(activeTab === 'eeg')">EEG Energiebilanz</button>
        </div>
        <div v-if="activeTab === 'stammdaten'" class="animate-in slide-in-from-left duration-300">
            <div class="max-w-5xl space-y-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div class="space-y-6">
                        <h3 class="text-sm font-black uppercase text-slate-400 tracking-widest border-b pb-2">Persönliche Informationen</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-1">
                                <label class="form-label">Vorname</label>
                                <input v-model="person.firstName" type="text" class="form-input">
                            </div>
                            <div class="space-y-1">
                                <label class="form-label">Nachname</label>
                                <input v-model="person.lastName" type="text" class="form-input">
                            </div>
                        </div>
                        <div class="space-y-1">
                            <label class="form-label text-slate-400 italic">Telefonnummer (Login-ID - schreibgeschützt)</label>
                            <input :value="person.phonePrimary" type="text" readonly class="form-input bg-slate-100 text-slate-400 cursor-not-allowed border-dashed">
                        </div>
                        <div class="space-y-1">
                            <label class="form-label">E-Mail Adresse</label>
                            <input v-model="userData.email" type="email" class="form-input">
                        </div>
                        <div class="pt-4 space-y-4">
                            <h4 class="text-[10px] font-black uppercase text-slate-400 tracking-widest">Anschrift</h4>
                            <div class="grid grid-cols-3 gap-4">
                                <div class="col-span-2 space-y-1">
                                    <label class="form-label">Straße</label>
                                    <input v-model="person.street" type="text" class="form-input">
                                </div>
                                <div class="space-y-1">
                                    <label class="form-label">Haus-Nr.</label>
                                    <input v-model="person.houseNumber" type="text" class="form-input">
                                </div>
                            </div>
                            <div class="grid grid-cols-3 gap-4">
                                <div class="space-y-1">
                                    <label class="form-label">Tür</label>
                                    <input v-model="person.doorNumber" type="text" class="form-input">
                                </div>
                                <div class="col-span-2 space-y-1">
                                    <label class="form-label">PLZ / Ort</label>
                                    <input v-model="person.postalCode" type="text" class="form-input">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <h3 class="text-sm font-black uppercase text-slate-400 tracking-widest border-b pb-2">Abrechnung & Bank</h3>
                        <div class="space-y-1">
                            <label class="form-label">IBAN</label>
                            <input v-model="person.iban" type="text" class="form-input font-mono">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-1">
                                <label class="form-label">BIC</label>
                                <input v-model="person.bic" type="text" class="form-input uppercase">
                            </div>
                            <div class="space-y-1">
                                <label class="form-label">Kontonummer</label>
                                <input v-model="person.accountNumber" type="text" class="form-input">
                            </div>
                        </div>
                        <div class="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 italic text-xs text-slate-500">
                            <strong class="text-slate-700 block mb-1 font-black uppercase not-italic">Hinweis:</strong> Änderungen an der IBAN werden erst für den nächsten Abrechnungszyklus wirksam.
                        </div>
                    </div>
                </div>
                <div class="pt-6 border-t border-slate-100 flex justify-end">
                    <button @click="saveData" class="bg-eeg-green text-white px-10 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-lg shadow-eeg-green/20">
                      STAMMDATEN AKTUALISIEREN
                    </button>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'meine'" class="space-y-10 animate-in fade-in duration-500">
            <div class="bg-slate-800 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div class="space-y-6">
                        <div>
                            <h2 class="text-xl font-bold opacity-70 italic mb-1">{{ energiedaten.abrechnungsmonat }}</h2>
                            <p class="text-xl font-black">Messwerte</p>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="stat-card-dark">
                                <span class="stat-label">Bezug</span>
                                <span class="text-2xl font-black">{{ energiedaten.consumedPowerKw }} <small class="text-xs font-normal">kW</small></span>
                            </div>
                            <div class="stat-card-green">
                                <span class="stat-label-green text-right">Einspeisung</span>
                                <p class="text-2xl font-black text-eeg-green text-right">
                                    {{ energiedaten.eingespeistePowerKw }} <small class="text-xs font-normal">kW</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center text-center py-6 lg:py-0 border-y lg:border-y-0 lg:border-x border-white/10">
                        <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Aktueller Preis</span>
                        <div class="flex items-baseline gap-1">
                            <span class="text-5xl font-black text-eeg-green">{{ energiedaten.preisCtKw }}</span>
                            <span class="text-sm font-bold text-slate-400">ct/kW</span>
                        </div>
                    </div>
                    <div class="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col justify-center space-y-4">
                        <div class="flex justify-between items-center gap-4">
                            <span class="text-sm font-bold text-slate-400 whitespace-nowrap">Zählpunkt Bezug:</span>
                            <span class="text-sm opacity-90 font-mono tracking-tighter">{{ energiekonto.zaehlpunktBezieher }}</span>
                        </div>
                        <div class="flex justify-between items-center gap-4 pt-4 border-t border-white/10 text-eeg-green">
                            <span class="text-sm font-bold whitespace-nowrap">Zählpunkt Einspeisung:</span>
                            <span class="text-sm opacity-90 font-mono tracking-tighter">{{ energiekonto.zaehlpunktEinspeiser }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div class="lg:col-span-3 space-y-2">
                    <h3 class="text-sm font-black uppercase text-slate-400 mb-4 tracking-widest">Abrechnungs-Historie</h3>
                    <div class="hidden md:grid grid-cols-6 px-6 py-2 text-[10px] font-black text-slate-400 uppercase">
                        <span>Monat</span><span>Bezug</span><span>Einspeisung</span><span>Saldo</span><span>ct/kW</span><span class="text-right">Betrag</span>
                    </div>
                    <div v-for="m in gefilterteHistorie" :key="m.name" class="history-row grid grid-cols-1 md:grid-cols-6 items-center">
                        <span class="font-bold text-slate-800">{{ m.name }}</span>
                        <span class="text-sm">{{ m.consumedPowerKw }} kW</span>
                        <span class="text-sm text-eeg-green font-bold">{{ m.eingespeistePowerKw }} kW</span>
                        <span class="text-sm font-mono">{{ (m.eingespeistePowerKw - m.consumedPowerKw).toFixed(1) }}</span>
                        <span class="text-xs text-slate-400 italic">{{ m.preis }}</span>
                        <span class="text-right font-black" :class="calculateAmount(m) >= 0 ? 'text-eeg-green' : 'text-red-500'">
                        {{ calculateAmount(m).toFixed(2) }} €
                      </span>
                    </div>
                </div>
                <div class="space-y-4">
                    <h3 class="text-sm font-black uppercase text-slate-400 mb-4 tracking-widest text-center">Jahr</h3>
                    <div class="flex flex-col space-y-2">
                        <button v-for="jahr in verfuegbareJahre" :key="jahr" @click="gewaehltesJahr = jahr" :class="yearBtnClass(gewaehltesJahr === jahr)">{{ jahr }}</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'eeg'" class="space-y-10 animate-in fade-in duration-500">
            <div class="bg-white border-4 border-slate-800 p-8 rounded-[2.5rem] shadow-xl">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div><span class="stat-label-small">Gemeinschaft</span>
                        <p class="text-xl font-black text-slate-800">EEG Taufkirchen/Nord</p>
                    </div>
                    <div><span class="stat-label-small">Inst. Leistung</span>
                        <p class="text-xl font-black text-slate-800">420,5 <small>kWp</small></p>
                    </div>
                    <div><span class="stat-label-small">Aktueller Bezug</span>
                        <p class="text-xl font-black text-slate-800">{{ communityData.aktuellerBezug }} <small>kW</small></p>
                    </div>
                    <div><span class="stat-label-small text-eeg-green">Aktuelle Einspeisung</span>
                        <p class="text-xl font-black text-eeg-green">{{ communityData.aktuelleEinspeisung }} <small>kW</small></p>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div class="lg:col-span-3 space-y-2">
                    <h3 class="text-sm font-black uppercase text-slate-400 mb-4 tracking-widest">Gemeinschafts-Historie</h3>
                    <div class="hidden md:grid grid-cols-4 px-6 py-2 text-[10px] font-black text-slate-400 uppercase">
                        <span>Monat</span><span>Gesamt Bezug</span><span>Gesamt Einspeisung</span><span class="text-right">Saldo</span>
                    </div>
                    <div v-for="m in gefilterteHistorieEEG" :key="m.name" class="history-row grid grid-cols-1 md:grid-cols-4 items-center">
                        <span class="font-bold text-slate-800">{{ m.name }}</span>
                        <span class="text-sm text-slate-600">{{ m.totalConsumed }} kW</span>
                        <span class="text-sm text-eeg-green font-bold">{{ m.totalProduced }} kW</span>
                        <span class="text-right font-mono font-bold" :class="m.totalProduced - m.totalConsumed >= 0 ? 'text-eeg-green' : 'text-orange-500'">
                        {{ (m.totalProduced - m.totalConsumed).toFixed(0) }} kW
                      </span>
                    </div>
                </div>
                <div class="space-y-4">
                    <h3 class="text-sm font-black uppercase text-slate-400 mb-4 tracking-widest text-center">Jahr</h3>
                    <div class="flex flex-col space-y-2">
                        <button v-for="jahr in verfuegbareJahre" :key="jahr" @click="gewaehltesJahrEEG = jahr" :class="yearBtnClass(gewaehltesJahrEEG === jahr)">{{ jahr }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    ref,
    computed,
    onMounted
} from 'vue';
import api from 'axios';
// --- STATE & UI CONTROL ---
const activeTab = ref('meine');
const loading = ref(true);
const error = ref(null);
const gewaehltesJahr = ref(2026);
const gewaehltesJahrEEG = ref(2026);
const verfuegbareJahre = [2026, 2025, 2024];
// --- DATEN-OBJEKTE (Initial mit deinen Werten befüllt) ---
const person = ref({
    firstName: 'Max',
    lastName: 'Mayer',
    phonePrimary: '0664 1234567',
    street: 'Musterweg',
    houseNumber: '12',
    doorNumber: 'A',
    postalCode: '4775 Taufkirchen',
    iban: 'AT44 1234 5678 9012 3456',
    bic: 'RLBXXXX',
    accountNumber: '1234567'
});
const userData = ref({
    email: 'max@mayer.at',
    zuletztEingeloggt: '22.03.2026 20:15'
});
const communityData = ref({
    aktuellerBezug: '14.500',
    aktuelleEinspeisung: '12.820'
});
const energiekonto = ref({
    zaehlpunktBezieher: 'AT001000...123',
    zaehlpunktEinspeiser: 'AT001000...999'
});
const energiedaten = ref({
    abrechnungsmonat: 'Februar 2026',
    consumedPowerKw: 342.50,
    eingespeistePowerKw: 120.20,
    preisCtKw: 14.5
});
const historieDaten = ref({
    2026: [{
            name: 'Februar',
            consumedPowerKw: 342.5,
            eingespeistePowerKw: 120.2,
            preis: 14.5
        },
        {
            name: 'Januar',
            consumedPowerKw: 410.0,
            eingespeistePowerKw: 45.0,
            preis: 14.5
        }
    ],
    2025: [{
        name: 'Dezember',
        consumedPowerKw: 450,
        eingespeistePowerKw: 10,
        preis: 12.0
    }]
});
const historieEEG = ref({
    2026: [{
        name: 'Februar',
        totalConsumed: 14500,
        totalProduced: 12820
    }, {
        name: 'Januar',
        totalConsumed: 16200,
        totalProduced: 8400
    }]
});
// --- API LOGIK (AXIOS) ---
const fetchDashboardData = async () => {
    loading.value = true;
    try {
        // Beispiel für API-Endpunkte (anpassen an dein Backend)
        const response = await api.get('/dashboard-summary');
        // Daten zuweisen (falls API-Struktur von Initialdaten abweicht, hier mappen)
        if (response.data) {
            person.value = response.data.person;
            userData.value = response.data.userData;
            historieDaten.value = response.data.historieDaten;
            historieEEG.value = response.data.historieEEG;
            // ... weitere Zuweisungen
        }
    } catch (err) {
        console.error("Fehler beim Laden:", err);
        error.value = "Daten konnten nicht geladen werden.";
    } finally {
        loading.value = false;
    }
};
const saveData = async () => {
    try {
        // POST/PUT Request mit den aktuellen Werten von 'person' und 'userData'
        await api.put('/user/stammdaten', {
            ...person.value,
            email: userData.value.email
        });
        alert("Stammdaten wurden erfolgreich gespeichert!");
    } catch (err) {
        console.error("Speicherfehler:", err);
        alert("Fehler beim Speichern der Stammdaten.");
    }
};
// Start beim Laden
onMounted(() => {
    fetchDashboardData();
});
// --- COMPUTED ---
const gefilterteHistorie = computed(() => historieDaten.value[gewaehltesJahr.value] || []);
const gefilterteHistorieEEG = computed(() => historieEEG.value[gewaehltesJahrEEG.value] || []);
const calculateAmount = (m) => (m.eingespeistePowerKw - m.consumedPowerKw) * (m.preis / 100);
// --- CSS CLASSES HELPER ---
const tabClass = (isActive) => [
    'pb-4 text-lg font-black transition-all border-b-4 whitespace-nowrap',
    isActive ? 'border-eeg-green text-slate-900' : 'border-transparent text-slate-400 hover:text-slate-600'
];
const yearBtnClass = (isActive) => [
    'px-6 py-3 rounded-xl font-bold text-center transition-all',
    isActive ? 'bg-slate-800 text-white shadow-lg scale-105' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
];
</script>

<style scoped>
.form-label {
    @apply text-[10px] font-bold text-slate-500 uppercase ml-1;
}

.form-input {
    @apply w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none transition-all text-sm font-medium;
}

.stat-card-dark {
    @apply bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col;
}

.stat-card-green {
    @apply bg-eeg-green/10 p-4 rounded-2xl border border-eeg-green/20 flex flex-col text-right;
}

.stat-label {
    @apply text-[10px] font-black uppercase text-slate-400 mb-1;
}

.stat-label-green {
    @apply text-[10px] font-black uppercase text-eeg-green mb-1;
}

.stat-label-small {
    @apply text-[10px] font-black uppercase text-slate-400 block mb-1;
}

.history-row {
    @apply bg-white border border-slate-100 p-4 md:px-6 rounded-xl transition-all shadow-sm gap-2;
}

/* Hover-Effekt separat definiert */
.history-row:hover {
    @apply border-eeg-green shadow-md;
    /* Optional: Ein ganz leichter Versatz nach oben für mehr Interaktivität */
    transform: translateY(-1px);
}

.text-eeg-green {
    color: #10b981;
}

.bg-eeg-green {
    background-color: #10b981;
}

.border-eeg-green {
    border-color: #10b981;
}
</style>