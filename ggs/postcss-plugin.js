const postcss = require('postcss');
//consoel.log(1);
module.exports = postcss.plugin('custom-theme-plugin', () => {
    console.log("hello..11111111111111.");
    return (root) => {
        root.walkRules((rule) => {
            rule.walkDecls((decl) => {
                if (decl.value.includes('pick')) {
                    // 使用正则表达式提取 get 函数的参数
                    const match = decl.value.match(/pick\(([^,]+),\s*([^)]+)\)/);
                    if (match) {
                        const variableName = `--dy${Math.floor(Math.random() * 10000)}`;

                        // 获取 get 函数的参数值
                        const v1 = match[1];
                        const v2 = match[2];

                        // 替换声明的值为 CSS 变量
                        decl.value = `var(${variableName})`;

                        // 在父级添加对应的主题类
                        rule.parent.append({
                            selector: '.theme-light',
                            nodes: [{
                                prop: variableName,
                                value: v1
                            }]
                        });

                        rule.parent.append({
                            selector: '.theme-dark',
                            nodes: [{
                                prop: variableName,
                                value: v2
                            }]
                        });
                    }
                }
            });
        });
    };
});
