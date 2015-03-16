
/**
 * Module dependencies.
 */

var render = require('./render');
var User = require('./user');
var elo = require('./elo');

/**
 * Render index html page.
 */

exports.index = function *() {
  this.body = yield render('index');
};

/**
 * List users.
 */

exports.list = function *() {
  return this.body = yield User.find({});
};

/**
 * Create user
 */

exports.create = function *() {
  var load = this.request.body;
  return yield User.create(load.name);
};

/**
 * Delete user
 */

exports.remove = function *(name) {
  return User.remove({ name: name });
};

/**
 * Submit results.
 */

exports.results = function *() {
  var load = this.request.body;
  return yield elo.rank(load.winner, load.loser);
};
