import { defineStore } from "pinia"
import { ref } from "vue"
import type { CartesianCoordinates, PolarCoordinates } from "@/types"

export const useReadingStore = defineStore("reading", () => {
  const coordinateType = ref<"cartesian" | "polar">("polar")
  const cartesianCoordinatesList = ref<Array<CartesianCoordinates>>([{
    x: 0, y: 0
  }])
  const polarCoordinatesList = ref<Array<PolarCoordinates>>([{
    degree: 0, minute: 0, second: 0,
    distance: 0
  }])

  function setCoordinateType(type: "cartesian" | "polar") {
    coordinateType.value = type
  }

  function addCartesianCoordinates() {
    cartesianCoordinatesList.value.push({ x: 0, y: 0 })
  }

  function addPolarCoordinates() {
    polarCoordinatesList.value.push({ degree: 0, minute: 0, second: 0, distance: 0 })
  }

  function deleteCartesianCoordinates(index: number) {
    cartesianCoordinatesList.value.splice(index, 1)
  }

  function deletePolarCoordinates(index: number) {
    polarCoordinatesList.value.splice(index, 1)
  }

  function clearCoordinatesLists() {
    cartesianCoordinatesList.value = []
    polarCoordinatesList.value = []
  }

  return {
    coordinateType,
    cartesianCoordinatesList,
    polarCoordinatesList,
    setCoordinateType,
    addCartesianCoordinates,
    addPolarCoordinates,
    deleteCartesianCoordinates,
    deletePolarCoordinates,
    clearCoordinatesLists,
  }
})
