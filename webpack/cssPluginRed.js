module.exports = () => {
    return {
        postcssPlugin: 'cssPluginRed',
        Once: (root, { result }) => {
            root.walkDecls((decl) => {
                if (decl.prop === 'color') {
                    decl.value = 'blue';
                }
            });
        },
    };
};

module.exports.postcss = true;