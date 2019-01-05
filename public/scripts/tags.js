
riot.tag2('app', '<div class="header"><a href="#">Top</a><br><a href="#about">About</a><br><a href="#test/test">Modal Test Link</a></div> <div class="wrap-content"> <content></content> <modal-content></modal-content> </div>', 'app,[data-is="app"]{display:block;width:100%;height:100vh} app .wrap-content,[data-is="app"] .wrap-content{position:relative;display:block;width:100%;height:100%;overflow-x:hidden} app .wrap-content content,[data-is="app"] .wrap-content content{display:block;position:absolute;z-index:1;width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;top:0;left:0;background:#fff;transition:all .4s;opacity:0} app .wrap-content .not-opacity,[data-is="app"] .wrap-content .not-opacity{opacity:1} app .wrap-content modal-content,[data-is="app"] .wrap-content modal-content{display:block;position:absolute;z-index:2;width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;top:0;background:#fff;transition:all .4s;opacity:0;left:100%} app .wrap-content .show,[data-is="app"] .wrap-content .show{opacity:1;left:0}', '', function(opts) {
    var self = this;

    this.contents = {
      test: {
        title: 'title',
        body: 'body',
        label: 'link label',
      },
    };
});

riot.tag2('page-about', '<div class="warp-page"> <h2>About</h2> </div>', 'page-about .warp-page,[data-is="page-about"] .warp-page{display:block;width:100%;height:100%;background:#FF00FF}', '', function(opts) {
    this.on('mount', function(){

    });
});

riot.tag2('page-test', '<div class="wrap-page"></div> <h2>test</h2>', 'page-test .wrap-page,[data-is="page-test"] .wrap-page{display:block;width:100%;height:100%;background:#00FFFF}', '', function(opts) {
    var self = this;

    this.on('mount', function(){
      $('modal-content').addClass('show');
      $('modal-content').scrollTop(0);

      riot.enableFadeIn = false;

      $(document).on("custom:close", function() {
        $('modal-content').removeClass('show');
        self.unmount(true);
      });
    });
});

riot.tag2('page-top', '<div class="wrap-page"> <h2>top</h2> </div>', 'page-top .wrap-page,[data-is="page-top"] .wrap-page{display:block;width:100%;height:100%;background:#FFFF00}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('temp', '', '', '', function(opts) {
    this.on('mount', function(){

    });
});