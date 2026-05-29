<script setup lang="ts">
import ReadingCartesian from "./ReadingCartesian.vue"
import ReadingPolar from "./ReadingPolar.vue"
import { PhCaretRight, PhPlus } from "@phosphor-icons/vue"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import type { CartesianCoordinates, PolarCoordinates } from "@/types"
import { useReadingStore } from "@/stores/reading"

const readingStore = useReadingStore()

import { useLayoutStore } from "@/stores/layout"
const layoutStore = useLayoutStore()

</script>

<template>
  <div class="border border-border rounded p-3 flex flex-col gap-2 overflow-hidden relative">
    <Button class="absolute top-2 right-2 md:hidden" variant="outline" @click="layoutStore.toggleDisplayZone"><PhCaretRight /></Button>
    <Tabs default-value="cartesian" v-model="readingStore.coordinateType" class="flex flex-col overflow-hidden">
      <TabsList>
        <TabsTrigger value="polar">Polar</TabsTrigger>
        <!-- <TabsTrigger value="cartesian">Cartesian</TabsTrigger> -->
      </TabsList>
      <TabsContent value="polar" class="flex flex-col flex-1 gap-2 overflow-auto px-1">
        <div class="flex flex-row gap-1">
          <div class="w-2" :style="{ backgroundColor: readingStore.readingColors[0] }"></div>
          <span class="font-semibold">Starting Point</span>
        </div>
        <template v-for="(reading, index) in readingStore.polarCoordinatesList" :key="index">
          <ReadingPolar
            v-model="readingStore.polarCoordinatesList[index] as PolarCoordinates"
            @delete="readingStore.deletePolarCoordinates(index)"
            :index="index"
            :color="readingStore.readingColors[(index+1) % readingStore.readingColors.length]"
          />
        </template>
        <Button @click="readingStore.addPolarCoordinates" variant="secondary"><PhPlus /></Button>
      </TabsContent>
      <TabsContent value="cartesian" class="flex flex-col flex-1 gap-2 overflow-auto px-1">
        <div class="flex flex-row gap-1">
          <div class="w-2" :style="{ backgroundColor: readingStore.readingColors[0] }"></div>
          <span class="font-semibold">Starting Point</span>
        </div>
        <template v-for="(reading, index) in readingStore.cartesianCoordinatesList" :key="index">
          <ReadingCartesian
            v-model="readingStore.cartesianCoordinatesList[index] as CartesianCoordinates"
            @delete="readingStore.deleteCartesianCoordinates(index)"
            :index="index"
            :color="readingStore.readingColors[(index+1) % readingStore.readingColors.length]"
          />
        </template>
        <Button @click="readingStore.addCartesianCoordinates" variant="outline"><PhPlus /></Button>
      </TabsContent>
    </Tabs>
  </div>
</template>
