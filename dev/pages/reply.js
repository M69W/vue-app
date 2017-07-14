/* global JRoll */

import comHeader from './components/header.js'
import comComment from './components/comment.js'
import html from './reply.html'

export default {
  components: {
    'com-header': comHeader,
    'com-comment': comComment
  },
  data: function () {
    return { detail: {}}
  },
  template: html,
  afterEnter: function (params) {
    this.detail = params.detail
    this.jroll = new JRoll(this.$el.querySelector('.reply-body'))
  },
  updated: function () {
    if (this.jroll) this.jroll.refresh()
  }
}
