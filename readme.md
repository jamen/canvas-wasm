
# canvas-wasm

> Canvas functions suitable for WebAssembly

Canvas's [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) has several methods, setters, and getters **not** suitable for WebAssembly.  Use this module to wrap a context for making it suitable.

## Install

```sh
npm i canvas-wasm
```

**Note:** See [`browserify`](https://github.com/browserify/browserify) and [`wasmify`](https://github.com/jamen/wasmify) for an easy way to building WASM projects.

## Usage

### `create_*`

Creating shapes without using paths

 - `create_rect(x, y, width, height)`

### `path_*`

 - `path_begin()`
 - `path_close()`
 - `path_move(x, y)`
 - `path_line(x, y)`
 - `path_fill()`
 - `path_stroke()`
 - `path_bezier_curve(c1x, c1y, c2x, c2y, x, y)`
 - `path_quadradic_curve(cx, cy, x, y)`
 - `path_circle(x, y, radius)`
 - `path_arc(x, y, radius, startAngle, endAngle)`
 - `path_ellipse(x, y, rx, ry, rot, startAngle, endAngle)`
 - `path_rect(x, y, width, height)`

### `clear_*`

 - `clear()`
 - `clear_rect(x, y, width, height)`

### `set_*`

 - `set_stroke_color(r, g, b)`
 - `set_fill_color(r, g, b)`
 - `set_line_width(w)`
 - `set_line_cap(0 | 1 | 2)`
   - `butt`, `join`, `square` respectively
 - `set_line_join(0 | 1 | 2)`
   - `round`, `bevel`, `miter` respectively
 - `set_shadow_blur(x)`
 - `set_shadow_color(r, g, b, a)`
 - `set_shadow_offset_x(x)`
 - `set_shadow_offset_y(y)`

### `transform_*`

 - `transform_rotate(deg)`
 - `transform_scale(x, y)`
 - `transform_translate(x, y)`
 - `transform(a, b, c, d, e, f)`
 - `set_transform(a, b, c, d, e, f)`
 - `reset_transform()`

### State functions

 - `save()`
 - `restore()`

