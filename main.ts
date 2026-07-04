basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(1000)
})
