/* loding */
$(function() {
  var h = $(window).height();

  $('#wrap').css('display','none');
  $('#cover ,#loader').height(h).css('display','block');
});

$(window).load(function () { //全ての読み込みが完了したら実行
  $('#cover').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#wrap').css('display', 'block');
});

//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});

function stopload(){
  $('#wrap').css('display','block');
  $('#cover').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
}
/* top-full-screen */
$(window).on('load resize', function(){
  var mainheight = $(window).height();
  $('#header').css('height', mainheight);
  var head_center_top = mainheight / 2.5;
  $('.header-text').css('top', head_center_top);
});
/* wow */
$(document).ready(function(){
  new WOW().init();
});
/* scroll button */
$(document).ready(function(){
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
/* menu */
$(document).ready(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
/* nave animation */
$(document).ready(function(){
  var header = $('#header');
  var nav = $('#nav')
  header_offset = header.offset();
  header_height = header.height();
  var header_length = header_offset.top + header_height;
  $(window).scroll(function () {
    if($(window).scrollTop() > header_length) {
      nav.addClass('navbar-shrink');
    }else {
      nav.removeClass('navbar-shrink');
    }
  });
});
