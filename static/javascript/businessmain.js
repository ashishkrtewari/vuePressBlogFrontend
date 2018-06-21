/****** Start Common functions ********/
module.exports = {
      data: {
        defaultParams: {
          infinite: false,
          slidesToShow: 5,
          slidesToScroll: 5,
          centerMode: false,
          responsive: [{
            breakpoint: 1024,
            settings: {
              infinite: true,
              slidesToShow: 3.5,
              slidesToScroll: 1,
              arrows: false
            }
          }, {
            breakpoint: 640,
            settings: {
              infinite: true,
              slidesToShow: 2.5,
              slidesToScroll: 1,
              arrows: false
            }
          }]
        },
        centeredParams: {
          infinite: true,
          responsive: [{
            breakpoint: 1920,
            settings: "unslick"
          }, {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '10vw',
              arrows: false,
              variableWidth: true
            }
          }, {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '18.2vw',
              arrows: false
            }
          }]
        },
        doorwayParams: {
          responsive: [{
            breakpoint: 1920,
            settings: "unslick"
          }, {
            breakpoint: 640,
            settings: {
              infinite: true,
              slidesToShow: 2.5,
              slidesToScroll: 1,
              arrows: false,
              accessibility: true,
              touchMove: true,
              swipe: true
            }
          }]
        }
      },
      bindEvents: function() {
        window.addEventListener("resize", this.methods.updateWidth.bind(this));
        //Load Youtube Iframe API if required
        if ((document.getElementsByClassName("zf-play-video").length > 0) || (document.getElementsByClassName("zf-yt-inline-player").length > 0)) {
          window.addEventListener("DOMContentLoaded", this.methods.IframeApiInit);
        }
        // stops modal from being shown till iframe api is available
        if ($("#zf-video-modal").length > 0) {
          $('#zf-video-modal').on('show.bs.modal', function(e) {
            if (!(Boolean(window.YT))) {
              e.preventDefault();
            }
          });
        }
        // If youtube Iframe API is ready add videoPlayer Events
        window.onYouTubeIframeAPIReady = function() {
          $('.zf-play-video').on("click", _zf.methods.playVideo);
        };
        if ($("[class*='zf-slider']").length) {
          this.methods.zfCarousel.init();
        }
        if ($('.zf-tabs-wrapper').length) {
          _zf.methods.zfTabs.init();
        }
        // Initiate Pixlee after window load.
        window.addEventListener("load", function(){
            if (document.getElementsByClassName('zf-pixlee').length > 0) {
              _zf.methods.pixleeInit();
            }
        });
        // Bind Bootstrap popover method to shows small popover on-click
        if ($('.zf-cms [data-toggle="popover"]').length) {
          $('[data-toggle="popover"]').popover();
          // preventing clicked anchor tag to do a URL call rather than showing the pop-over
          $('[data-toggle="popover"]').on('click', function(ev){
              ev.preventDefault();
          });
        }
      },
      windowWidth: window.innerWidth,
      methods: {
        updateWidth: function() {
          this.windowWidth = window.innerWidth;
          _zf.zfApp.zfVueWidth = window.innerWidth;
        },
        queryElements: function(target, el) {
          return [].slice.call(target.querySelectorAll(el));
        },
        findTargetLang: function() {
          try {
            _zf.targetLang = ACC.config.encodedContextPath.toLowerCase().slice(4);
            _zf.countryCode = ACC.config.encodedContextPath.toLowerCase().slice(1, 3);
          } catch (t) {}
          if (!_zf.targetLang) {
            (function(){
              var langArray = ["tr_tr", "sv_se", "es_es", "ru_ru", "pt_pt", "da_dk", "it_ch", "nl_be", "nl_nl", "fr_be", "fr_ch", "fr_fr", "fr_ca", "de_ch", "de_at", "de_de", "en_gb", "en_ie", "en_ca", "en_us", "fr", "de", "it", "nl", "en"],
                  getUrl = document.URL.toLowerCase();
            for (var n = 0; n < langArray.length; n++) {
              if (getUrl.indexOf("/" + langArray[n]) > -1) {
                _zf.targetLang = langArray[n];
                break;
              }
            }
            _zf.targetLang || (_zf.targetLang = "en")
            })();
          }
          if (!_zf.countryCode) {
            (function(){
              var getUrl = document.URL.toLowerCase(),
                  iIndex = getUrl.indexOf('/', 10)+1;
              _zf.countryCode = getUrl.substring(iIndex, getUrl.indexOf('/', iIndex));
            })();
          }
          //Additional language check for EU
          (function(){
            _zf.targetLang === "en_us" || _zf.targetLang === "en_ca" || _zf.targetLang === "fr_ca" || (function(){
              if(!(_zf.targetLang === "en_gb")){
                _zf.targetLang = _zf.targetLang.slice(0,2);
              }
            })();
           })();
  
        },
        // Added pixlee widget that loads after checking if DOMcontent is loaded
        pixleeInit: function() {
          var pixleeDom = document.getElementById('pixlee_container'),
            apiKeys = pixleeDom.dataset.apikey,
            wid = pixleeDom.dataset.wid,
            source = 'https://assets.pixlee.com/assets/pixlee_widget_1_0_0.js';
  
          if (!wid) {
            return;
          } else {
            window.PixleeAsyncInit = function() {
              Pixlee.init({
                apiKey: apiKeys
              });
              Pixlee.addSimpleWidget({
                widgetId: wid
              });
            };
  
            var pixleeScript = document.createElement('script');
            pixleeScript.type = 'text/javascript';
            pixleeScript.src = source;
            pixleeScript.async = true;
            document.body.appendChild(pixleeScript);
  
            delete pixleeDom.dataset.wid;
          }
        },
        IframeApiInit: function() {
          var YT;
          //Load Youtube Iframe API
          if (!window['YT']) {
            YT = {
              loading: 0,
              loaded: 0
            };
          }
          if (!window['YTConfig']) {
            var YTConfig = {
              'host': 'http://www.youtube.com'
            };
          }
          if (!YT.loading) {
            YT.loading = 1;
            (function() {
              var l = [];
              YT.ready = function(f) {
                if (YT.loaded) {
                  f();
                } else {
                  l.push(f);
                }
              };
              window.onYTReady = function() {
                YT.loaded = 1;
                for (var i = 0; i < l.length; i++) {
                  try {
                    l[i]();
                  } catch (e) {}
                }
              };
              YT.setConfig = function(c) {
                for (var k in c) {
                  if (c.hasOwnProperty(k)) {
                    YTConfig[k] = c[k];
                  }
                }
              };
              var a = document.createElement('script');
              a.type = 'text/javascript';
              a.id = 'www-widgetapi-script';
              a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflv4EGJj/www-widgetapi.js';
              a.async = true;
              var b = document.getElementsByTagName('script')[0];
              b.parentNode.insertBefore(a, b);
            })();
          }
        },
        //Set of methods used by the video player to get/set video player params and initiate playback
        videoHelper: {
          //Get Video Player Parameters [source, controls. mute, showinfo, start, end, loop, modaltitle]
          getParams: function(vid_el) {
            var videoParams = {};
            videoParams.videoId = vid_el.getAttribute('data-id');
            videoParams.videoControls = vid_el.getAttribute('data-controls') || 1;
            videoParams.muteVideo = vid_el.getAttribute('data-mute') || 1;
            videoParams.videoInfo = vid_el.getAttribute('data-showinfo') || 1;
            videoParams.start = vid_el.getAttribute("data-start") || false;
            videoParams.end = vid_el.getAttribute("data-end") || false;
            videoParams.loop = vid_el.getAttribute("data-loop") || false;
            videoParams.modalTitle = vid_el.getAttribute('data-title') || "";
            return videoParams;
          },
          // Set Params (set attributes to the <video> player tag as per the received input parameters) for HTML5 Video Player
          setParams: function(el, params) {
            params.videoId ? el.setAttribute("src", params.videoId) : false;
            params.muteVideo > 0 ? el.setAttribute("muted", "") : false;
            params.videoControls > 0 ? el.setAttribute("controls", "") : false;
            params.loop ? el.setAttribute("loop", "") : false;
          }
        },
        //Function for playing HTML5/Youtube video on modal
        playVideo: function(e) {
          e.preventDefault();
          //Video Module (Object) to organise the functions involved in making the video play on modal
          var videoModule = {
            // Cache elements and Params
            cacheParams: function() {
              this.vid_el = e.currentTarget;
              this.videoParams = _zf.methods.videoHelper.getParams(this.vid_el);
            },
            init: function() {
              this.cacheParams();
              //Load modal
              this.loadModal();
              //Add Title
              $('#zf-video-modal .modal-header').append('<h4 class="modal-title" id="zf-video-title">' + this.videoParams.modalTitle + ' <span class="sr-only">Video</span></h4>');
              $("#zf-player").attr("state", "active");
              // Check and initiate Player
              if (this.vid_el.className.indexOf("zf-html5-video") > -1) {
                this.playHtmlVideo.bind(this)();
              } else {
                this.onYouTubeIframeAPIReady.bind(this)();
              }
            },
            //Function to play HTML5 video in modal
            playHtmlVideo: function() {
              $("#zf-player").append('<video id="zf-html5-player" controlslist="nodownload" autoplay muted></video>');
              var el = $("#zf-player #zf-html5-player")[0];
              $(".zf-player-wrap").hide();
              _zf.methods.videoHelper.setParams(el, this.videoParams);
            },
            //Intialize new Youtube player instance
            onYouTubeIframeAPIReady: function() {
              this.player = new YT.Player("zf-player-wrap", {
                playerVars: {
                  controls: this.videoParams.videoControls,
                  showinfo: this.videoParams.videoInfo,
                  modestbranding: 0,
                  rel: 0,
                  autoplay: 1,
                  playsinline: 1,
                  mute: this.videoParams.muteVideo
                },
                events: {
                  'onReady': this.onPlayerReady.bind(this),
                  'onStateChange': this.onPlayerStateChange.bind(this)
                }
              });
            },
            //The API will call this function when the youtube video player is ready.
            onPlayerReady: function(event) {
              this.player.loadVideoById({
                videoId: this.videoParams.videoId,
                startSeconds: this.videoParams.start,
                endSeconds: this.videoParams.end
              });
            },
            //The API will call this function when the video player changes state, such as playback starts/Paused/end.
            onPlayerStateChange: function(event) {
              if (this.videoParams.loop === 'true') {
                if (event.data === YT.PlayerState.ENDED) {
                  this.player.seekTo(this.videoParams.start, true);
                }
              }
            },
            // remove HTML5/youtube video players and modal on close of modal
            removeVideo: function() {
              var zfModal = $(".modal#zf-video-modal");
              if (zfModal[0]) {
                zfModal.remove();
              }
            },
            //Add modal to DOM
            loadModal: function() {
              // load Modal
              var modal = `<div class="modal fade" id="zf-video-modal" tabindex="-1" aria-labelledby="zf-video-title">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close lsco-icon lscoicon-x" data-dismiss="modal" role="button" aria-label="Close Modal"></button>
                    </div>
                    <div class="modal-body">
                      <div class="modal-content-wrapper">
                        <div id="zf-player">
                          <div id="zf-player-wrap">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
              $('.zf-cms').append(modal);
              $('#zf-video-modal').on('hidden.bs.modal', this.removeVideo);
            }
          };
          videoModule.init();
        },
        // To initialize and destroy a Slick Carousel
        zfCarousel: {
          init: function() {
            this.cacheDom();
            this.slick();
            this.bindEvents();
          },
          cacheDom: function() {
            this.$sliderDefault = $(".zf-slider-default");
            this.$sliderCentered = $(".zf-slider-centered");
            this.$doorwaySliderDefault = $(".zf-doorway-three .zf-slider-default");
            this.$zfSliderCheck = $(".zf-cms .slick-initialized, .zf-sort-header .slick-initialized");
          },
          //Check the slider classes for initialisation in accordance with the viewport width
          slick: function() {
            this.cacheDom();
            this.$sliderDefault.each(function() {
              var slider = $(this);
              if (!slider.hasClass("slick-initialized")) {
                slider.not(".zf-doorway-three .zf-slider-default").slick(_zf.data.defaultParams);
              }
            });
            //Destroy slider if slider class is removed, Helps tp destroy slider through removal of class using Vue
            if (this.$zfSliderCheck.length > 0) {
              this.$zfSliderCheck.each(function() {
                var slider = $(this);
                slider.not(".zf-slider-default, .zf-slider-centered").slick('unslick');
              });
            }
            if (_zf.windowWidth < 1024) {
              if (!this.$sliderCentered.hasClass("slick-initialized")) {
                this.$sliderCentered.slick(_zf.data.centeredParams);
              }
              if (!this.$doorwaySliderDefault.hasClass("slick-initialized")) {
                this.$doorwaySliderDefault.slick(_zf.data.doorwayParams);
              }
            }
          },
          //check and initialize/destroy slider on change in viewport width
          bindEvents: function() {
            window.addEventListener("resize", this.slick.bind(this));
          }
        },
        //Fixed Tab position on page scroll
        zfTabs: {
          init: function() {
            this.cacheDom();
            this.bindEvents();
            $(window).on("scroll", this.switchTabOnScroll.bind(this));
          },
          /****** Finds the active tab by matching URl/provided array of targets or to set default target.******
           ****** This runs in beforeCreate function while Vue instance is being created ******
           ****** Then the found target is passed on to the data property of the instance to be reactive and available for content switching*******/
          findActiveTab: function() {
            this.tabContainer = $('.zf-tabs');
            this.targetArray = this.tabContainer.attr('zf-target-array');
            this.defaultTarget = this.tabContainer.attr('zf-target-default');
            this.isMatch = false;
            // Active tab based on URL Match if targetArray is available
            if (this.targetArray) {
              var targetArrayList = this.targetArray.replace(/\s/g, "").toLowerCase().split(","),
                getURL = document.URL.toLowerCase();
              for (var i = 0; i < targetArrayList.length; i++) {
                if (getURL.indexOf(targetArrayList[i]) > -1) {
                  this.clickTab(targetArrayList[i]);
                  _zf.activeTabKey = targetArrayList[i];
                  this.isMatch = true;
                  break;
                }
              }
            }
            // Active tab based on defaultTarget
            if (!this.isMatch && this.defaultTarget) {
              this.clickTab(this.defaultTarget);
              _zf.activeTabKey = this.defaultTarget;
            }
  
          },
          cacheDom: function() {
            this.tabsWrapper = $('.zf-tabs-wrapper');
            this.tabContainer = $('.zf-tabs');
            this.allTabs = $('.zf-tabs [class*="zf-tab-"]');
            this.tabContainerHeight = this.tabContainer.height();
            this.isSticky = this.tabContainer.attr('zf-sticky');
            this.navigation = $('.navbar-default');
            this.getMainNavHeight.bind(this)();
            this.scrollPosition = 0;
            this.tabPosition = 0;
            this.stickyPoint = 0;
            this.scrollControlActive = 0;
            this.onclickScroll = false; //Helps checking if scroll is due to click of tabs
          },
          bindEvents: function() {
            this.stickyEventController.bind(this)();
            this.allTabs.on("click", this.clickController.bind(this));
            window.addEventListener("resize", this.resizeController.bind(this), true);
          },
          // Get Main Navigation Height
          getMainNavHeight: function() {
            this.mainNavHeight = this.navigation.length ? this.navigation.height() - 1 : (_zf.windowWidth < 640 ? 48 : 62);
          },
          // Sticky Tab Function
          stickyEventController: function() {
            if (this.isSticky === "true") {
              // Get Tab top Offset
              this.stickyPoint = this.tabsWrapper.offset().top - this.mainNavHeight;
              if (this.scrollControlActive === 0) {
                document.addEventListener("scroll", this.scrollController.bind(this), true);
                this.scrollControlActive = 1;
              }
            } else {
              this.tabContainer.removeClass('affix').removeAttr('style');
            }
          },
          // Active tab Function
          clickTab: function(element) {
            $('[class*="zf-tab-"]').removeClass("active");
            $('.zf-tab-' + element).addClass("active");
            $('.zf-tab-content-' + element).addClass("active");
            //Check if the new clicked tab has slick slider and reinitialize them
            var $sliderDefault = $('.zf-tab-content-' + element + ' .zf-slider-default'),
              $sliderCentered = $('.zf-tab-content-' + element + ' .zf-slider-centered');
            if ($sliderDefault.length > 0) {
              $sliderDefault.slick("destroy");
              $sliderDefault.slick(_zf.data.defaultParams);
            }
            if ($sliderCentered.length > 0) {
              $sliderCentered.slick("destroy");
              $sliderCentered.slick(_zf.data.centeredParams);
            }
          },
          // Reset values on window resize
          resizeController: function() {
            this.stickyEventController.bind(this)();
            this.tabContainerHeight = this.tabContainer.height(); //Reset".zf-tabs" height.
            this.getMainNavHeight.bind(this)(); //Reset main navbar height
            this.stickyPoint = this.tabsWrapper.offset().top - this.mainNavHeight; //Reset top offset of ".zf-tabs-wrapper"
            this.isSticky = this.tabContainer.attr('zf-sticky'); //recheck zf-sticky value"
          },
          // Check scroll amount for sticky
          scrollController: function() {
            if (this.isSticky === "true") {
              this.scrollPosition = $(document).scrollTop();
              this.stickyPoint = this.tabsWrapper.offset().top - this.mainNavHeight;
              // lock tabs Container to top when scroll reach to their position
              if (this.stickyPoint >= this.scrollPosition) {
                this.tabContainer.removeClass('affix');
                this.tabContainer.removeAttr('style');
                this.tabsWrapper.css('min-height', '0px');
              } else {
                this.tabContainer.addClass('affix').css('top', this.mainNavHeight);
                if (this.tabContainer.hasClass('zf-mobile-toggle') && _zf.windowWidth < 640) {
                  this.tabsWrapper.css('min-height', $('.zf-toggle-bar').outerHeight());
                } else {
                  this.tabsWrapper.css('min-height', this.tabContainerHeight);
                }
              }
            }
          },
          // Get identifier on tab click from their class and switch content and scroll window to active content.
          clickController: function(event) {
            // Get target identifier on tab click
            var className = event.currentTarget.className,
                target = this.findTargetfromClass(className, "zf-tab-");
            if (!(className.indexOf("active") > -1)) {
              this.clickTab(target);
            }
            // Scroll window to active content
            if (this.isSticky === "true") {
              this.tabContainerHeight = this.tabContainer.height();
              this.tabPosition = this.getContentOffset(target) - this.tabContainerHeight - this.mainNavHeight - 20;
            } else {
              this.tabPosition = this.getContentOffset(target) - this.mainNavHeight;
            }
            $('html, body').stop().animate({
              scrollTop: this.tabPosition
            }, 700, 'swing');
            this.onclickScroll = true;
            setTimeout(function () {
              this.onclickScroll = false;
            }.bind(this), 700);
          },
          //Get Offset Top for target content
          getContentOffset: function (target) {
            try {
              return $('.zf-tab-content-' + target + '[zf-scroll-target="true"]').offset().top;
            } catch (e) {
              return $('.zf-tab-content-' + target + ':first').offset().top;
            }
          },
          //Switch Tabs when Scrolling between content
          switchTabOnScroll: function() {
            if (!this.onclickScroll) { //check if scrolling due to click on tabs
              var navHeight,
                  scrollPos = $(window).scrollTop(),
                  contentList = $('[class*="zf-tab-content"]');
              //Calculate height of navigation to substract from content offset
              if (this.isSticky === "true") {
                this.tabContainerHeight = this.tabContainer.height();
                navHeight =  this.tabContainerHeight + this.mainNavHeight + 60;
              } else {
                navHeight = this.mainNavHeight + 60;
              }
              contentList.each(function(index, el){
                var $el = $(el);
                if ($el.height() > 0) { //Run only for content already on display
                  var elPos = $el.offset().top - navHeight;
                  if (scrollPos > elPos ) {//Check if the window scrollTop is more that element offset top
                    if (contentList[index + 1]) {//Check if next content block is available
                      if (scrollPos < $(contentList[index + 1]).offset().top) {//If available check if window scrollTop is less than its offset top
                        findTargetMakeActive.bind(this, el)();
                      }
                    }
                    else {
                      findTargetMakeActive.bind(this, el)();
                    }
                  }
                  //FindTarget & Switch Tabs
                  function findTargetMakeActive(el){
                    // Get target identifier
                    var className = el.className,
                        target = this.findTargetfromClass(className, "zf-tab-content-");
                    //Make target Active
                    if (!(className.indexOf("active") > -1)) {
                      this.clickTab(target);
                    }
                  }
                }
              }.bind(this));
            }
          },
          //FindTargetIdentifier from String/className
          findTargetfromClass: function(className, prefix) {
            var endPoint, target;
            className = className.slice(className.indexOf(prefix));
            endPoint = className.indexOf(" ");
  
            if (endPoint > -1) {
              target = className.slice(prefix.length, endPoint);
            } else {
              target = className.slice(prefix.length);
            }
            return target;
          }
        }
      },  
      init: function() {
        this.methods.findTargetLang();
      }
    };
  /****** End Common functions ********/