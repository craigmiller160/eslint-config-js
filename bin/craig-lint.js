#!/usr/bin/env node

const spawn = require('cross-spawn');

const result = spawn.sync('eslint', ['{src,test,cypress}/**/*.{ts,tsx,js,jsx}', '--fix', '--max-warnings=0'], {
    stdio: 'inherit'
});

process.exit(result.status);