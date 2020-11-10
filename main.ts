let x = 0
let y = 0
let x0 = 0
let y0 = 0
let x1 = 0
let y1 = 0
basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= I; j++) {
            x = 4 - I
            y = I
            x0 = x + j
            y0 = I
            x1 = 4 - I
            y1 = I - j
            led.plot(x0, y0)
            led.plot(x1, y1)
            basic.pause(200)
        }
    }
})
