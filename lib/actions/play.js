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
var PlayAction = /** @class */ (function (_super) {
    __extends(PlayAction, _super);
    function PlayAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayAction.prototype.start = function () {
        nock_1.activate();
        nock_1.disableNetConnect();
        nock_1.playRecord(this.playbackDir, false);
    };
    PlayAction.prototype.finish = function () {
        nock_1.deactivate();
    };
    return PlayAction;
}(action_1.Action));
exports.PlayAction = PlayAction;
