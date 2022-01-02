#!/usr/bin/env node

const spawn = require('cross-spawn');

const result = spawn.sync('eslint', ['{src/**/**.{js,jsx,ts,tsx},test/**/**.{js,jsx,ts,tsx}}', '--fix', '--max-warnings=0'], {
    stdio: 'inherit'
});

process.exit(result.status);