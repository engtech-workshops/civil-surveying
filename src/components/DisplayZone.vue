<script setup lang="ts">
import { ref, computed } from "vue"
import type { StationProperties } from "@/types"
import { calcPosFromPolar } from "@/utils/calcPosFromPolar"
import { useReadingStore } from "@/stores/reading"
const readingStore = useReadingStore()
const stations = computed<Array<StationProperties>>(() => {
  if (readingStore.coordinateType === "cartesian") {
    return readingStore.cartesianCoordinatesList
  } else {
    return calcPosFromPolar([...readingStore.polarCoordinatesList], false)
      .map(s => ({ x: s.x * 10, y: s.y * 10 }))
  }
})
const stationSize = 5
const stationColor = "green"

const viewBox = computed(() => {
  const vbPadding = 10
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
    <svg preserveAspectRatio="xMidYMid meet" :viewBox="viewBox.toString()" class="flex-1">
      <template v-for="station in stations">
        <circle :cx="station.x" :cy="station.y" :r="stationSize" :fill="stationColor"></circle>
      </template>
      <template v-for="(station, index) in stations.slice(0, -1)">
        <line :x1="station.x" :y1="station.y" :x2="stations[index + 1]?.x" :y2="stations[index + 1]?.y" :stroke="stationColor"></line>
      </template>
    </svg>
  </div>
</template>
