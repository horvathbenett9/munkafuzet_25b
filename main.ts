input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # # # #
            # . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(200)
        basic.showIcon(IconNames.StickFigure)
        basic.pause(200)
        basic.showLeds(`
            # . # . .
            . # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(200)
        basic.showIcon(IconNames.StickFigure)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            # # # # .
            . . # . #
            . # . # .
            # . . . #
            `)
        basic.pause(200)
        basic.showIcon(IconNames.StickFigure)
        basic.pause(200)
        basic.showLeds(`
            . . # . #
            # # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(200)
        basic.showIcon(IconNames.StickFigure)
        basic.pause(200)
    }
})
basic.forever(function () {
	
})
