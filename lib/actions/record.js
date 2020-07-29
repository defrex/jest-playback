"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var action_1 = require("../action");
var nock_1 = require("../nock");
var RecordAction = /** @class */ (function (_super) {
    __extends(RecordAction, _super);
    function RecordAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RecordAction.prototype.start = function () {
        nock_1.activate();
        nock_1.enableNetConnect();
        nock_1.startRecord();
    };
    RecordAction.prototype.finish = function () {
        nock_1.finishRecord(this.playbackDir);
        nock_1.deactivate();
    };
    return RecordAction;
}(action_1.Action));
exports.RecordAction = RecordAction;
