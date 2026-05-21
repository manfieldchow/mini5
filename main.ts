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

    /**
     * Set one WS2812B LED color and update the strip.
     * @param strip the WS2812B strip
     * @param index LED index from 0
     * @param color color from the NeoPixel palette
     */
    //% blockId=minibeampixel_set_ws2812 block="$strip|set WS2812B pixel $index to %color=neopixel_colors"
    //% strip.defl=strip
    //% index.min=0
    //% group="WS2812B"
    export function setWs2812Pixel(strip: neopixel.Strip, index: number, color: NeoPixelColors): void {
        strip.setPixelColor(index, neopixel.colors(color))
        strip.show()
    }

    /**
     * Fill the whole WS2812B strip with one color.
     * @param strip the WS2812B strip
     * @param color color from the NeoPixel palette
     */
    //% blockId=minibeampixel_show_ws2812 block="$strip|show WS2812B color %color=neopixel_colors"
    //% strip.defl=strip
    //% group="WS2812B"
    export function showWs2812Color(strip: neopixel.Strip, color: NeoPixelColors): void {
        strip.showColor(neopixel.colors(color))
    }

    /**
     * Turn off all WS2812B LEDs.
     * @param strip the WS2812B strip
     */
    //% blockId=minibeampixel_clear_ws2812 block="$strip|clear WS2812B strip"
    //% strip.defl=strip
    //% group="WS2812B"
    export function clearWs2812Strip(strip: neopixel.Strip): void {
        strip.clear()
        strip.show()
    }
}
