"use strict";
exports.__esModule = true;
var play_1 = require("./actions/play");
var real_1 = require("./actions/real");
var record_1 = require("./actions/record");
var run_1 = require("./actions/run");
exports.modeEnv = 'JEST_PLAYBACK_MODE';
var Mode;
(function (Mode) {
    /**
     * - http: `true`
     * - play: `true`
     * - record: `false`
     */
    Mode["Run"] = "run";
    /**
     * - http: `false`
     * - play: `true`
     * - record: `false`
     */
    Mode["Play"] = "play";
    /**
     * - http: `true`
     * - play: `false`
     * - record: `true`
     */
    Mode["Record"] = "record";
    /**
     * - http: `true`
     * - play: `false`
     * - record: `false`
     */
    Mode["Real"] = "real";
})(Mode = exports.Mode || (exports.Mode = {}));
function getActionClass(mode) {
    switch (mode) {
        case Mode.Play:
            return play_1.PlayAction;
        case Mode.Real:
            return real_1.RealAction;
        case Mode.Record:
            return record_1.RecordAction;
        case Mode.Run:
            return run_1.RunAction;
        default:
            throw new Error("Unexpected mode \"" + mode + "\"");
    }
}
exports.getActionClass = getActionClass;
