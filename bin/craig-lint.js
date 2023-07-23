#!/usr/bin/env node

const spawn = require('cross-spawn');

let path = '{src,test,cypress}/**/*.{ts,tsx,js,jsx}';
if (process.argv.length > 2) {
    path = process.argv[2];
}

const result = spawn.sync('eslint', ['--fix', '--max-warnings=0', path], {
    stdio: 'inherit'
});

process.exit(result.status);