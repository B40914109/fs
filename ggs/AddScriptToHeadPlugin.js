// class AddScriptToHeadPlugin {
//     constructor(options) {
//         this.options = options || {};
//     }

//     apply(compiler) {
//         // Wait for the 'emit' event to ensure HtmlWebpackPlugin has been registered.
//         compiler.hooks.emit.tapAsync('AddScriptToHeadPlugin', (compilation, callback) => {
//             // Access the HtmlWebpackPlugin instance
//             const htmlWebpackPlugin = compilation.assets[Object.keys(compilation.assets).find(asset => asset.endsWith('.html'))];

//             if (htmlWebpackPlugin) {
//                 // Get the HTML data as a string
//                 const htmlData = htmlWebpackPlugin.source().toString();
//                 // console.log(htmlData);

//                 // Modify the HTML data as needed
//                 const scriptTag = `<script src="${this.options.src}"></script>`;
//                 console.log(1);
//                 console.log(scriptTag);
//                 console.log(2);
//                 const modifiedHtmlData = htmlData.replace('</head>', `${scriptTag}\n</head>`);

//                 // Replace the HTML data in the compilation
//                 compilation.assets[htmlWebpackPlugin.existsAt] = {
//                     source: () => modifiedHtmlData,
//                     size: () => modifiedHtmlData.length,
//                 };
//             }

//             callback();
//         });
//     }
// }


// module.exports = AddScriptToHeadPlugin;


const HtmlWebpackPlugin = require('html-webpack-plugin');

class AddScriptToHeadPlugin {
    constructor(options) {
        this.options = options || {};
    }

    apply(compiler) {
        compiler.hooks.thisCompilation.tap('AddScriptToHeadPlugin', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('AddScriptToHeadPlugin', (data, callback) => {
                const scriptTag = `<script src="${this.options.src}"></script>`;
                const scriptToExecute = `<script>
                // Your JavaScript code to execute here
                console.log('1212')// Example: Initialize VConsole
              </script>`;
                data.html = data.html.replace('</head>', `${scriptTag}\n</head>`);
                data.html = data.html.replace('<head>', `<head>${scriptTag}\n${scriptToExecute}\n`);
                callback(null, data);
            });
        });
    }
}

module.exports = AddScriptToHeadPlugin;