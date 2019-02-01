var TO_SCROLL = {
  toScroll: function(query) {
    var offset = $(query).offset();
    var d = new $.Deferred();
    var p = $('html,body,content');
    var nowPosX = document.getElementsByTagName('content')[0].scrollTop;
    if(!(p.is(':animated'))){ // アニメーションしていなければ
      p.animate({scrollTop: nowPosX + offset.top - 100}, 800, 'easeOutCubic', function() {
        d.resolve();
      });
    }
    return d;
  },
};


var closeModalWindow = function() {
  $('.wrap-modal-window').fadeOut(400);
}