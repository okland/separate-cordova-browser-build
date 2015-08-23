/**
 * Don't compile file type specified to specified arch
 * @param fullType
 * @param arch
 */
var registerSourceHandler = function (fullType, arch) {
    Plugin.registerSourceHandler(fullType, {
        isTemplate  : true,
        archMatching: arch
    }, function (compileStep) {
        var compileOptions = {
            path      : compileStep.inputPath,
            data      : '',
            sourcePath: compileStep.inputPath
        };
        // If js compile to empty js
        if (fullType.indexOf('js') >= 0) {
            compileStep.addJavaScript(compileOptions);
        } else if (fullType.indexOf('html') >= 0) {
            // Add section to html compile
            compileOptions.section = 'body';
            compileStep.addHtml(compileOptions);
        } else {
            compileStep.addStylesheet(compileOptions);
        }
    });
};

var types = ['js', 'ng.js', 'ng.html', 'css', 'less', 'import.less', 'html'];
for (var i in types) {
    var type = types[i];
    // On browser if has cordova ending
    // Ignore all files with js css or html ending
    registerSourceHandler('cordova.' + type, 'web.browser');
    registerSourceHandler('browser.' + type, 'web.cordova');
}


