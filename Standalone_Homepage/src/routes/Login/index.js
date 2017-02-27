module.exports = {
  path: 'Login',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Login').default)
    })
  }
}