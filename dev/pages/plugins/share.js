import html from './share.html'
import './share.css'

export default {
  _findLiBtn: function (tg) {
    while (tg.id !== '__plugins_share_box__') {
      if (tg.tagName === 'LI') {
        return tg.dataset.tag
      }
      tg = tg.parentElement
    }
    return null
  },
  _init: function () {
    var me = this
    this.div = document.createElement('div')
    this.div.id = '__plugins_share__'
    this.div.innerHTML = html
    document.body.appendChild(this.div)

    this.div.addEventListener('click', function (e) {
      var tag = ''
      if (e.target.id === '__plugins_share__' || e.target.id === '__plugins_share_cancel__') {
        me.hide()
      } else if ((tag = me._findLiBtn(e.target))) {
        window.alert('分享到' + tag)
      }
    }, false)
  },
  show: function () {
    if (!this.div) {
      this._init()
    } else {
      this.div.style.display = 'block'
    }
  },
  hide: function () {
    this.div.style.display = 'none'
  }
}
