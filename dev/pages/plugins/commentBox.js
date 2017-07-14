import html from './commentBox.html'
import './commentBox.css'

export default {
  _init: function () {
    var me = this
    this.div = document.createElement('div')
    this.div.id = '__plugins_comment_box__'
    this.div.innerHTML = html
    document.body.appendChild(this.div)

    this.box = document.getElementById('__plugins_comment_box_textarea__')

    document.getElementById('__plugins_comment_box_lbtn__').onclick = function () {
      me.div.style.display = 'none'
    }
    document.getElementById('__plugins_comment_box_rbtn__').onclick = function () {
      me.box.value = ''
      me.div.style.display = 'none'
    }
  },
  show: function () {
    if (!this.div) {
      this._init()
    } else {
      this.div.style.display = 'block'
    }
    this.box.focus()
  },
  hide: function () {
    this.div.style.display = 'none'
  }
}
