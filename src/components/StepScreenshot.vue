

<template>
  <div class="flex-none w-72 md:w-96 snap-start">
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      
      <div class="bg-slate-50 px-4 py-2 border-b border-slate-100">
        <span class="text-[10px] font-bold uppercase tracking-widest text-eeg-green">
          {{ title }}
        </span>
      </div>

      <div class="relative flex-grow">
        <img 
          :src="src" 
          class="w-full h-auto object-cover display-block" 
          :alt="title"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
});
</script>