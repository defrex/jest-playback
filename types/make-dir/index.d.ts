// Type definitions for make-dir 1.0
// Project: https://github.com/sindresorhus/make-dir
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = makeDir;

/**
 * Returns a `Promise` for the path to the created directory.
 * @param path Directory to create.
 * @param options
 */
declare function makeDir(path: string, options?: makeDir.Options): Promise<string>;

declare namespace makeDir {

    /**
     * Returns the path to the created directory.
     * @param path Directory to create.
     * @param options
     */
    export function sync(path: string, options?: Options): string;

    export interface Options {
        /**
         * Default: `0o777 & (~process.umask())`
         *
         * Directory [permissions](https://x-team.com/blog/file-system-permissions-umask-node-js/).
         */
        mode?: number;

        /**
         * Default: `require('fs')`
         *
         * Use a custom `fs` implementation. For example [`graceful-fs`](https://github.com/isaacs/node-graceful-fs).
         */
        fs?: object;
    }
}
