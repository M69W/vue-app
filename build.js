// nodejs
var jtaroBundle = require('jtaro-bundle')
var uglify = require('rollup-plugin-uglify')
var babel = require('rollup-plugin-babel')

jtaroBundle.bundle({
  rollupPlugins: [babel({
    include: './dev/pages/*.js', // 相对于该脚本文件
    presets: [
      [
        'es2015',
        {
          'modules': false
        }
      ]
    ]
  }),
    uglify()],
  origin: 'dev/index.html',  // 站点目录
  target: 'pro/index.html',  // 源目录
  copies: ['./assets/', './data/'],  // 目标文件
  sourceMap: true
})
