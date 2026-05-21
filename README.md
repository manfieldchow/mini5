# MiniBeam Pixel

A simple MakeCode extension that adds a few custom blocks for working with the micro:bit 5×5 LED matrix.

## Blocks

| Block | What it does |
|-------|----------------|
| **set pixel x y on/off** | Turn one LED on or off at column `x` and row `y` |
| **draw horizontal line on row** | Light every LED in a single row |
| **invert all pixels** | Flip the whole matrix (on ↔ off) |

## Example

```typescript
minibeampixel.setPixel(2, 2, true)
minibeampixel.drawHorizontalLine(0)
basic.pause(500)
minibeampixel.invertAll()
```

## Use in MakeCode

1. Open [makecode.microbit.org](https://makecode.microbit.org)
2. Create a new project
3. Go to **Extensions** and paste your GitHub repo URL  
   (for example: `https://github.com/yourname/pxt-minibeampixel`)
4. The **MiniBeam Pixel** category appears in the toolbox

---

> This extension is for PXT/microbit
