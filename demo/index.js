
var { h, app } = require('hyperapp')
var create = require('../')

// Cavnas Element 
var canvas = document.createElement('canvas')
var context = canvas.getContext('2d')

// Demo modules
var modules = {
  motion: require('./motion.wat'),
  collision: require('./collision.wat'),
}

app({
  state: {
    active: null,
  },
  actions: {
    select (state, actions, name) {
      modules[name]({
        canvas: create(context),
        math: Math
      }).then(mod => {
        Object.assign(global, mod)
        actions.activate(mod)
      })
    },
    activate (state, actions, mod) {
      if (mod.start) mod.start(canvas.width, canvas.height)
      return { active: mod }
    },
    render (state, actions) {
      if (state.active && state.active.render) {
        state.active.render(canvas.width, canvas.height) 
      }  
      window.requestAnimationFrame(actions.render)
    }
  },
  events: {
    load (state, actions) {
      actions.select('motion')
      window.requestAnimationFrame(actions.render)
    }
  },
  view (state, actions) {
    var btns = Object.keys(modules).map(name => {
      return h('button', { onclick: e => actions.select(name) }, name)
    })

    return h('div', {
      class: 'app',
      onupdate (el) { el.appendChild(canvas) }
    }, [
      h('div', { class: 'modules' }, btns)
    ])
  }
})

