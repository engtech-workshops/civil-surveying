import type { PolarCoordinates, StationProperties } from "@/types"

export function calcPosFromPolar(coord: Array<PolarCoordinates>, zeroUp: Boolean): Array<StationProperties> {
  const result: Array<StationProperties> = []

  result.push({ x: 0, y: 0 })
  let accuAngle = -180
  for (const c of coord) {
    accuAngle += 180 + (c.degree + c.minute / 60 + c.second / 3600) + (zeroUp ? 90 : 0)
    const x = c.distance * Math.cos(accuAngle * Math.PI / 180)
    const y = c.distance * Math.sin(accuAngle * Math.PI / 180)
    result.push({
      x: x + result[result.length - 1]!.x,
      y: y + result[result.length - 1]!.y
    })
  }

  return result
}
