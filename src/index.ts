import {externalFunction} from 'my-module';
import {internalFunction} from './utilities.js';

// INCORRECT: TS DOES NOT HIGHLIGHT THE ERROR
externalFunction('TEST');

// CORRECT: TS HIGHLIGHTS ERROR BECAUSE THE ARGUMENT MUST BE AN ENUM
internalFunction('TEST');
