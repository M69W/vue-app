/* global JTaro */

import html from './header.html'
import share from '../plugins/share.js'

export default {
  props: ['title'],
  template: html,
  methods: {
    'goBack': function () {
      this.go(JTaro.views[JTaro.views.length - 2])
    },
    'alertShare': function () {
      share.show()
    }
  },
  computed: {
    // 判断是否是子页面
    'subPage': function () {
      return JTaro.views.length > 1
    }
  }
}
