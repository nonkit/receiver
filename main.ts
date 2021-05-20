input.onButtonPressed(Button.A, function () {
    basic.showString(line)
})
serial.onDataReceived(serial.delimiters(Delimiters.Colon), function () {
    radio.sendString(":")
})
radio.onReceivedString(function (receivedString) {
    line = receivedString
    serial.writeLine(line)
})
let line = ""
radio.setGroup(1)
line = "N/A"
