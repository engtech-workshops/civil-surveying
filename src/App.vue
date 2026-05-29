<script setup lang="ts">
import Header from './components/Header.vue';
import ReadingList from './components/ReadingList.vue';
import DisplayZone from './components/DisplayZone.vue';
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <div class="p-2 pb-1">
      <Header></Header>
    </div>
    <div class="p-2 pt-1 flex flex-row gap-2 grow overflow-hidden">
      <ReadingList class="w-100"></ReadingList>
      <DisplayZone class="flex-1"></DisplayZone>
    </div>
  </div>
</template>

<style scoped></style>
