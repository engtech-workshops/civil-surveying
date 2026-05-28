import { defineStore } from "pinia"
import { ref } from "vue"

export const useReadingStore = defineStore("reading", () => {
  const coordinateType = ref<"cartesian" | "polar">("cartesian")
  const cartesianCoordinates = ref<Array<[number, number]>>([[0, 0]])
  const polarCoordinates = ref<Array<[number, number]>>([[0, 0]])

  function setCoordinateType(type: "cartesian" | "polar") {
    coordinateType.value = type
  }

  function addCartesianCoordinate() {
    cartesianCoordinates.value.push([0, 0])
  }

  function addPolarCoordinate() {
    polarCoordinates.value.push([0, 0])
  }

  function clearCoordinates() {
    cartesianCoordinates.value = []
    polarCoordinates.value = []
  }

  return {
    coordinateType,
    cartesianCoordinates,
    polarCoordinates,
    setCoordinateType,
    addCartesianCoordinate,
    addPolarCoordinate,
    clearCoordinates,
  }
})
