radio.onReceivedValue(function (name, value) {
    if (name == "motor 1") {
        motor_1 = value
    } else if (name == "motor 2") {
        motor_2 = -1 * value
    } else {
    	
    }
})
let motor_2 = 0
let motor_1 = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    wuKong.setAllMotor(motor_1, motor_2)
})
