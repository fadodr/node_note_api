"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _mongoose = require("mongoose");

var _validator2 = _interopRequireDefault(require("validator"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function validator(v) {
        return _validator2["default"].isEmail(v);
      },
      message: "invalid email address"
    }
  },
  password: {
    type: String,
    required: true
  },
  resetToken: String,
  resetTokenExpiresIn: Date
}, {
  timestamps: true,
  toJSON: {
    transform: _utils.docToJson
  }
});
var User = (0, _mongoose.model)('User', userSchema);
exports.User = User;