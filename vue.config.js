const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  outputDir: 'docs',
  publicPath: '/',
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    vuetify: {

    },
  },
  chainWebpack: (config) => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
      });
  },
  parallel: process.env.NODE_ENV !== 'production',
});
