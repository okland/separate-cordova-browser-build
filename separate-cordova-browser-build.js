var types = ['js','css', 'less', 'html', 'ng.js', 'ng.html'];
for (var i in types) {
    // On browser if has cordova ending
    // Ignore all files with js css or html ending
    Plugin.registerSourceHandler('cordova.' + types[i], {
        isTemplate  : true,
        archMatching: 'web.browser'
    }, function (compileStep) {
        // Don't compile Cordova files to web
        compileStep.addJavaScript({
            path      : compileStep.inputPath,
            data      : '',
            sourcePath: compileStep.inputPath
        });
    });

    // On cordova if has browser ending
    // Ignore all files with js css or html ending
    Plugin.registerSourceHandler('browser.' + types[i], {
        isTemplate  : true,
        archMatching: 'web.cordova'
    }, function (compileStep) {
        // Don't compile Cordova files to web
        compileStep.addJavaScript({
            path      : compileStep.inputPath,
            data      : '',
            sourcePath: compileStep.inputPath
        });
    });
}



