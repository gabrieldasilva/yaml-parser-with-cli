const yaml = require('js-yaml');
const fs = require('fs');
const yargs = require("yargs");

const argv = yargs
    .option('file', {
        alias: 'f',
        description: 'Tell the file to process',
        type: 'boolean'
    })
    .help()
    .alias('help', 'h')
    .argv;

if (argv.file) {
    try {
        const doc = yaml.safeLoad(fs.readFileSync('foo.yaml', 'utf8'));
        console.log(doc);
    }catch (e) {
        console.log(e);
    }
} else {
    console.log("No file was provided");
}
