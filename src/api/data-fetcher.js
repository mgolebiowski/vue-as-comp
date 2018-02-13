import Model from "fishbone"
import $ from "jquery"

export default new Model({
  init: function (pref) {
    this.url = pref.url
  },

  fetch: function () {
    return $.ajax({url: this.url});
  },

  update: function () {
    this.fetch().then( function (resp) {
      this.data = resp
      this.trigger("done")
    }.bind(this))
  },

  updateWithTimeout: function() {
    window.setTimeout(this.update, 1000)
  }
})