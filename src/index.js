console.log(`Logging in index`);

require('./module-outside-foo')
require('./foo/module-in-foo')

const context = require.context('./foo', true, /.+.en.json$/);