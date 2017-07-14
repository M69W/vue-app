var host = window.location.origin

export default {
  list: host + '/data/list.json',
  detail: function (id) {
    return host + '/data/detail_' + id + '.json'
  }
}
