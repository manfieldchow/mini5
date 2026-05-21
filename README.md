# MiniBeam Pixel

A simple MakeCode extension for the micro:bit 5×5 LED matrix and WS2812B NeoPixel strips.

This extension depends on the official [NeoPixel extension](https://github.com/microsoft/pxt-neopixel), which drives WS2812B LEDs over a single data pin.

## Blocks

### Onboard LED

| Block | What it does |
|-------|----------------|
| **set pixel x y on/off** | Turn one LED on or off at column `x` and row `y` |
| **draw horizontal line on row** | Light every LED in a single row |
| **invert all pixels** | Flip the whole matrix (on ↔ off) |

### WS2812B

| Block | What it does |
|-------|----------------|
| **create WS2812B strip on pin with N LEDs** | Create a strip variable (GRB format) |
| **set WS2812B pixel index to color** | Set one LED and refresh the strip |
| **show WS2812B color** | Fill the whole strip with one color |
| **clear WS2812B strip** | Turn all strip LEDs off |

## Example

Onboard matrix:

```typescript
minibeampixel.setPixel(2, 2, true)
minibeampixel.drawHorizontalLine(0)
basic.pause(500)
minibeampixel.invertAll()
```

WS2812B strip on pin P0:

```typescript
let strip = minibeampixel.createWs2812Strip(DigitalPin.P0, 8)
minibeampixel.showWs2812Color(strip, NeoPixelColors.Red)
minibeampixel.setWs2812Pixel(strip, 0, NeoPixelColors.Green)
basic.pause(500)
minibeampixel.clearWs2812Strip(strip)
```

## Use in MakeCode

1. Open [makecode.microbit.org](https://makecode.microbit.org)
2. Create a new project
3. Go to **Extensions** and paste your GitHub repo URL  
   (for example: `https://github.com/yourname/pxt-minibeampixel`)
4. The **MiniBeam Pixel** category appears in the toolbox

---

> This extension is for PXT/microbit
