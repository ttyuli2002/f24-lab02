import { Shape } from './shape'

function circle(radius: number): Shape {
    radius
    return {
        computeArea: () => {
            return Math.PI * radius * radius
        }
    }
}

export { circle }
