
const LINE_CAP = ['butt', 'round', 'square']
const LINE_JOIN = ['round', 'bevel', 'miter']

const solid = (obj) => {
  for (var key in obj) {
    if (typeof obj[key] === 'function') {
      obj[key] = obj[key].bind(obj)
    }
  }
}

module.exports = target => solid(target) || ({
  create_rect: (x, y, w, h) => {
    target.fillRect(x, y, w, h)
    // stroke ?
  },

  path_begin: target.beginPath,
  path_close: target.closePath,
  path_move: target.moveTo,
  path_line: target.lineTo,
  path_fill: target.fill,
  path_stroke: target.stroke,
  path_bezier_curve: target.bezierCurveTo,
  path_quadradic_curve: target.quadraticCurveTo,  
  path_circle: (x, y, radius) => target.arc(x, y, radius, 0, 2 * Math.PI),
  path_arc: target.arc,
  path_ellipse: target.ellipse,
  path_rect: target.rect,

  clear: () => target.clearRect(0, 0, target.canvas.width, target.canvas.height),
  clear_rect: target.clearRect,

  set_stroke_color: (r, g, b) => target.strokeStyle = `rgb(${r},${g},${b})`,
  set_fill_color: (r, g, b) => target.fillStyle = `rgb(${r},${g},${b})`,
  set_line_width:(x) => target.lineWidth = x,
  set_line_cap: (x) => target.lineCap = LINE_CAP[x],
  set_line_join: (x) => target.lineJoin = LINE_JOIN[x],
  set_shadow_blur: (x) => target.shadowBlur = x,
  set_shadow_color: (r, g, b, a) => target.shadowColor = `rgb(${r},${g},${b},${a})`,
  set_shadow_offset_x: (x) => target.shadowOffsetX = x,
  set_shadow_offset_y: (y) => target.shadowOffsetY = y,

  transform_rotate: (x) => target.rotate(x * Math.PI / 180),
  transform_scale: target.scale,
  transform_translate: target.translate,
  transform: target.transform,
  set_transform: target.setTransform,
  reset_transform: target.resetTransform,

  save: target.save,
  restore: target.restore,
})

