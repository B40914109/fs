// .postcssrc.js
module.exports = {
    plugins: {
        'postcss-scss': {},
        'postcss-custom-properties': {},
        './postcss-plugin.js': {}  // 路径根据你的实际项目结构调整
    }
};
