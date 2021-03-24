input.onButtonPressed(Button.A, function () {
    basic.showString("Hello Jolie")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.temperature()))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("hello")
})
radio.setGroup(123)
