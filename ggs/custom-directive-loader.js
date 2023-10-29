const { parse } = require('node-html-parser');

module.exports = function (source) {
  // 使用 HTML Parser 解析HTML内容
  const root = parse(source, { lowerCaseTags: false });

//   const htmlTagPattern = /<[^>]*>/;

//   // 使用正则表达式测试输入的HTML字符串
//   return !htmlTagPattern.test(htmlString);

  // 查找包含 lang='en' 特性的元素
  const enElements = root.querySelectorAll('[lang="en"]');

  // 为每个匹配的元素添加自定义指令 v-my-directive
  enElements.forEach((element) => {
    element.setAttribute('v-my-directive', '');
  });

  // 返回更新后的HTML内容
  return root.toString();
};