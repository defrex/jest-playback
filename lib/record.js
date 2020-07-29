"use strict";
exports.__esModule = true;
var fs = require("fs");
var jsonStableStringify = require("json-stable-stringify");
var kebabCase = require("lodash.kebabcase");
var path = require("path");
var revHash = require("rev-hash");
var url = require("url");
var PLAYBACK_EXTENSION = '.nock.json';
function loadRecords(playbackDir) {
    if (!fs.existsSync(playbackDir)) {
        return [];
    }
    return readDir(playbackDir)
        .filter(isDirectory)
        .map(readDir)
        .reduce(concat)
        .filter(isFile)
        .filter(function (filename) { return filename.endsWith(PLAYBACK_EXTENSION); })
        .map(function (filename) { return JSON.parse(fs.readFileSync(filename, 'utf8')); });
}
exports.loadRecords = loadRecords;
function writeRecords(playbackDir, records) {
    if (records.length === 0) {
        return;
    }
    ensureDir(playbackDir);
    var hostnameMap = {};
    records.forEach(function (record) {
        var _a = url.parse(record.scope).hostname, hostname = _a === void 0 ? 'unknown' : _a;
        var hostnameRecords = hostnameMap[hostname] || (hostnameMap[hostname] = []);
        var basename = getRecordBasename(record) + PLAYBACK_EXTENSION;
        hostnameRecords.push([basename, record]);
    });
    Object.keys(hostnameMap).forEach(function (hostname) {
        var hostnameDir = path.join(playbackDir, hostname);
        ensureDir(hostnameDir);
        hostnameMap[hostname].forEach(function (_a) {
            var basename = _a[0], record = _a[1];
            fs.writeFileSync(path.join(hostnameDir, basename), JSON.stringify(record, null, 2));
        });
    });
}
exports.writeRecords = writeRecords;
function getRecordBasename(record) {
    var method = (record.method || 'unknown').toLowerCase();
    var pathname = record.path.split('?')[0];
    var formattedPathname = kebabCase(pathname);
    var hash = revHash(method + "+" + record.status + "+" + record.scope + "+" + record.path + "+" + (record.body !== null && typeof record.body === 'object'
        ? // https://github.com/ikatyang/jest-playback/issues/349
            jsonStableStringify(record.body)
        : // backward compatibility
            record.body));
    return formattedPathname.length === 0
        ? method + "+" + hash
        : method + "+" + formattedPathname + "+" + hash;
}
function ensureDir(dirname) {
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }
}
function isDirectory(pathname) {
    return fs.statSync(pathname).isDirectory();
}
function isFile(pathname) {
    return fs.statSync(pathname).isFile();
}
function readDir(dirname) {
    return fs.readdirSync(dirname).map(function (basename) { return path.join(dirname, basename); });
}
function concat(a, b) {
    return a.concat(b);
}
