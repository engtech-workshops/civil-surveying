<script setup lang="ts">
import ReadingCartesian from "./ReadingCartesian.vue"
import ReadingPolar from "./ReadingPolar.vue"
import { PhPlus } from "@phosphor-icons/vue"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import type { CartesianCoordinates, PolarCoordinates } from "@/types"
import { useReadingStore } from "@/stores/reading"

const readingStore = useReadingStore()
</script>

<template>
  <div class="border border-border rounded p-3 flex flex-col gap-2 overflow-hidden">
    <Tabs default-value="cartesian" v-model="readingStore.coordinateType" class="flex flex-col overflow-hidden">
      <TabsList>
        <TabsTrigger value="polar">Polar</TabsTrigger>
        <!-- <TabsTrigger value="cartesian">Cartesian</TabsTrigger> -->
      </TabsList>
      <TabsContent value="polar" class="flex flex-col flex-1 gap-2 overflow-auto">
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
        <Button @click="readingStore.addPolarCoordinates"><PhPlus /></Button>
      </TabsContent>
      <TabsContent value="cartesian" class="flex flex-col flex-1 gap-2 overflow-auto">
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
        <Button @click="readingStore.addCartesianCoordinates"><PhPlus /></Button>
      </TabsContent>
    </Tabs>
  </div>
</template>
