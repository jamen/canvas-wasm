(module
  (func $clear (import "canvas" "clear"))
  (func $begin (import "canvas" "path_begin"))
  (func $close (import "canvas" "path_close"))
  (func $circle (import "canvas" "path_circle") (param f32 f32 f32))
  (func $arc (import "canvas" "path_arc") (param f32 f32 f32 f32 f32))
  (func $stroke (import "canvas" "path_stroke"))
  (func $line (import "canvas" "path_line") (param f32 f32))
  (func $move (import "canvas" "path_move") (param f32 f32))
  (func $_sin (import "math" "sin") (param f32) (result f32))
  (func $_cos (import "math" "cos") (param f32) (result f32))

  (global $rotation (mut f32) (f32.const 0))
  (global $radius (mut f32) (f32.const 50))
  (global $ry (mut f32) (f32.const 80))
  (global $rx (mut f32) (f32.const 80))

  (global $size (mut f32) (f32.const 10))

  (func $cos (param $radius f32) (param $angle f32) (param $offset f32) (result f32)
    (return (f32.add (f32.mul (get_local $radius) (call $_cos (get_local $angle))) (get_local $offset)))       )
  (func $sin (param $radius f32) (param $angle f32) (param $offset f32) (result f32)
    (return (f32.add (f32.mul (get_local $radius) (call $_sin (get_local $angle))) (get_local $offset)))
  )

  (func (export "render")
    (param $canvas_width f32)
    (param $canvas_height f32)

    (set_global $rotation (f32.add (get_global $rotation) (f32.const 0.1)))

    (call $clear)

    (call $begin)
    (call $circle
      (call $cos (get_global $radius) (get_global $rotation) (get_global $rx))
      (call $sin (get_global $radius) (get_global $rotation) (get_global $ry))
      (get_global $size)
    )
    (call $stroke)
    (call $close)
  )
)



