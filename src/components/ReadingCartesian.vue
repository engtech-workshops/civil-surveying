<script setup lang="ts">
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field"
import { Button } from "@/components/ui/button"
import { PhTrash } from "@phosphor-icons/vue"
import { Input } from "@/components/ui/input"

defineProps<{
  reading: {
    x: number,
    y: number
  }
  index: number
}>()
</script>

<template>
  <div class="">
    <div class="font-semibold">Reading {{ index + 1 }}</div>
    <div class="grid grid-cols-[max-content_max-content_max-content] items-center gap-x-3 gap-y-2">
      <div class="text-xs">X</div>
      <div class="flex items-center gap-1">
        <Input v-model.number="reading.x" type="number" class="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
      </div>
      <div class="row-span-2 self-stretch flex items-center">
        <Button @click="" class="h-full bg-red-600"><PhTrash /></Button>
      </div>
      <div class="text-xs">Y</div>
      <div class="flex items-center gap-1">
        <Input v-model.number="reading.y" type="number" class="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
      </div>
    </div>
  </div>
</template>
