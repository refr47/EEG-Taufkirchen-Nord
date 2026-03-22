<template>
  <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
    <div class="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-in zoom-in duration-200">
      
      <div class="bg-slate-800 p-8 text-white">
        <h2 class="text-2xl font-black italic tracking-tight">Anmelden</h2>
        <p class="text-slate-400 text-sm mt-1 font-medium">EEG Taufkirchen/Nord Portal</p>
      </div>

      <div class="p-8 space-y-5">
        <div class="space-y-1">
          <label class="text-[10px] font-black text-slate-500 uppercase ml-1">Telefonnummer</label>
          <input v-model="loginData.phone" type="tel" placeholder="+43 664..." 
            class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-eeg-green outline-none transition-all font-mono text-lg">
        </div>

        <div class="space-y-1">
          <label class="text-[10px] font-black text-slate-500 uppercase ml-1">Passwort</label>
          <input v-model="loginData.password" type="password" placeholder="••••••••" 
            class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-eeg-green outline-none text-lg">
        </div>

        <p v-if="errorMessage" class="text-red-500 text-xs font-bold ml-1 italic">{{ errorMessage }}</p>

        <button @click="performLogin" :disabled="loading"
          class="w-full bg-eeg-green text-white py-5 rounded-2xl font-black shadow-lg shadow-eeg-green/20 hover:scale-[1.01] active:scale-95 transition-all mt-4 disabled:opacity-50">
          {{ loading ? 'PRÜFE DATEN...' : 'JETZT EINLOGGEN' }}
        </button>
      </div>

      <button @click="$emit('close')" class="absolute top-4 right-4 text-white/30 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
//import api from '@/api/axios'; // Deine Interceptor-Instanz

const emit = defineEmits(['login-success', 'close']);

const loginData = ref({ phone: '0667 123456', password: '' });
const loading = ref(false);
const errorMessage = ref('');

const performLogin = async () => {
  loading.value = true;
  errorMessage.value = '';
  
  try {
    //const response = await api.post('/auth/login', loginData.value);
    let data= { id: 1, user: "Max Mayer", token: "abc123xyz" }
   
    // Token speichern
    localStorage.setItem('user_token', /*response.*/data.token);
    
    // Das Event nach oben schicken!
    emit('login-success', /*response.*/data.user);
  } catch (err) {
    errorMessage.value = "Login fehlgeschlagen. Bitte Daten prüfen.";
  } finally {
    loading.value = false;
  }
};
</script>