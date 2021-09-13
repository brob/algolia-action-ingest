const core = require('@actions/core');
const github = require('@actions/github');

try {

    // Get diff files
    const files = github.context.payload.pull_request.files;
    console.log(`The files: ${files}`);


    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);




} catch(error) {
    core.setFailed(error.message);
}