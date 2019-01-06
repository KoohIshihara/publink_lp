
riot.tag2('app', '<div class="wrap-content"> <content></content> <modal-content></modal-content> </div>', 'app,[data-is="app"]{display:block;width:100%;height:100vh} app .wrap-content,[data-is="app"] .wrap-content{position:relative;display:block;width:100%;height:100%;overflow-x:hidden} app .wrap-content content,[data-is="app"] .wrap-content content{display:block;position:absolute;z-index:1;width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;top:0;left:0;background:#fff;transition:all .4s;opacity:0} app .wrap-content .not-opacity,[data-is="app"] .wrap-content .not-opacity{opacity:1} app .wrap-content modal-content,[data-is="app"] .wrap-content modal-content{display:block;position:absolute;z-index:2;width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;top:0;background:#fff;transition:all .4s;opacity:0;left:100%} app .wrap-content .show,[data-is="app"] .wrap-content .show{opacity:1;left:0}', '', function(opts) {
    var self = this;

    this.contents = {
      test: {
        title: 'title',
        body: 'body',
        label: 'link label',
      },
    };
});

riot.tag2('module-about-service', '<div class="wrap-module"> <h2>module-about-service</h2> </div>', 'module-about-service .wrap-module,[data-is="module-about-service"] .wrap-module{display:block;width:100%;max-width:1024px;margin:0 auto}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('module-contact', '<div class="wrap-module"> <h2>module-cooperates</h2> </div>', 'module-contact .wrap-module,[data-is="module-contact"] .wrap-module{display:block;width:100%;max-width:1024px;margin:0 auto}', '', function(opts) {
      var self = this;

      this.on('mount', function(){

      });
});

riot.tag2('module-cooperates', '<div class="wrap-module"> <h2>module-cooperates</h2> </div>', 'module-cooperates .wrap-module,[data-is="module-cooperates"] .wrap-module{display:block;width:100%;max-width:1024px;margin:0 auto}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('module-customer-voice', '<div class="wrap-module"> <h2>module-customer-voice</h2> </div>', 'module-customer-voice .wrap-module,[data-is="module-customer-voice"] .wrap-module{display:block;width:100%;max-width:1024px;margin:0 auto}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('module-feature', '<div class="wrap-module"> <h2>module-feature</h2> </div>', 'module-feature .wrap-module,[data-is="module-feature"] .wrap-module{display:block;width:100%;max-width:1024px;margin:0 auto}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('module-hiro', '<div class="wrap-module"> <h2>module-hiro</h2> </div>', 'module-hiro .wrap-module,[data-is="module-hiro"] .wrap-module{display:block;width:100%;max-width:1024px;margin:0 auto}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('module-member', '<div class="wrap-module"> <h2>module-member</h2> </div>', 'module-member .wrap-module,[data-is="module-member"] .wrap-module{display:block;width:100%;max-width:1024px;margin:0 auto}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
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

riot.tag2('page-top', '<div class="wrap-page"> <module-hiro></module-hiro> <module-about-service></module-about-service> <module-feature></module-feature> <module-customer-voice></module-customer-voice> <module-cooperates></module-cooperates> <module-member></module-member> <module-contact></module-contact> </div>', 'page-top .wrap-page,[data-is="page-top"] .wrap-page{display:block;width:100%}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('temp', '', '', '', function(opts) {
    this.on('mount', function(){

    });
});