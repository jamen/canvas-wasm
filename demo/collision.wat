(module
  (func $begin (import "canvas" "path_begin"))
  (func $close (import "canvas" "path_close"))
  (func $circle (import "canvas" "path_circle") (param f32 f32 f32))
  (func $clear (import "canvas" "clear"))
  (func $stroke (import "canvas" "path_stroke"))
  (func $set_fill_color (import "canvas" "set_fill_color") (param i32 i32 i32))
  (func $create_rect (import "canvas" "create_rect") (param i32 i32 f32 f32))

  (global $border f32 (f32.const 1))

  (global $x (mut f32) (f32.const 50))
  (global $y (mut f32) (f32.const 50))
  (global $size (mut f32) (f32.const 20))

  (global $vx (mut f32) (f32.const 0.3))
  (global $vy (mut f32) (f32.const 0.2))
  (global $speed (mut f32) (f32.const 7))

  (func (export "render")
    (param $canvas_width f32)
    (param $canvas_height f32)     
    
    (set_global $x
      (f32.add
        (get_global $x)
        (f32.mul (get_global $speed) (get_global $vx))
      )
    )

    (set_global $y
      (f32.add
        (get_global $y)
        (f32.mul (get_global $speed) (get_global $vy))
      )            
    )

    (if
      (i32.or
        (f32.gt
          (f32.add (get_global $x) (get_global $size))
          (f32.sub (get_local $canvas_width) (get_global $border))
        )
        (f32.lt
          (f32.sub (get_global $x) (get_global $size))
          (get_global $border)
        )
      )
      (then
        (set_global $vx (f32.mul (get_global $vx) (f32.const -1.0)))  
      )
    )

    (if
      (i32.or
        (f32.gt
          (f32.add (get_global $y) (get_global $size))
          (f32.sub (get_local $canvas_height) (get_global $border))
        )
        (f32.lt
          (f32.sub (get_global $y) (get_global $size))
          (get_global $border)
        )
      )
      (then
        (set_global $vy (f32.mul (get_global $vy) (f32.const -1.0))) 
      )
    )

    (call $clear)
    
    (call $set_fill_color (i32.const 0xDF) (i32.const 0xDF) (i32.const 0xEE)) 
    (call $create_rect
      (i32.const 0) (i32.const 0)
      (get_local $canvas_width) (get_local $canvas_height)
    )

    (call $begin)
    (call $circle (get_global $x) (get_global $y) (get_global $size))
    (call $stroke)
    (call $close)
  )

  (func (export "set_speed")
    (param $speed f32)
    (set_global $speed (get_local $speed))
  )

  (func (export "set_velocity")
    (param $new_vx f32)
    (param $new_vy f32)
    (set_global $vx (get_local $new_vx))
    (set_global $vy (get_local $new_vy))
  )
)
