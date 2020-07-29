import { PlayAction } from './actions/play';
export declare const modeEnv = "JEST_PLAYBACK_MODE";
export declare enum Mode {
    /**
     * - http: `true`
     * - play: `true`
     * - record: `false`
     */
    Run = "run",
    /**
     * - http: `false`
     * - play: `true`
     * - record: `false`
     */
    Play = "play",
    /**
     * - http: `true`
     * - play: `false`
     * - record: `true`
     */
    Record = "record",
    /**
     * - http: `true`
     * - play: `false`
     * - record: `false`
     */
    Real = "real"
}
export declare function getActionClass(mode: Mode): typeof PlayAction;
