function kanan () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M3,
    -255
    )
    basic.pause(100)
    I4 = 1
    while (I4 == 1) {
        read_sensor()
        basic.pause(2)
    }
    stop()
}
function junction_count () {
    if (I1 == 0 && I3 == 0 || I5 == 0 && I3 == 0) {
        basic.pause(20)
        read_sensor()
        if (I1 == 0 && I3 == 0 || I5 == 0 && I3 == 0) {
            basic.pause(25)
            read_sensor()
            if (I1 == 0 && I3 == 0 || I5 == 0 && I3 == 0) {
                Junction += 1
                basic.pause(10)
            }
        }
    }
}
function stop () {
    SuperBit.MotorStopAll()
}
input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.Asleep)
    line_follow_by_junction(1)
    kiri()
    line_follow_by_junction(1)
    kanan()
    line_follow_by_junction(1)
    kanan()
    line_follow_by_junction(2)
    kiri()
    line_follow_by_junction(1)
    kiri()
    line_follow_by_junction(2)
    kanan()
    line_follow_by_junction(1)
    kanan()
    line_follow_by_junction(2)
    kiri()
    line_follow_by_junction(1)
    kiri()
    line_follow_by_junction(1)
    kanan()
    line_follow_timing(300)
    basic.showIcon(IconNames.Yes)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
function Follow_line () {
    if (I3 == 0) {
        if (I4 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -120,
            SuperBit.enMotors.M3,
            -200
            )
        } else if (I2 == 0) {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -200,
            SuperBit.enMotors.M3,
            -120
            )
        } else {
            SuperBit.MotorRunDual(
            SuperBit.enMotors.M1,
            -255,
            SuperBit.enMotors.M3,
            -255
            )
        }
    } else if (I4 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        -255
        )
    } else if (I2 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M3,
        0
        )
    } else if (I5 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        -255
        )
    } else if (I1 == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M3,
        0
        )
    }
}
function kiri () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -255,
    SuperBit.enMotors.M3,
    255
    )
    basic.pause(100)
    I2 = 1
    while (I2 == 1) {
        read_sensor()
        basic.pause(2)
    }
    stop()
}
function read_sensor () {
    I1 = pins.digitalReadPin(DigitalPin.P13)
    I2 = pins.digitalReadPin(DigitalPin.P8)
    I3 = pins.digitalReadPin(DigitalPin.P2)
    I4 = pins.digitalReadPin(DigitalPin.P1)
    I5 = pins.digitalReadPin(DigitalPin.P0)
}
function line_follow_timing (timing_in_ms: number) {
    milisec = control.millis()
    while (control.millis() <= milisec + timing_in_ms) {
        read_sensor()
        Follow_line()
    }
    stop()
}
input.onButtonPressed(Button.B, function () {
	
})
function foward () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    -255,
    SuperBit.enMotors.M1,
    -255
    )
    basic.pause(200)
    stop()
}
function stop_1second () {
    stop()
    basic.pause(1000)
}
function line_follow_by_junction (num: number) {
    Junction = 0
    while (Junction < num) {
        read_sensor()
        Follow_line()
        junction_count()
    }
}
let milisec = 0
let I2 = 0
let Junction = 0
let I5 = 0
let I3 = 0
let I1 = 0
let I4 = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P12, 8, NeoPixelMode.RGB)
SuperBit.MotorStopAll()
strip.showColor(neopixel.colors(NeoPixelColors.Black))
music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
