$(function(){


// main slide
$slickElement = $('#mainSlide');

var s0 = function(slide){
	var myslide = $('#mainSlide .slick-slide').eq(slide);
	myslide.find('.bgTxt').transition({opacity:1,scale:1,complete:function(){
	}},800,'easeInOutCubic');

	myslide.find('.img01').transition({opacity:1,scale:1,complete:function(){
		myslide.find('.msTit').children('span').eq(0).delay(300).animate({'opacity':'1','margin':'0'},300,function(){
		});
		myslide.find('.msTit').children('span').eq(1).delay(300).animate({'opacity':'1','margin':'0'},300,function(){
			myslide.find('.msTit').find('u').transition({rotate:'-90deg'});
			myslide.find('.msTxt').children('p').animate({'opacity':'1','margin':'0'},300);
		});
	}},800,'easeInOutCubic');
}

var s1 = function(slide){
	var myslide = $('#mainSlide .slick-slide').eq(slide);
	myslide.find('.bgTxt').stop().animate({'opacity':'1','margin':'0'},500,function(){
		myslide.find('.img01').stop().animate({'opacity':'1','margin':'0'},400,function(){
			myslide.find('.msTit').children('span').eq(0).animate({'opacity':'1','margin':'0'},300,function(){
			});
			myslide.find('.msTit').children('span').eq(1).animate({'opacity':'1','margin':'0'},300,function(){
				myslide.find('.msTit').find('u').transition({rotate:'-90deg'});
				myslide.find('.msTxt').children('p').animate({'opacity':'1','margin':'0'},300);
			});

		});
	});
	myslide.find('.img02').animate({'opacity':'1','right':'0'},500,function(){});
}

var s2 = function(slide){
	var myslide = $('#mainSlide .slick-slide').eq(slide);
	myslide.find('.bgTxt').stop().animate({'opacity':'1','margin':'0'},400,function(){
		myslide.find('.img01').stop().animate({'opacity':'1','margin':'0'},600,function(){
			myslide.find('.msTit').children('span').eq(0).animate({'opacity':'1','margin':'0'},300,function(){
			});
			myslide.find('.msTit').children('span').eq(1).animate({'opacity':'1','margin':'0'},300,function(){
				myslide.find('.msTit').find('u').transition({rotate:'-90deg'});
				myslide.find('.msTxt').children('p').animate({'opacity':'1','margin':'0'},300);
			});
		});

	});
}

var s3 = function(slide){
	var myslide = $('#mainSlide .slick-slide').eq(slide);
	myslide.find('.bgTxt').stop().animate({'opacity':'1','margin':'0'},400,function(){
		myslide.find('.img01').children().children('.one').transition({scale:1,opacity:1,complete:function(){
		}},600);

		myslide.find('.img01').children().children('.model').animate({'opacity':'1'},600,function(){
			myslide.find('.msTit').children('span').eq(0).animate({'opacity':'1','margin':'0'},300,function(){
				myslide.find('.msTit').children('span').eq(1).delay(100).animate({'opacity':'1','margin':'0'},300,function(){
				});
			});
		});

	});
}




var slideMove = function(a){
	var currentSlide = a; 
	var myslide = $('.slick-slide').eq(currentSlide);
	$('.bgTxt, .img01, .img02, .msTit span, .msTit u, .msTxt p, .img01 ul li').removeAttr('style','');

	switch (currentSlide) {
		case 0 :
			s0(currentSlide);
			break;
		case 1 :
			s1(currentSlide);
			break;
		case 2 :
			s2(currentSlide);
			break;
		case 3 :
			s3(currentSlide);
			break;
		default :	
			break;
	}
}


var dotMove = function(){
	var msDot = $('.slick-dots');
	var msDotH = -parseInt(msDot.height()/2);
	msDot.css('margin-top',msDotH);
}

$slickElement.on('afterChange', function(event, slick, currentSlide, nextSlide){
	slideMove(currentSlide);
});

$(window).load(function(){
	$slickElement.slick({
		infinite: true,
		autoplay: false,
		autoplaySpeed: 3000,
		fade: true,
		slidesToShow: 1,
		speed: 800,
		pauseOnHover:false,
		pauseOnFocus:false, 
		touchMove: false,
		arrows: false,
		dots: true
	});
	setTimeout( function(){
		slideMove(0);
	},200);

	dotMove();

});

$(window).resize(function(){
	dotMove();
});











});
