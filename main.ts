input.onButtonPressed(Button.A, function () {
    basic.showString("tarea 10 - sensor de sonido")
})
basic.forever(function () {
    basic.showNumber(input.soundLevel())
})
basic.forever(function () {
    if (input.soundLevel() <= 255 && input.soundLevel() >= 250) {
        music.playMelody("C5 B C5 B C5 B C5 B ", 200)
    } else if (input.soundLevel() < 250 && input.soundLevel() >= 200) {
        music.playMelody("A B A B A B A B ", 200)
    } else if (input.soundLevel() < 200 && input.soundLevel() >= 150) {
        music.playMelody("A G A G A G A G ", 200)
    } else if (input.soundLevel() < 150 && input.soundLevel() >= 100) {
        music.playMelody("F G F G F G F G ", 200)
    } else if (input.soundLevel() < 100 && input.soundLevel() >= 50) {
        music.playMelody("F E F E F E F E ", 200)
    } else if (input.soundLevel() < 50 && input.soundLevel() >= 0) {
        music.playMelody("D E D E D E D E ", 200)
    }
})
