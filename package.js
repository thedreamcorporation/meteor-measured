Package.describe({
  name: '@tdc/meteor-measured',
  version: '1.0.1',
  summary: 'Meteor metrics library',
  git: 'https://github.com/thedreamcorporation/meteor-measured',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');
  api.use('ecmascript');

  api.mainModule('meteor-measured.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('thedreamcorporation:meteor-measured');
  api.mainModule('meteor-measured-tests.js');
});
