let direction = 0
music.setVolume(7)
music.playTone(523, music.beat(BeatFraction.Whole))
basic.forever(function () {
    direction = 360 - input.compassHeading()
    if (direction < 22.5) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (direction < 67.5) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (direction < 112.5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
    } else if (direction < 157.5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    } else if (direction < 202.5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (direction < 247.5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (direction < 292.5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
    } else if (direction < 337.5) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
