let Tæller = 0
input.onButtonPressed(Button.A, function () {
    Tæller = 0
    basic.showNumber(Tæller)
})
input.onGesture(Gesture.Shake, function () {
    Tæller += 1
    basic.showNumber(Tæller)
})
