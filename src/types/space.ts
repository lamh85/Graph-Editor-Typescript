export interface ICoordinates {
  x: number
  y: number
}

export interface IDirection {
  distance: number
  start: ICoordinates
  end: ICoordinates
}
