const core = require('@actions/core');
const github = require('@actions/github');

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const name = `helllla ${nameToGreet} from seoul`
    core.setOutput('outputKey1', name);
} catch (error) {
    core.setFailed(error.message);
}