// module.exports = function (source) {
//     // 使用正则表达式将<h1>替换为<p>
//     const replacedSource = source.replace(/<h1/g, '<p').replace(/<\/h1>/g, '</p>');
  
//     // 返回处理后的内容作为JavaScript模块
//     return `module.exports = ${JSON.stringify(replacedSource)}`;
//   };


module.exports = function (source) {
    // 使用正则表达式将<h1>替换为<p>
    const replacedSource = source.replace(/<h1/g, '<p').replace(/<\/h1>/g, '</p>');
  
    return replacedSource;
  };