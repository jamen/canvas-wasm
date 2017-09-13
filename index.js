
module.exports = function create (target) {
  // create
  const create_rect = (x, y, w, h) => {
    target.fillRect(x, y, w, h)
    // stroke ?
  }

  // path
  const path_circle = (x, y, radius) => {
    target.arc(x, y, radius, 0, 2 * Math.PI)
  }

  // clear
  const clear = () => target.clearRect(0, 0, target.canvas.width, target.canvas.height)

  // set fill/stroke
  const set_stroke_color = (r, g, b) => target.strokeStyle = `rgb(${r},${g},${b})`
  const set_fill_color = (r, g, b) => target.fillStyle = `rgb(${r},${g},${b})`

  // set line
  const LINE_CAP = ['butt', 'round', 'square']
  const LINE_JOIN = ['round', 'bevel', 'miter']
  const set_line_width = (x) => target.lineWidth = x
  const set_line_cap = (x) => target.lineCap = LINE_CAP[x]
  const set_line_join = (x) => target.lineJoin = LINE_JOIN[x]

  // create text ? 
  // set text ?

  // set shadow
  const set_shadow_blur = (x) => target.shadowBlur = x
  const set_shadow_color = (r, g, b, a) => target.shadowColor = `rgb(${r},${g},${b},${a})`
  const set_shadow_offset_x = (x) => target.shadowOffsetX = x
  const set_shadow_offset_y = (y) => target.shadowOffsetY = y

  const transform_rotate = (x) => target.rotate(x * Math.PI / 180)

  // pixels ?

  return {
    create_rect,
    
    path_begin: target.beginPath.bind(target),
    path_close: target.closePath.bind(target),
    path_move: target.moveTo.bind(target),
    path_line: target.lineTo.bind(target),
    path_fill: target.fill.bind(target),
    path_stroke: target.stroke.bind(target),
    path_bezier_curve: target.bezierCurveTo.bind(target),
    path_quadradic_curve: target.quadraticCurveTo.bind(target),
    path_circle,
    path_arc: target.arc.bind(target),
    path_ellipse: target.ellipse.bind(target),
    path_rect: target.rect.bind(target),

    clear,
    clear_rect: target.clearRect.bind(target),
    
    set_stroke_color,
    set_fill_color,
    set_line_width,
    set_line_cap,
    set_line_join,
    set_shadow_blur,
    set_shadow_color,
    set_shadow_offset_x,
    set_shadow_offset_y,
  
    transform_rotate,
    transform_scale: target.scale.bind(target),
    transform_translate: target.translate.bind(target),
    transform: target.transform.bind(target),
    set_transform: target.setTransform.bind(target),
    reset_transform: target.resetTransform.bind(target),

    save: target.save.bind(target),
    restore: target.restore.bind(target),
  }
}


