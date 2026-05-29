<script setup lang="ts">
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PhTrash } from "@phosphor-icons/vue"
import type { PolarCoordinates } from "@/types"

const reading = defineModel<PolarCoordinates>({ required: true })
defineProps<{
  index: number
}>()
</script>

<template>
  <div class="flex flex-col">
    <div class="font-semibold">Reading {{ index + 1 }}</div>
    <div class="grid grid-cols-[max-content_auto_max-content] items-center gap-x-3 gap-y-2">
      <div class="text-xs">Angle</div>
      <div class="flex items-center gap-1">
        <Input v-model.number="reading.degree" type="number" min="0" max="360" class="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        <span class="text-center">°</span>
        <Input v-model.number="reading.minute" type="number" min="0" max="60" class="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        <span class="text-center">′</span>
        <Input v-model.number="reading.second" type="number" min="0" max="60" class="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        <span class="text-center">″</span>
      </div>
      <div class="row-span-2 self-stretch flex items-center">
        <Button @click="" class="h-full bg-red-600"><PhTrash /></Button>
      </div>
      <div class="text-xs">Distance</div>
      <div class="flex items-center gap-1">
        <Input v-model.number="reading.distance" type="number" min="0" class="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
        <span class="text-center text-xs">m</span>
      </div>
    </div>
  </div>
</template>
