import { ICoordinates } from './space'

export interface IShapePrototype {
  widthOutline: number
  colorOutline: string
  colorFill: string
}

export interface IRectangle extends IShapePrototype {
  topLeft: ICoordinates
  width: number
  length: number
}

export interface ICircle extends IShapePrototype {
  center: ICoordinates
  radius: number
}

export interface IPolygonMisc extends IShapePrototype {
  topLeft: ICoordinates
  coordinates: ICoordinates[]
}
