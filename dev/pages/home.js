/* global axios,JRoll */

import html from './home.html'
import '../vendors/axios.min.js'
import '../vendors/jroll-vue-infinite.js'
import api from './interface/api.js'

export default {
  components: {
    'jroll-infinite': JRoll.VueInfinite({
      bottomed () {
        const parent = this.$parent
        const me = this
        this.tip = '没有更多数据啦！'
        if (me.page === 0) {
          axios.get(api.list).then(function (res) {
            if (res.data.msg === 'success') {
              me.page++
              parent.items = res.data.result
            }
          })
        }
      }
    })
  },
  template: html,
  data () {
    return { items: [] }
  },
  methods: {
    gotoDetail: function (id) {
      this.go('pages/detail?id=' + id)
    }
  }
}
