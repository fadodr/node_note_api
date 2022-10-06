"use strict";

var _express = _interopRequireDefault(require("express"));

require("./configs");

var _logger = _interopRequireDefault(require("./logger"));

var _errors = require("./errors");

var _middleware = require("./middleware");

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_middleware.currentUser);
app.use('/api', _routes["default"]);
app.use('*', function (req, res) {
  res.status(404).send({
    error: 'Page not found'
  });
});
app.use(_errors.apiErrorHandler);
app.listen(3000, function () {
  _logger["default"].info('listening on port 3000');
});