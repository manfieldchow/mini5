/**
 * Simple helpers for the micro:bit LED matrix and WS2812B NeoPixel strips.
 */
//% weight=90 color=#FF6B00 icon="\uf0eb" block="MiniBeam Pixel"
//% groups=['Onboard LED', 'WS2812B']
namespace minibeampixel {

    /**
     * Turn a single LED on or off.
     * @param x column from 0 (left) to 4 (right)
     * @param y row from 0 (top) to 4 (bottom)
     * @param on true to light the LED, false to turn it off
     */
    //% blockId=minibeampixel_set block="set pixel x $x y $y $on"
    //% x.min=0 x.max=4
    //% y.min=0 y.max=4
    //% group="Onboard LED"
    export function setPixel(x: number, y: number, on: boolean): void {
        if (on) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
    }

    /**
     * Light every LED in one row.
     * @param row row from 0 (top) to 4 (bottom)
     */
    //% blockId=minibeampixel_hline block="draw horizontal line on row $row"
    //% row.min=0 row.max=4
    //% group="Onboard LED"
    export function drawHorizontalLine(row: number): void {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, row)
        }
    }

    /**
     * Flip every LED: on becomes off and off becomes on.
     */
    //% blockId=minibeampixel_invert block="invert all pixels"
    //% group="Onboard LED"
    export function invertAll(): void {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                if (led.point(x, y)) {
                    led.unplot(x, y)
                } else {
                    led.plot(x, y)
                }
            }
        }
    }

    /**
     * Create a WS2812B strip using the NeoPixel driver (GRB format).
     * @param pin data pin connected to the strip DIN line
     * @param numLeds number of LEDs on the strip
     */
    //% blockId=minibeampixel_create_ws2812 block="create WS2812B strip on pin $pin with $numLeds LEDs"
    //% numLeds.min=1 numLeds.max=256
    //% blockSetVariable=strip
    //% group="WS2812B"
    export function createWs2812Strip(pin: DigitalPin, numLeds: number): neopixel.Strip {
        return neopixel.create(pin, numLeds, NeoPixelMode.RGB)
    }

 
}
