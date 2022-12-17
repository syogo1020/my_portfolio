"use strict";
var _$$slick;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function check() {
  if (mail_form.mail.value == "") {
    //条件に一致する場合(メールアドレスが空の場合)
    alert("メールアドレスを入力してください"); //エラーメッセージを出力
    return false; //送信ボタン本来の動作をキャンセルします
  } else {
    //条件に一致しない場合(メールアドレスが入力されている場合)
    return true; //送信ボタン本来の動作を実行します
  }
}

var $form = $('#js-form'); //このフォームが
$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function _() {
        //送信に成功したときの処理
        $form.slideUp(); //上に消える
        $('#js-success').slideDown();
      },
      200: function _() {
        //送信に失敗したときの処理
        $form.slideUp(); //上に消える
        $('#js-error').slideDown();
      }
    }
  });
  return false;
});

$('.slider').slick((_$$slick = {
  autoplay: false,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 2,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
// prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  //nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  centerMode: true,//スライドを中心に表示して、部分的に前後のスライドが見えるように設定
  arrows: false
}, _defineProperty(_$$slick, "centerMode", true), _defineProperty(_$$slick, "centerPadding", "30px"), _defineProperty(_$$slick, "responsive", [{
  breakpoint: 769,//モニターの横幅が769px以下の見せ方
  settings: {
    slidesToShow: 1,//スライドを画面に2枚見せる
    slidesToScroll: 1 //1回のスクロールで2枚の写真を移動して見せる
  }
}, {
  breakpoint: 426,//モニターの横幅が426px以下の見せ方
  settings: {
    slidesToShow: 1,//スライドを画面に1枚見せる
    slidesToScroll: 1 //1回のスクロールで1枚の写真を移動して見せる
  }
}]), _$$slick));

$(function () {
  $('a[href^="#"]').click(function () {
    //スクロールのスピード
    var headerHeight = 50; //固定ヘッダーの高さを入れる
    var speed = 300; //リンク元を取得
    var href = $(this).attr("href"); //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href); //リンク先までの距離を取得
    var position = target.offset().top - headerHeight; // let position = jQuery(target).offset().top - header;
    //スムーススクロール

    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
}); //スクロールした際の動きを関数でまとめる

function PageTopAnime() {
  var scroll = $(window).scrollTop();

  if (scroll >= 600) {
    //上から600pxスクロールしたら
    $('#p-page-top').removeClass('RightMove'); //#p-page-topについているRightMoveというクラス名を除く
    $('#p-page-top').addClass('LeftMove'); //#p-page-topについているLeftMoveというクラス名を付与
  } else {
    if ($('#p-page-top').hasClass('LeftMove')) {
      //すでに#p-page-topにLeftMoveというクラス名がついていたら
      $('#p-page-top').removeClass('LeftMove'); //LeftMoveというクラス名を除き
      $('#p-page-top').addClass('RightMove'); //RightMoveというクラス名を#p-page-topに付与
    }
  }
} // 画面をスクロールをしたら動かしたい場合の記述


$(window).scroll(function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
}); // #p-page-topをクリックした際の設定



$('.js-hamburger').on('click', function () {
  jQuery('.c-hamburger__bar').toggleClass('is-open');
  jQuery('.c-hamburger').toggleClass('is-open');
  jQuery('.js-drawer').toggleClass('is-open');
}); //ドロワーメニュー

new WOW().init();