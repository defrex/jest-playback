"use strict";
exports.__esModule = true;
var path = require("path");
var mode_1 = require("./mode");
function setup(dirname, mode) {
    if (mode === void 0) { mode = process.env[mode_1.modeEnv] || mode_1.Mode.Run; }
    var playbackDir = path.join(dirname, '__playbacks__');
    var Action = mode_1.getActionClass(mode);
    var action = new Action(playbackDir);
    beforeAll(function () { return action.start(); });
    afterAll(function () { return action.finish(); });
}
exports.setup = setup;
