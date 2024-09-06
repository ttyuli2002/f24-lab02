import { Shape } from './shape'

function newRectangle(width: number, height: number): Shape {
    width
    height
    return {
        computeArea: () => {
            return width * height
        }
    }
}

export { newRectangle }
