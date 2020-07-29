export declare abstract class Action {
    protected playbackDir: string;
    constructor(playbackDir: string);
    abstract start(): void;
    abstract finish(): void;
}
