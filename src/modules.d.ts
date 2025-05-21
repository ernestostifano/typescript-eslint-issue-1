declare module 'my-module' {
    import {EMyEnum} from './common.types.js';

    // INCORRECT: ESLINT HIGHLIGHTS AN ERROR
    function externalFunction(arg: EMyEnum | null): void;

    export {externalFunction};
}
