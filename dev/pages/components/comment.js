import html from './comment.html'
import share from '../plugins/share.js'
import commentBox from '../plugins/commentBox.js'

export default {
  template: html,
  props: ['count', 'detail'],
  methods: {
    popShareBox: function () {
      share.show()
    },
    gotoCommentDetail: function () {
      if (isNaN(Number(this.count))) {
        this.go('pages/detail')
      } else {
        this.go('pages/reply', {
          detail: this.detail
        })
      }
    },
    popCommentBox: function () {
      commentBox.show()
    }
  }
}
