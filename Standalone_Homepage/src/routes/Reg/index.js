module.exports = {
  path: 'Reg',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Reg').default)
    })
  }
}