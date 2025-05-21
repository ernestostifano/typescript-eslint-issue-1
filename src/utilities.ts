import {EMyEnum} from './common.types.js';

function internalFunction(arg: EMyEnum | null): void {
    console.log(arg);
}

export {internalFunction};
