#!/usr/bin/env node

const spawn = require('cross-spawn');

spawn.sync('eslint', ['{src/**/**.{js,jsx,ts,tsx},test/**/**.{js,jsx,ts,tsx}}', '--fix', '--max-warnings=0'], {
    stdio: 'inherit'
});
