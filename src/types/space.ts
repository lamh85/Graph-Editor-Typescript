export interface Coordinates {
  x: number
  y: number
}

export interface Direction {
  distance: number
  origin: Coordinates
  destination: Coordinates
}
