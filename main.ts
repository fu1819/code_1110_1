let x0 = 0
let y0 = 0
let x = 0
let y = 0
basic.forever(function () {
    x0 = 4
    y0 = 0
    for (let I = 0; I <= 4; I++) {
        led.plot(x0, y0)
        for (let j = 0; j <= 1; j++) {
            x = x0 - 1
            y = y0 + 1
            led.plot(x, y)
            basic.pause(500)
        }
    }
})
