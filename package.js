Package.describe({
  name: 'okland:separate-cordova-browser-build',
  version: '0.0.3',
  summary: 'Separate Cordova and Browser meteor build, ignore files ending .browser.* on cordova build',
  git: 'https://github.com/okland/separate-cordova-browser-build.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
    name: 'separateCordovaBrowserBuild',
    sources: [
        'separate-cordova-browser-build.js'
    ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('okland:separate-cordova-browser-build');
});
