import { Shape } from "./shape"

function square(sideLen: number): Shape {
    sideLen
    return {
        computeArea: () => {
            return sideLen * sideLen
        }
    }
}

export { square }