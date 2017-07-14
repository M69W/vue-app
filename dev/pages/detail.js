/* global axios,JRoll */

import comHeader from './components/header.js'
import comComment from './components/comment.js'
import html from './detail.html'
import '../vendors/axios.min.js'
import api from './interface/api.js'

export default {
  components: {
    'com-header': comHeader,
    'com-comment': comComment
  },
  template: html,
  data: function () {
    return { detail: {}}
  },
  beforeEnter: function (cb) {
    cb(function () {
      this.detail = {}
      if (this.jroll) this.jroll.scrollTo(0, 0)
    })
  },
  afterEnter: function (params) {
    // params为null时不进行数据刷新
    if (!params) return

    var me = this

    this.jroll = new JRoll(this.$el.querySelector('.detail-body'))

    axios.get(api.detail(params.id)).then(function (res) {
      if (res.data.msg === 'success') {
        me.detail = res.data.result
      }
    })
  },
  updated: function () {
    if (this.jroll) this.jroll.refresh()
  },
  computed: {
    commentLength: function () {
      return this.detail.comment ? this.detail.comment.length : 0
    }
  }
}
