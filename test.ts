// Runs when this extension is opened as the top-level project.
minibeampixel.setPixel(2, 2, true)
minibeampixel.drawHorizontalLine(0)
minibeampixel.invertAll()

let strip = minibeampixel.createWs2812Strip(DigitalPin.P0, 8)
minibeampixel.showWs2812Color(strip, NeoPixelColors.Red)
minibeampixel.setWs2812Pixel(strip, 0, NeoPixelColors.Green)
minibeampixel.clearWs2812Strip(strip)
