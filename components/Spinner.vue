<template>
       <div class="flex justify-center items-center flex-col h-32">
        <svg class="animate-spin h-12 w-12 text-gray-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="15" fill="none" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" stroke-width="2"/>
          <line x1="5" y1="50" x2="s95" y2="50" stroke="currentColor" stroke-width="2"/>
          <line x1="15" y1="15" x2="85" y2="85" stroke="currentColor" stroke-width="2"/>
          <line x1="85" y1="15" x2="15" y2="85" stroke="currentColor" stroke-width="2"/>
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
        <p>Загрузка...</p>
      </div>
</template>

<script setup lang="ts">
</script>