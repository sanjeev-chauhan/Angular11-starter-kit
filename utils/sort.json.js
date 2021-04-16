let sortJSON = require('sort-json');

// Take file to be sorted as an argument, the translation file is the default
let fileName = process.argv[2] || 'src/assets/i18n/en.json';

// Sort file contents
sortJSON.overwrite(fileName, {ignoreCase: true});
console.log("Successfully sorted " + fileName +  " file!");
