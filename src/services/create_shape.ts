import { IShapePrototype, IRectangle } from '../types/shapes'
import { ICoordinates } from '../types/space'

const shapeDefaults: IShapePrototype = {
  widthOutline: 1,
  colorOutline: 'black',
  colorFill: 'blue'
}

export const createSquare = (opts: {width: number, topLeft: ICoordinates}): IRectangle => {
  const { width, topLeft } = opts

  return {
    ...shapeDefaults,
    topLeft,
    width,
    length: width
  }
}