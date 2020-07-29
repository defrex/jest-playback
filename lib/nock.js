"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var nock = require("nock");
var record_1 = require("./record");
function activate() {
    if (!nock.isActive()) {
        nock.activate();
    }
}
exports.activate = activate;
function deactivate() {
    nock.restore();
    nock.cleanAll();
}
exports.deactivate = deactivate;
function enableNetConnect() {
    nock.enableNetConnect();
}
exports.enableNetConnect = enableNetConnect;
function disableNetConnect() {
    nock.disableNetConnect();
}
exports.disableNetConnect = disableNetConnect;
function startRecord() {
    nock.recorder.rec({
        output_objects: true,
        dont_print: true
    });
}
exports.startRecord = startRecord;
function finishRecord(playbackDir) {
    var records = nock.recorder.play();
    record_1.writeRecords(playbackDir, records);
    nock.recorder.clear();
}
exports.finishRecord = finishRecord;
function playRecord(playbackDir, allowUnmocked) {
    var records = record_1.loadRecords(playbackDir);
    for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
        var record = records_1[_i];
        record.options = __assign({}, record.options, { allowUnmocked: allowUnmocked });
    }
    nock.define(records).forEach(function (scope) { return scope.persist(); });
}
exports.playRecord = playRecord;
