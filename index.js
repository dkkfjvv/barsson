import * as core from '@actions/core';

const nameToGreet = core.getInput('who-to-greet');
console.log(`Hello ${nameToGreet}!`);
const name = `helllla ${nameToGreet} from seoul`
core.setOutput('outputKey1', name);