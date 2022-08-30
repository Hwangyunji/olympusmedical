// 시작시 윈도우 크기 판단 후 스크립트 실행
function checkDevice() {
  const breakPoint = 768;
  let w = window.innerWidth;
  console.log(w);

  if (w >= breakPoint) {
    // console.log("큰화면 코드");
    $("#gnb .depth1 > li").hover(
      // mouseover
      function () {
        $(".depth2") // 여기만 수정하면 됨 this or 선택자
          .addClass("on");
      },
      // mouseout
      function () {
        $(".depth2").removeClass("on");
      }
    );
  } else {
    // console.log("작은화면 코드");
    $("nav .depth1 > li").click(function () {
      $(this).children(".depth2").toggleClass("on");
    });
  }
}

$(function () {
  checkDevice();
  // const breakPoint = 768;

  $(window).on("resize", function () {
    checkDevice();
  });
}); // $

$(function () {

  $(function () {
    /** 2가지 유형
     * 1. 현재 하위 뎁스만 보임
     * 2. 전체 하위뎁스 표시
     */
    $("#gnb .depth1 > li").hover(
      // mouseover
      function () {
        $(".depth2") // 여기만 수정하면 됨 this or 선택자
          .addClass("on");
      },
      // mouseout
      function () {
        $(".depth2").removeClass("on");
      }
    );
  });


  $('#family-site-btn').click(
    function () {
      $('.family-site-nav > ul')
        .toggleClass('on')
    }
  );

  $("#toggle-btn").click(function () {
    $("#gnb").addClass("on");
  });

  $("#close-btn").click(function () {
    $("#gnb").removeClass("on");
  });



}); // $


$(".title-menu").click(function() {
  $(this).next(".depth2").stop().slideToggle(300);
 $(this).toggleClass('on').siblings().removeClass('on');
 $(this).next(".depth2").siblings(".depth2").slideUp(300); // 1개씩 펼치기
});



var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});


//신제품 배너

let num = 0; // 이미지 번호(전역변수)

//공식 = 높이값(세로기준) * 이미지 번호
function changeslider(img_num) {
  let img_height = 150 * img_num;
  let m_img_height = 80 * img_num;

  // $('.k-slider2 .k-sliders2').css ({
  //     transform: `translateY(${-img_height}px)`
  // })

  if (matchMedia("screen and (min-width: 768px)").matches) {
    // 768px 이상에서 사용할 JavaScript
    $('.k-slider2 .k-sliders2').css({
      transform: `translateY(${-img_height}px)`
    })
  } else {
    // 768px 미만에서 사용할 JavaScript
    $('#k-m-slider2').css({
      transform: `translateY(${-m_img_height}px)`
    })
  }



}





//자동재생
setInterval(function () {
  num++;
  if (num > 2) {
    num = 0;
  }
  // console.log(num)
  changeslider(num);
}, 3000)