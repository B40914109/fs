// dynamicCssVariableLoader.js
module.exports = function (source) {
    // 在这里可以对原始的 SCSS 进行处理
    // 例如，你可以解析 SCSS，找到其中的 get 函数并进行替换
    const processedSource = processSource(source);

    return processedSource;
};

function processSource(source) {
    // 在这里实现对 get 函数的处理逻辑
    // 例如使用正则表达式进行替换
    const regex = /get\(([^,]+),([^)]+)\)/g;
    const processedSource = source.replace(regex, (_, v1, v2) => {
        // 在这里实现替换逻辑，返回处理后的结果
        // 这里仅作示例，实际逻辑根据需求调整
        return `var(--dy1234 == 'theme-light' ? ${v1} : ${v2})`;
    });

    return processedSource;
}
