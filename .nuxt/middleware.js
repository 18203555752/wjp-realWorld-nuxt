const middleware = {}

middleware['hasUser'] = require('..\\middleware\\hasUser.js')
middleware['hasUser'] = middleware['hasUser'].default || middleware['hasUser']

middleware['noUser'] = require('..\\middleware\\noUser.js')
middleware['noUser'] = middleware['noUser'].default || middleware['noUser']

export default middleware
