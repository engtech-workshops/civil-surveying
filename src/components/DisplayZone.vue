<script setup lang="ts">
import { ref, computed } from "vue"
import { useReadingStore } from "@/stores/reading"
const readingStore = useReadingStore()
const stations = ref<{ x: number, y: number }>([{
  x: 0, y: 0
}])
const stationSize = 15
const stationColor = "green"

const viewBox = computed(() => {
  const vbPadding = 30
  const xlist = stations.value.map(s => s.x)
  const ylist = stations.value.map(s => s.y)
  const xmin = Math.min(...xlist)
  const xmax = Math.max(...xlist)
  const xrange = xmax - xmin
  const ymin = Math.min(...ylist)
  const ymax = Math.max(...ylist)
  const yrange = ymax - ymin
  return [xmin - vbPadding, ymin - vbPadding, xrange + 2*vbPadding, yrange + 2*vbPadding]
})
</script>

<template>
  <div class="border border-border rounded flex flex-col">
    <svg preserveAspectRatio="xMidYMid meet" :viewBox="viewBox" class="flex-1">
      <template v-for="station in stations">
        <circle :cx="station.x" :cy="station.y" :r="stationSize" :fill="stationColor"></circle>
      </template>
    </svg>
  </div>
</template>
