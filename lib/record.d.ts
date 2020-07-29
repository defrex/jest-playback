import nock = require('nock');
export declare function loadRecords(playbackDir: string): nock.Definition[];
export declare function writeRecords(playbackDir: string, records: nock.Definition[]): void;
