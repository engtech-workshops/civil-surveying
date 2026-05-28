<script setup lang="ts">
import ReadingCartesian from "./ReadingCartesian.vue"
import ReadingPolar from "./ReadingPolar.vue"
import { PhPlus } from "@phosphor-icons/vue"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useReadingStore } from "@/stores/reading"

const readingStore = useReadingStore()
</script>

<template>
  <div class="border border-border rounded p-3 flex flex-col gap-2">
    <Tabs default-value="cartesian" :value="readingStore.coordinateType">
      <TabsList>
        <TabsTrigger value="cartesian">Cartesian</TabsTrigger>
        <TabsTrigger value="polar">Polar</TabsTrigger>
      </TabsList>
      <TabsContent value="cartesian" class="flex flex-col gap-2">
        <template v-for="(reading, index) in readingStore.cartesianCoordinatesList" :key="index">
          <ReadingCartesian :reading="reading" :index="index"></ReadingCartesian>
        </template>
        <Button @click="readingStore.addCartesianCoordinates"><PhPlus /></Button>
      </TabsContent>
      <TabsContent value="polar" class="flex flex-col gap-2">
        <template v-for="(reading, index) in readingStore.polarCoordinatesList" :key="index">
          <ReadingPolar :reading="reading" :index="index"></ReadingPolar>
        </template>
        <Button @click="readingStore.addPolarCoordinates"><PhPlus /></Button>
      </TabsContent>
    </Tabs>
  </div>
</template>
