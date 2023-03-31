basic.forever(function () {
    basic.showNumber(input.soundLevel())
})
basic.forever(function () {
    if (input.soundLevel() >= 100) {
        for (let index = 0; index < 3; index++) {
            music.playMelody("C5 B C5 B C5 B C5 B ", 200)
        }
    }
})
