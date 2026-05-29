import type { PolarCoordinates, StationProperties } from "@/types"

export function calcPosFromPolar(coord: Array<PolarCoordinates>, zeroUp: Boolean): Array<StationProperties> {
  const result: Array<StationProperties> = []

  result.push({ x: 0, y: 0 })
  for (const c of coord) {
    const angle = (c.degree + c.minute / 60 + c.second / 3600) + (zeroUp ? 90 : 0)
    const x = c.distance * Math.cos(angle)
    const y = c.distance * Math.sin(angle)
    result.push({
      x: x + result[result.length - 1]!.x,
      y: y + result[result.length - 1]!.y
    })
  }

  return result
}
