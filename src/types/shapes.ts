import { Coordinates } from './space'

interface ShapePrototype {
  widthOutline: number
  colorOutline: string
  colorFill: string
}

export interface Rectangle extends ShapePrototype {
  topLeft: Coordinates
  width: number
  length: number
}

export interface Circle extends ShapePrototype {
  center: Coordinates
  radius: number
}

export interface PolygonMisc extends ShapePrototype {
  topLeft: Coordinates
  coordinates: Coordinates[]
}
