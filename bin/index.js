#! /usr/bin/env node
const yargs = require("yargs");
const re2 = require("re2");

const optionConfig = {
      "regex": { describe: "Regular expression for the test", type: "string", demandOption: true },
      "test": { describe: "String to be tested", type: "string", demandOption: true },
};

const usage = "\nUsage: re2 <options>";
const yargsConfig = yargs
      .usage(usage)
      .options(optionConfig)
      .argv;

console.log(`Attempting to match ${yargs.argv["regex"]} for string ${yargs.argv["test"]}`)

try {
      const pattern = new re2(yargs.argv["regex"]);
      const result = pattern.test(yargs.argv["test"]);
      console.log(result);
} catch(ex) {
      console.log("Failed to test Regex. " + ex);
}
