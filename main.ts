radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    basic.showString(receivedString)
})
radio.setGroup(1)
