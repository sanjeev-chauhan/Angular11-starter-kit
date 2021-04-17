module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
      'scope-case': [2, 'always', 'upper-case'],
      'subject-case': [2, 'always', ['lower-case', 'sentence-case']]  
      }
};
