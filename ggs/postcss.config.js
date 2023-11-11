// postcss.config.js
module.exports = {
    plugins: [
        function (css) {
            css.walkDecls(decl => {
                if (decl.value.includes('get(')) {
                    // 这里可以实现对 get 函数的替换逻辑
                    // 例如，使用正则表达式进行替换
                    decl.value = decl.value.replace(/get\(([^,]+),([^)]+)\)/g, (_, v1, v2) => {
                        return `var(--dy1234 == 'theme-light' ? ${v1} : ${v2})`;
                    });
                }
            });
        },
    ],
};
