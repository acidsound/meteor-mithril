Package.describe({
  name: 'spectrum:mithril-meteor',
  version: '0.0.1',
  summary: 'meteor package for mithril /w reactive',
  git: 'git@github.com:acidsound/meteor-mithril.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles([
    'mithril.min.js',
    'reactiveHelper.js'
  ], "client");
  api.export('m');
  api.export('reactive');
});