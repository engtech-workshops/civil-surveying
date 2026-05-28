<script setup lang="ts">
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PhTrash } from "@phosphor-icons/vue"

defineProps<{
  reading: {
    degree: number,
    minute: number,
    second: number,
    distance: number
  }
  index: number
}>()
</script>

<template>
  <div class="">
    <div class="font-semibold">Reading {{ index + 1 }}</div>
    <div class="grid grid-cols-3 gap-2 auto-cols-min">
      <div class="auto-cols-auto">Angles</div>
      <div class="flex items-center gap-1">
        <Input v-model.number="reading.degree" type="number" min="0" max="360" class="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        <span class="text-center">°</span>
        <Input v-model.number="reading.minute" type="number" min="0" max="60" class="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        <span class="text-center">′</span>
        <Input v-model.number="reading.second" type="number" min="0" max="60" class="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        <span class="text-center">″</span>
      </div>
      <Button @click="deleteReading(index)" size="icon" class="auto-cols-max"><PhTrash /></Button>
      <div class="auto-cols-auto">Distances</div>
      <div class="flex items-center gap-1">
        <Input v-model.number="reading.distance" type="number" min="0" class="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        <span class="text-center">m</span>
      </div>
    </div>
  </div>
</template>
