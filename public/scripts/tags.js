
riot.tag2('app', '<div class="wrap-content"> <content></content> <modal-content></modal-content> <div class="wrap-modal-window"> <div class="wrap-modal-window-content f fh"> <modal-window></modal-window> <div class="overlay" onclick="{closeModalWindow}"></div> </div> </div> </div>', 'app,[data-is="app"]{display:block;width:100%;height:100vh} app .wrap-content,[data-is="app"] .wrap-content{position:relative;display:block;width:100%;height:100%;overflow-x:hidden} app .wrap-content content,[data-is="app"] .wrap-content content{display:block;position:absolute;z-index:1;width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;top:0;left:0;background:#fff;transition:all .4s;opacity:0} app .wrap-content .not-opacity,[data-is="app"] .wrap-content .not-opacity{opacity:1} app .wrap-content modal-content,[data-is="app"] .wrap-content modal-content{display:block;position:absolute;z-index:2;width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;top:0;background:#fff;transition:all .4s;opacity:0;left:100%} app .wrap-content .show,[data-is="app"] .wrap-content .show{opacity:1;left:0} app .wrap-modal-window,[data-is="app"] .wrap-modal-window{position:fixed;display:none;width:100%;height:100%;z-index:100} app .wrap-modal-window .wrap-modal-window-content,[data-is="app"] .wrap-modal-window .wrap-modal-window-content{width:100%;height:100%;position:relative} app .wrap-modal-window .wrap-modal-window-content modal-window,[data-is="app"] .wrap-modal-window .wrap-modal-window-content modal-window{z-index:101} app .wrap-modal-window .wrap-modal-window-content .overlay,[data-is="app"] .wrap-modal-window .wrap-modal-window-content .overlay{background:rgba(0,0,0,0.4);display:block;position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;cursor:pointer}', '', function(opts) {
    var self = this;

    this.contents = {
      test: {
        title: 'title',
        body: 'body',
        label: 'link label',
      },
    };

    this.closeModalWindow = closeModalWindow;
});

riot.tag2('atom-button-contact', '<a class="wrap-atom f fh"> <p>お問い合わせはこちら</p></a>', 'atom-button-contact,[data-is="atom-button-contact"]{cursor:pointer;display:block;width:240px;height:48px;background:#fff;border-radius:30px} atom-button-contact .wrap-atom,[data-is="atom-button-contact"] .wrap-atom{height:48px} atom-button-contact .wrap-atom p,[data-is="atom-button-contact"] .wrap-atom p{text-align:center;color:#005BE9;font-weight:600;font-size:16px}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('atom-button-open-member-detail', '<a class="wrap-atom">プロフィールをみる</a>', 'atom-button-open-member-detail,[data-is="atom-button-open-member-detail"]{display:block;width:70%;border-radius:20px;background:#ECF0F4;cursor:pointer} atom-button-open-member-detail a,[data-is="atom-button-open-member-detail"] a{display:block;font-size:14px;text-align:center}', 'class="py8" onclick="{showProfile.bind(this, opts.content)}"', function(opts) {
    var self = this;

    this.on('mount', function(){

    });

    this.showProfile = function(content, e){

      $('.wrap-modal-window').fadeIn(400);

      riot.mount('modal-window', 'module-modal-member', {content: content});
      riot.update();

    }
});

riot.tag2('item-about', '<div class="{opts.content.reverse} wrap-item f flex-wrap flex-around"> <div class="wrap-img f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-texts f fm"> <div class="wrap-texts-content"> <h3 class="mb12">{opts.content.h3}</h3> <p>{opts.content.p}</p> </div> </div> </div>', 'item-about,[data-is="item-about"]{display:block;background:#F1F1F6} item-about .wrap-item .wrap-img,[data-is="item-about"] .wrap-item .wrap-img{width:40%} item-about .wrap-item .wrap-texts,[data-is="item-about"] .wrap-item .wrap-texts{width:60%} item-about .wrap-item .wrap-texts .wrap-texts-content h3,[data-is="item-about"] .wrap-item .wrap-texts .wrap-texts-content h3{font-size:20px} item-about .reverse,[data-is="item-about"] .reverse{flex-flow:row-reverse}@media only screen and (max-width:600px){ item-about .wrap-item,[data-is="item-about"] .wrap-item{display:block;padding:16px 0} item-about .wrap-item .wrap-img,[data-is="item-about"] .wrap-item .wrap-img{width:100%;margin-bottom:24px} item-about .wrap-item .wrap-texts,[data-is="item-about"] .wrap-item .wrap-texts{width:100%} item-about .wrap-item .wrap-texts .wrap-texts-content,[data-is="item-about"] .wrap-item .wrap-texts .wrap-texts-content{width:90%;margin:0 auto}}', '', function(opts) {
});

riot.tag2('item-cooperate', '<div class="wrap-item mb30"> <div class="wrap-img mb20"><img riot-src="{opts.content.src}"></div> <div class="wrap-title"> <p>{opts.content.p}</p> </div> </div>', 'item-cooperate,[data-is="item-cooperate"]{display:block;width:22%} item-cooperate .wrap-item .wrap-img img,[data-is="item-cooperate"] .wrap-item .wrap-img img{width:100%} item-cooperate .wrap-item .wrap-title p,[data-is="item-cooperate"] .wrap-item .wrap-title p{text-align:center}@media only screen and (max-width:600px){ item-cooperate,[data-is="item-cooperate"]{width:80%;margin:0 auto;padding-bottom:40px}}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('item-customer-voice', '<div class="wrap-item"> <div class="wrap-img"><img riot-src="{opts.content.src}"></div> <div class="wrap-title pt28 pl60 pr20"> <h3 class="mb12">{opts.content.h3}</h3> <p>{opts.content.p}</p> </div> <div class="wrap-icon"><img src="./img/icons/bg_icon.svg"></div> </div>', 'item-customer-voice,[data-is="item-customer-voice"]{display:block;width:47%;height:300px;background:#FFF} item-customer-voice .wrap-item,[data-is="item-customer-voice"] .wrap-item{position:relative;height:100%} item-customer-voice .wrap-item .wrap-img,[data-is="item-customer-voice"] .wrap-item .wrap-img{position:absolute;top:-40px;left:-40px;width:80px;height:80px} item-customer-voice .wrap-item .wrap-img img,[data-is="item-customer-voice"] .wrap-item .wrap-img img{width:100%;border-radius:50%} item-customer-voice .wrap-item .wrap-title p,[data-is="item-customer-voice"] .wrap-item .wrap-title p{font-size:14px;color:#707070;line-height:1.8} item-customer-voice .wrap-item .wrap-icon,[data-is="item-customer-voice"] .wrap-item .wrap-icon{position:absolute;right:30px;bottom:30px}@media only screen and (max-width:600px){ item-customer-voice,[data-is="item-customer-voice"]{width:80%;height:400px;margin:0 auto}}', 'class="mb60"', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('item-feature', '<div class="wrap-item"> <div class="wrap-img mb12 f fh"> <div class="img-frame"><img riot-src="{opts.content.src}"></div> </div> <div class="wrap-explain"> <h3 class="mb8">{opts.content.h3}</h3> <p>{opts.content.p}</p> </div> </div>', 'item-feature,[data-is="item-feature"]{width:22%;display:block;background:#EDEDF2} item-feature .wrap-item,[data-is="item-feature"] .wrap-item{display:block;max-width:840px;margin:0 auto} item-feature .wrap-item .wrap-img,[data-is="item-feature"] .wrap-item .wrap-img{width:100%} item-feature .wrap-item .wrap-img .img-frame,[data-is="item-feature"] .wrap-item .wrap-img .img-frame{border-radius:50%;background:rgba(0,91,233,0.1);padding:30px} item-feature .wrap-item .wrap-explain h3,[data-is="item-feature"] .wrap-item .wrap-explain h3{text-align:center} item-feature .wrap-item .wrap-explain p,[data-is="item-feature"] .wrap-item .wrap-explain p{font-size:14px;text-align:center;font-weight:lighter}@media only screen and (max-width:600px){ item-feature,[data-is="item-feature"]{width:80%;margin:0 auto;padding-bottom:40px}}', '', function(opts) {
var self = this;
});

riot.tag2('item-h2', '<div class="wrap-item"> <h2 class="pt16">{jp}</h2> <div class="wrap-en"> <h2>{en}</h2> </div> </div>', 'item-h2,[data-is="item-h2"]{display:block} item-h2 .wrap-item,[data-is="item-h2"] .wrap-item{position:relative} item-h2 .wrap-item h2,[data-is="item-h2"] .wrap-item h2{position:relative;z-index:2;text-align:center;color:#5B5B5B;font-size:32px} item-h2 .wrap-item .wrap-en,[data-is="item-h2"] .wrap-item .wrap-en{position:absolute;left:0;top:0;width:100%;z-index:1} item-h2 .wrap-item .wrap-en h2,[data-is="item-h2"] .wrap-item .wrap-en h2{text-align:center;font-size:52px;color:#fff}', 'class="mb20"', function(opts) {
    this.jp = opts.content.jp;
    this.en = opts.content.en;
});

riot.tag2('item-member-welcome', '<div class="wrap-item f fh"> <div class="wrap-item-content"> <p class="mb28">あなたもパートナーメンバーに参加しませんか？ </p> <div class="wrap-button f fc"><a class="px12 py8">パートナーに登録</a></div> </div> </div>', 'item-member-welcome,[data-is="item-member-welcome"]{display:block;width:25%;height:inherit;background:#005BE9} item-member-welcome .wrap-item,[data-is="item-member-welcome"] .wrap-item{width:100%;height:100%} item-member-welcome .wrap-item .wrap-item-content,[data-is="item-member-welcome"] .wrap-item .wrap-item-content{width:80%;margin:auto 0} item-member-welcome .wrap-item .wrap-item-content p,[data-is="item-member-welcome"] .wrap-item .wrap-item-content p{color:#FFF;text-align:center} item-member-welcome .wrap-item .wrap-item-content .wrap-button a,[data-is="item-member-welcome"] .wrap-item .wrap-item-content .wrap-button a{width:100%;max-width:220px;display:block;background:#FFF;border-radius:20px;text-align:center;color:#005BE9;cursor:pointer}@media only screen and (max-width:600px){ item-member-welcome,[data-is="item-member-welcome"]{width:100%;height:400px;margin:0 auto}}', '', function(opts) {
var self = this;
});

riot.tag2('item-member', '<div class="wrap-item"> <div class="wrap-img f fh mb12"><img riot-src="{opts.content.src}"></div> <div class="wrap-profile mb20"> <p class="role mb4">{opts.content.role}</p> <p class="name">{opts.content.name}</p> </div> <div class="wrap-button f fc pb30"> <atom-button-open-member-detail content="{opts.content}"></atom-button-open-member-detail> </div> </div>', 'item-member,[data-is="item-member"]{display:block;width:25%} item-member .wrap-item .wrap-img,[data-is="item-member"] .wrap-item .wrap-img{width:100%} item-member .wrap-item .wrap-img img,[data-is="item-member"] .wrap-item .wrap-img img{width:70%;border-radius:50%} item-member .wrap-item .wrap-profile .role,[data-is="item-member"] .wrap-item .wrap-profile .role{font-size:12px;color:#999;text-align:center} item-member .wrap-item .wrap-profile .name,[data-is="item-member"] .wrap-item .wrap-profile .name{font-size:14px;color:#2a2a2a;text-align:center} item-member.show-detail,[data-is="item-member"].show-detail{width:80% !important;margin:0 auto}@media only screen and (max-width:600px){ item-member,[data-is="item-member"]{width:80%;margin:0 auto}}', '', function(opts) {
var self = this;
});

riot.tag2('module-about-service', '<div class="wrap-module py80"> <item-h2 content="{h2}"></item-h2> <div class="wrap-module-content mt24"> <item-about each="{item in aboutContents}" content="{item}"></item-about> </div> </div>', 'module-about-service,[data-is="module-about-service"]{display:block;background:#F1F1F6} module-about-service .wrap-module,[data-is="module-about-service"] .wrap-module{display:block;width:100%;max-width:840px;margin:0 auto}', '', function(opts) {
    var self = this;

    this.h2 = {
      jp: 'サービス内容',
      en: 'WHAT WE CAN DO'
    };

    this.aboutContents = [
      {
        h3: '最適な人材マッチング',
        p: '「シェアリングエコノミー」「フィンテック」「エドテックなど」、今、社会は人々の想像を大きく超えるスピードで変化しています。これからの時代、ますます必要とされるのが官民の連携です。私たち Publink は、新しい社会を共創するための「社会性（政策サイド）」と「事業性（ビジネスサイド）」の両サイドの架け橋となります。',
        src: './img/about/test.svg',
      },
      {
        h3: '最適な人材マッチング',
        p: '「シェアリングエコノミー」「フィンテック」「エドテックなど」、今、社会は人々の想像を大きく超えるスピードで変化しています。これからの時代、ますます必要とされるのが官民の連携です。私たち Publink は、新しい社会を共創するための「社会性（政策サイド）」と「事業性（ビジネスサイド）」の両サイドの架け橋となります。',
        src: './img/about/test.svg',
        reverse: 'reverse'
      }
    ];

    this.on('mount', function(){

    });
});

riot.tag2('module-contact', '<div class="wrap-module py60"> <p class="title mb32">まずは気軽にご相談を</p> <div class="wrap-texts mb50"> <p class="mb12">「官僚との接点を作りたい」</p> <p class="mb12">「事業を推進するにあたって行政との連携を考えていきたい」</p> <p class="mb12">「官民、両サイドのことを理解している人材を採用したい」</p> <p class="mb12"> もし、そんなお悩みをお持ちでしたら、全力で私たちにサポートさせてください。</p> <p class="mb12"> 私たちは本気で、この国の社会構造を変えようと考えています。</p> <p>まずはお気軽にご相談を。</p> </div> <div class="wrap-button f fc"><a class="px12 py8">お問い合わせはこちら</a></div> </div>', 'module-contact,[data-is="module-contact"]{display:block;background:#005BE9} module-contact .wrap-module,[data-is="module-contact"] .wrap-module{display:block;width:100%;max-width:520px;margin:0 auto} module-contact .wrap-module p,[data-is="module-contact"] .wrap-module p{color:#FFF;text-align:center;font-weight:lighter;font-size:14px} module-contact .wrap-module .title,[data-is="module-contact"] .wrap-module .title{font-size:24px;font-weight:bold} module-contact .wrap-module .wrap-button a,[data-is="module-contact"] .wrap-module .wrap-button a{width:100%;max-width:220px;display:block;background:#FFF;border-radius:20px;text-align:center;color:#005BE9;cursor:pointer}@media only screen and (max-width:600px){ module-contact .wrap-module,[data-is="module-contact"] .wrap-module{width:90%;margin:0 auto} module-contact .wrap-module .wrap-texts p,[data-is="module-contact"] .wrap-module .wrap-texts p{text-align:left}}', '', function(opts) {
      var self = this;

      this.on('mount', function(){

      });
});

riot.tag2('module-cooperates', '<div class="wrap-module py80"> <item-h2 content="{h2}"></item-h2> <div class="wrap-module-content f flex-around flex-wrap mt32 px20 pt50 pb30"> <item-cooperate each="{item in partonershipContents}" content="{item}"></item-cooperate> </div> </div>', 'module-cooperates,[data-is="module-cooperates"]{display:block;background:#EDEDF2} module-cooperates .wrap-module,[data-is="module-cooperates"] .wrap-module{display:block;width:100%;max-width:1040px;margin:0 auto} module-cooperates .wrap-module .wrap-module-content,[data-is="module-cooperates"] .wrap-module .wrap-module-content{background:#FFF}@media only screen and (max-width:600px){ module-cooperates .wrap-module .wrap-module-content,[data-is="module-cooperates"] .wrap-module .wrap-module-content{width:90%;margin:0 auto}}', '', function(opts) {
    var self = this;

    this.h2 = {
      jp: 'パートナー企業のご紹介',
      en: 'PARTONERSHIP'
    };

    this.partonershipContents = [
      {
        p: '株式会社FakeSFC',
        src: './img/cooperates/test.svg',
      },
      {
        p: '株式会社FakeSFC',
        src: './img/cooperates/test.svg',
      },
      {
        p: '株式会社FakeSFC',
        src: './img/cooperates/test.svg',
      },
      {
        p: '株式会社FakeSFC',
        src: './img/cooperates/test.svg',
      },
      {
        p: '株式会社FakeSFC',
        src: './img/cooperates/test.svg',
      },
      {
        p: '株式会社FakeSFC',
        src: './img/cooperates/test.svg',
      },
      {
        p: '株式会社FakeSFC',
        src: './img/cooperates/test.svg',
      },
      {
        p: '株式会社FakeSFC',
        src: './img/cooperates/test.svg',
      },
    ];

    this.on('mount', function(){

    });
});

riot.tag2('module-customer-voice', '<div class="wrap-module py80"> <item-h2 content="{h2}"></item-h2> <div class="wrap-module-content f flex-between flex-wrap mt24 pt50"> <item-customer-voice each="{item in customerVoiceContents}" content="{item}"></item-customer-voice> </div> </div>', 'module-customer-voice,[data-is="module-customer-voice"]{display:block;background:#F1F1F6} module-customer-voice .wrap-module,[data-is="module-customer-voice"] .wrap-module{display:block;width:100%;max-width:1040px;margin:0 auto}@media only screen and (max-width:600px){ module-customer-voice .wrap-module .wrap-module-content,[data-is="module-customer-voice"] .wrap-module .wrap-module-content{width:90%;margin:0 auto}}', '', function(opts) {
    var self = this;

    this.h2 = {
      jp: 'お客様の声',
      en: 'Customer Voice'
    };

    this.customerVoiceContents = [
      {
        h3: '株式会社FakeSFC',
        p: '「シェアリングエコノミー」「フィンテック」「エドテックなど」、今、社会は人々の想像を大きく超えるスピードで変化しています。これからの時代、ますます必要とされるのが官民の連携です。私たち Publink は、新しい社会を共創するための「社会性（政策サイド）」と「事業性（ビジネスサイド）」の両サイドの架け橋となります。',
        src: './img/customer_voices/test.jpg',
      },
      {
        h3: '株式会社FakeSFC',
        p: '「シェアリングエコノミー」「フィンテック」「エドテックなど」、今、社会は人々の想像を大きく超えるスピードで変化しています。これからの時代、ますます必要とされるのが官民の連携です。私たち Publink は、新しい社会を共創するための「社会性（政策サイド）」と「事業性（ビジネスサイド）」の両サイドの架け橋となります。',
        src: './img/customer_voices/test.jpg',
      },
      {
        h3: '株式会社FakeSFC',
        p: '「シェアリングエコノミー」「フィンテック」「エドテックなど」、今、社会は人々の想像を大きく超えるスピードで変化しています。これからの時代、ますます必要とされるのが官民の連携です。私たち Publink は、新しい社会を共創するための「社会性（政策サイド）」と「事業性（ビジネスサイド）」の両サイドの架け橋となります。',
        src: './img/customer_voices/test.jpg',
      },
      {
        h3: '株式会社FakeSFC',
        p: '「シェアリングエコノミー」「フィンテック」「エドテックなど」、今、社会は人々の想像を大きく超えるスピードで変化しています。これからの時代、ますます必要とされるのが官民の連携です。私たち Publink は、新しい社会を共創するための「社会性（政策サイド）」と「事業性（ビジネスサイド）」の両サイドの架け橋となります。',
        src: './img/customer_voices/test.jpg',
      },
    ];

    this.on('mount', function(){

    });
});

riot.tag2('module-feature', '<div class="wrap-module py80"> <item-h2 content="{h2}"></item-h2> <div class="wrap-module-content f flex-between flex-wrap mt24 py20"> <item-feature each="{item in featuresContents}" content="{item}"></item-feature> </div> </div>', 'module-feature,[data-is="module-feature"]{display:block;background:#EDEDF2} module-feature .wrap-module,[data-is="module-feature"] .wrap-module{display:block;width:100%;max-width:1040px;margin:0 auto}', '', function(opts) {
    var self = this;

    this.h2 = {
      jp: '特徴',
      en: 'MENTIONS'
    };

    this.featuresContents = [
      {
        h3: '専門知識',
        p: '官民両方を実際に経験したプロフェッショナルによるコンサルティング',
        src: './img/features/test.svg'
      },
      {
        h3: '専門知識',
        p: '官民両方を実際に経験したプロフェッショナルによるコンサルティング',
        src: './img/features/test.svg'
      },
      {
        h3: '専門知識',
        p: '官民両方を実際に経験したプロフェッショナルによるコンサルティング',
        src: './img/features/test.svg'
      },
      {
        h3: '専門知識',
        p: '官民両方を実際に経験したプロフェッショナルによるコンサルティング',
        src: './img/features/test.svg'
      },
    ];

    this.on('mount', function(){

    });
});

riot.tag2('module-hiro', '<div class="wrap-module f fm"> <div class="wrap-texts"> <div class="wrap-copy mb32"> <p>官と民をつないで、</p> <p>日本を変えよう</p> </div> <div class="wrap-tagline mb50"> <p>「シェアリングエコノミー」「フィンテック」「エドテックなど」、今、社会は人々の想像を大きく超えるスピードで変化しています。これからの時代、ますます必要とされるのが</p> </div> <div class="wrap-button"> <atom-button-contact></atom-button-contact> </div> </div> </div> <div class="wrap-bg"></div>', 'module-hiro,[data-is="module-hiro"]{display:block;width:100%;height:80vh;background:#005BE9;position:relative} module-hiro .wrap-module,[data-is="module-hiro"] .wrap-module{position:relative;z-index:10;width:90%;height:100%;max-width:840px;margin:0 auto} module-hiro .wrap-module .wrap-texts,[data-is="module-hiro"] .wrap-module .wrap-texts{max-width:460px} module-hiro .wrap-module .wrap-texts .wrap-copy p,[data-is="module-hiro"] .wrap-module .wrap-texts .wrap-copy p{font-size:48px;font-weight:bold;color:#fff} module-hiro .wrap-module .wrap-texts .wrap-tagline p,[data-is="module-hiro"] .wrap-module .wrap-texts .wrap-tagline p{font-size:16px;color:#fff} module-hiro .wrap-bg,[data-is="module-hiro"] .wrap-bg{display:block;position:absolute;z-index:9;width:100%;height:100%;left:0;top:0}@media only screen and (max-width:600px){ module-hiro .wrap-module .wrap-texts .wrap-copy p,[data-is="module-hiro"] .wrap-module .wrap-texts .wrap-copy p{font-size:36px;font-weight:bold;color:#fff} module-hiro .wrap-module .wrap-texts .wrap-tagline p,[data-is="module-hiro"] .wrap-module .wrap-texts .wrap-tagline p{font-size:16px;color:#fff}}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('module-member', '<div class="wrap-module py80"> <item-h2 content="{h2}"></item-h2> <div class="wrap-module-content f flex-between flex-wrap mt24"> <item-member each="{item in memberContents}" content="{item}"></item-member> <item-member-welcome></item-member-welcome> </div> </div>', 'module-member,[data-is="module-member"]{display:block;background:#F1F1F6} module-member .wrap-module,[data-is="module-member"] .wrap-module{display:block;width:100%;max-width:1040px;margin:0 auto} module-member .wrap-module .wrap-module-content,[data-is="module-member"] .wrap-module .wrap-module-content{background:#FFF}@media only screen and (max-width:600px){ module-member .wrap-module .wrap-module-content,[data-is="module-member"] .wrap-module .wrap-module-content{width:90%;margin:0 auto}}', '', function(opts) {
    var self = this;

    this.h2 = {
      jp: 'メンバーのご紹介',
      en: 'OUR MEMBER'
    };

    this.memberContents = [
      {
        role: '代表取締役',
        name: 'スペキュラティヴ太郎',
        src: './img/member/test.jpg',
        profile: '慶應義塾大学環境情報学部4年。株式会社ニューズピックスにて「NewsPicks」のアプリケーションデザインに従事する傍ら、株式会社モフでデザイナー／エンジニアとしてVRやARを用いたコンテンツ制作などを行う。',
        button_visible: true,
      },
      {
        role: '代表取締役',
        name: 'スペキュラティヴ太郎',
        src: './img/member/test.jpg',
        profile: '慶應義塾大学環境情報学部4年。株式会社ニューズピックスにて「NewsPicks」のアプリケーションデザインに従事する傍ら、株式会社モフでデザイナー／エンジニアとしてVRやARを用いたコンテンツ制作などを行う。',
        button_visible: true,
      },
      {
        role: '代表取締役',
        name: 'スペキュラティヴ太郎',
        src: './img/member/test.jpg',
        profile: '慶應義塾大学環境情報学部4年。株式会社ニューズピックスにて「NewsPicks」のアプリケーションデザインに従事する傍ら、株式会社モフでデザイナー／エンジニアとしてVRやARを用いたコンテンツ制作などを行う。',
        button_visible: true,
      },
      {
        role: '代表取締役',
        name: 'スペキュラティヴ太郎',
        src: './img/member/test.jpg',
        profile: '慶應義塾大学環境情報学部4年。株式会社ニューズピックスにて「NewsPicks」のアプリケーションデザインに従事する傍ら、株式会社モフでデザイナー／エンジニアとしてVRやARを用いたコンテンツ制作などを行う。',
        button_visible: true,
      },
      {
        role: '代表取締役',
        name: 'スペキュラティヴ太郎',
        src: './img/member/test.jpg',
        profile: '慶應義塾大学環境情報学部4年。株式会社ニューズピックスにて「NewsPicks」のアプリケーションデザインに従事する傍ら、株式会社モフでデザイナー／エンジニアとしてVRやARを用いたコンテンツ制作などを行う。',
        button_visible: true,
      },
      {
        role: '代表取締役',
        name: 'スペキュラティヴ太郎',
        src: './img/member/test.jpg',
        profile: '慶應義塾大学環境情報学部4年。株式会社ニューズピックスにて「NewsPicks」のアプリケーションデザインに従事する傍ら、株式会社モフでデザイナー／エンジニアとしてVRやARを用いたコンテンツ制作などを行う。',
        button_visible: true,
      },
      {
        role: '代表取締役',
        name: 'スペキュラティヴ太郎',
        src: './img/member/test.jpg',
        profile: '慶應義塾大学環境情報学部4年。株式会社ニューズピックスにて「NewsPicks」のアプリケーションデザインに従事する傍ら、株式会社モフでデザイナー／エンジニアとしてVRやARを用いたコンテンツ制作などを行う。',
        button_visible: true,
      },
    ];

    this.on('mount', function(){

    });
});

riot.tag2('module-modal-member', '<div class="wrap-module px20 py40"> <div class="module-content f fc mb20"> <div class="member-item"> <div class="wrap-img f fh mb12"><img riot-src="{opts.content.src}"></div> <div class="wrap-profile mb20"> <p class="role mb4">{opts.content.role}</p> <p class="name">{opts.content.name}</p> </div> </div> </div> <div class="wrap-text"> <p>{content.profile}</p> </div> </div> <div class="wrap-icon f fh"><img onclick="{closeModalWindow}" src="./img/icons/close.svg"></div>', 'module-modal-member,[data-is="module-modal-member"]{position:relative;display:block;border-radius:6px;background:#FFF} module-modal-member .wrap-module,[data-is="module-modal-member"] .wrap-module{display:block;width:90%;max-width:560px;margin:0 auto} module-modal-member .wrap-module .module-content .member-item .wrap-img,[data-is="module-modal-member"] .wrap-module .module-content .member-item .wrap-img{width:100%} module-modal-member .wrap-module .module-content .member-item .wrap-img img,[data-is="module-modal-member"] .wrap-module .module-content .member-item .wrap-img img{width:70%;border-radius:50%} module-modal-member .wrap-module .module-content .member-item .wrap-profile .role,[data-is="module-modal-member"] .wrap-module .module-content .member-item .wrap-profile .role{font-size:12px;color:#999;text-align:center} module-modal-member .wrap-module .module-content .member-item .wrap-profile .name,[data-is="module-modal-member"] .wrap-module .module-content .member-item .wrap-profile .name{font-size:14px;color:#2a2a2a;text-align:center} module-modal-member .wrap-module .wrap-text p,[data-is="module-modal-member"] .wrap-module .wrap-text p{font-size:14px} module-modal-member .wrap-icon,[data-is="module-modal-member"] .wrap-icon{position:absolute;left:12px;top:12px;width:44px;height:44px} module-modal-member .wrap-icon img,[data-is="module-modal-member"] .wrap-icon img{cursor:pointer}@media only screen and (max-width:600px){ module-modal-member .wrap-module,[data-is="module-modal-member"] .wrap-module{max-width:340px}}', '', function(opts) {
    var self = this;

    this.content = opts.content;

    this.on('mount', function(){

    });

    this.close = closeModalWindow;
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

riot.tag2('page-top', '<div class="wrap-page"> <util-header></util-header> <module-hiro></module-hiro> <module-about-service></module-about-service> <module-feature></module-feature> <module-customer-voice></module-customer-voice> <module-cooperates></module-cooperates> <module-member></module-member> <module-contact></module-contact> <util-footer></util-footer> </div>', 'page-top .wrap-page,[data-is="page-top"] .wrap-page{position:relative;display:block;width:100%}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('temp', '', '', '', function(opts) {
    this.on('mount', function(){

    });
});

riot.tag2('util-footer', '<div class="wrap-util pt100 pb30"> <p class="copy">2019 Publink. All Rights Reserved.</p> </div>', 'util-footer .copy,[data-is="util-footer"] .copy{text-align:center;font-size:12px}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });
});

riot.tag2('util-header', '<div class="wrap-util py30 f flex-between"> <div class="wrap-logo"> <p>Publink</p> </div> <div class="wrap-menu f fm s-hide"> <p class="mr16" each="{item in menuContents}" onclick="{toTarget.bind(this, item.target)}">{item.label}</p> </div> </div>', 'util-header,[data-is="util-header"]{position:absolute;left:0;top:0;width:100%;z-index:100} util-header .wrap-util,[data-is="util-header"] .wrap-util{max-width:1040px;width:100%;margin:0 auto} util-header .wrap-util .wrap-logo p,[data-is="util-header"] .wrap-util .wrap-logo p{font-weight:bold;font-size:24px;color:#fff;letter-spacing:1.2px} util-header .wrap-util .wrap-menu p,[data-is="util-header"] .wrap-util .wrap-menu p{cursor:pointer;font-size:14px;color:#fff;letter-spacing:1.2px}@media only screen and (max-width:600px){ util-header .wrap-util,[data-is="util-header"] .wrap-util{max-width:90%}}', '', function(opts) {
    var self = this;

    this.on('mount', function(){

    });

    this.menuContents = [
      {label: 'サービス', target: 'module-about-service'},
      {label: '特徴', target: 'module-feature'},
      {label: 'パートナー企業', target: 'module-cooperates'},
      {label: 'メンバー', target: 'module-member'},
      {label: 'お問い合わせ', target: 'module-contact'},
    ];

    this.toTarget = function(target, e){
      TO_SCROLL.toScroll(target);
    };
});