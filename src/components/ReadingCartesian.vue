<script setup lang="ts">
import { Label } from "@/components/ui/label"
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field"

defineProps<{
  reading: [number, number]
  index: number
}>()
</script>

<template>
  <div class="">
    <div class="font-semibold">Reading {{ index + 1 }}</div>
    <div class="flex flex-row gap-2">
      <NumberField id="x-coord" :default-value="0" :value="reading[0]">
        <Label for="x-coord">X Coordinate</Label>
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
      <NumberField id="y-coord" :default-value="0" :value="reading[1]">
        <Label for="y-coord">Y Coordinate</Label>
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
  </div>
</template>
