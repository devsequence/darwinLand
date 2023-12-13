// AOS.init({disable: 'mobile'});
$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() > 1) {
        $header.addClass('scroll-nav');
    }
    else{
        $header.removeClass('scroll-nav');
    }
});
$('.program-item__title').on('click', function (e) {
    var $this = $(this);
    $this.parent().toggleClass('active');
});
$('.question-item__title').on('click', function (e) {
    var $this = $(this);
    $this.parent().toggleClass('active');
});
$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
    $('.header').toggleClass('active');
});
$('.header-nav a, .hero-link a, .header-button a, .btn-info a, .definitely-list .btn-primary').on('click', function (e) {
    e.preventDefault();
    var ths = $(this);
    var thsId = ths.data('id');
    var headerHeight = $('.header').height();
    $('html, body').animate({
        scrollTop: $('.'+thsId).offset().top - headerHeight
    }, 1000);
    $('.header, .header-btn').removeClass('active');
    return false;
});

$('.cookie-popup').addClass('hidden');
$(function() {
    var data = localStorage.getItem("cookies");
    if (data !== null) {
        $('.cookie-popup').addClass('hidden');
        $("input[name='cookies']").attr("checked", "checked");
    }else{
        $('.cookie-popup').removeClass('hidden');
    }
});
$('.cookie-popup-close').on('click', function (e) {
    $("input[name='cookies']").trigger( "click" );
});
$("input[name='cookies']").click(function() {
    if ($(this).is(":checked")) {
        localStorage.setItem("cookies", $(this).val());
        $('.cookie-popup').addClass('hidden');
    } else {
        localStorage.removeItem("cookies");
        $('.cookie-popup').removeClass('hidden');
    }
});

//
// // $('.courses-item__text').each(function (e) {
// //     var dots = "...";
// //     var ths = $(this).text();
// //     var limit = 290;
// //     if(ths.length > limit){
// //         var string = '';
// //         string = ths.substring(0,limit) +dots;
// //         // console.log(string);
// //         // console.log('text - ',ths);
// //         $(this).text(string)
// //
// //     }
// // });
// $('.courses-item').each(function (e) {
//     var $ths = $(this);
//     var $thsText = $ths.find('.courses-item__text').text();
//     var dots = "...";
//     var limit = 290;
//     if($thsText.length > limit){
//         var string = '';
//         string = $thsText.substring(0,limit) +dots;
//         $ths.find('.courses-item__text').text(string);
//         $ths.find('.btn-secondary').on('click', function (e) {
//             e.preventDefault();
//             var $ths = $(this);
//             var $thsParents = $ths.parents('.courses-item');
//             var $thsParentsTop = $thsParents.offset().top;
//             $ths.find('span').toggleClass('hidden');
//             $thsParents.toggleClass('active');
//             $('html, body').animate({
//                 scrollTop: $thsParentsTop
//             }, 300);
//             if($thsParents.hasClass('active')){
//                 $thsParents.find('.courses-item__text').text($thsText);
//             }else {
//                 $thsParents.find('.courses-item__text').text(string);
//             }
//             return false;
//         });
//     }else{
//         $ths.find('.btn-secondary').on('click', function (e) {
//             e.preventDefault();
//             var $ths = $(this);
//             var $thsParents = $ths.parents('.courses-item');
//             var $thsParentsTop = $thsParents.offset().top;
//             $ths.find('span').toggleClass('hidden');
//             $thsParents.toggleClass('active');
//             $('html, body').animate({
//                 scrollTop: $thsParentsTop
//             }, 300);
//             return false;
//         });
//     }
//
// });
// $(".more-slider").slick({
//     speed: 500,
//     fade: true,
//     cssEase: 'linear',
//     prevArrow: $('.more-slider-prev'),
//     nextArrow: $('.more-slider-next')
// });
// $('.header-logo a, .footer-logo a').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, 1000);
//     return false;
// });
// $('.header-nav a, .footer-nav a').on('click', function (e) {
//     e.preventDefault();
//     var ths = $(this);
//     var thsId = ths.data('id');
//     var headerHeight = $('.header').height();
//     $('html, body').animate({
//         scrollTop: $('.'+thsId).offset().top - headerHeight
//     }, 1000);
//     $('.header').removeClass('active');
//     return false;
// });
//
//
// // function add3Dots(string, limit){
// //
// //     var dots = "...";
// //     if(string.length > limit)
// //     {
// //         string = string.substring(0,limit) + dots;
// //     }
// //     return string;
// // }
// // console.log(add3Dots("If you’d like to learn old-school DJ techniques traditional way, this course is for you. It includes all the essential basics that you need to know when you are first learning how to DJ using two turntables and a DJ mixer. You will learn how to handle the record", 300));
