var babel = require('rollup-plugin-babel')

module.exports = {
  website: '../', // 站点目录，以server.js所在路径为基准
  entry: '../pages.js', // 入口文件，以server.js所在路径为基准
  plugins: [babel({
    include: './pages/*.js', // 相对入口文件
    presets: [
      [
        'es2015',
        {
          'modules': false
        }
      ]
    ]
  })]
}
