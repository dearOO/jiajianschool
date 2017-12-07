(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });

  $(document).ready(function() {
    $('.Yl-container').YlSlide({
        wrapper: '.Yl-wrapper',
        slideClass: '.Yl-slide',
        stylePrefix: '.Yl-',
        slideLength: 3,
        pages: true,
        autoplay: 5000,
        imgTemplate: {
            0: ['<div class="Yl-img0"></div>'],
            1: ['<div class="Yl-img1"></div>'],
            2: ['<div class="Yl-img2"></div>']
        },
        callback: function(e) {
            //整个dom加载完成后的回调函数、切换动画前的回调
        },
        before: function(e) {
            //页面切换前的回调函数
        },
        after: function(e) {
            //页面切换完成后的回调函数

        }
    });
     //学校喜报轮播
    $('#your-slider').flexslider({
        playAfterPaused: 8000,
        before: function(slider) {
            if (slider._pausedTimer) {
                window.clearTimeout(slider._pausedTimer);
                slider._pausedTimer = null;
            }
        },
        after: function(slider) {
            var pauseTime = slider.vars.playAfterPaused;
            if (pauseTime && !isNaN(pauseTime) && !slider.playing) {
                if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                    slider._pausedTimer = window.setTimeout(function() {
                        slider.play();
                    }, pauseTime);
                }
            }
        }
        // 设置其他参数
    });
  });
})(jQuery);