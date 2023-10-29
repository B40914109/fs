// print-content-loader.js
const parser = require('node-html-parser');
// console.log(parser)

module.exports = function (source) {
  const root = parser.parse(source, { lowerCaseTagName: false });

  root.querySelectorAll('[print-content]').forEach((element) => {
    // debugger;
    const content = element.textContent;
    element.set_content(`<span v-test print-content="${content}">${content}</span>`);
  });

  return root.toString();
};