const $textComment = {
	1: 'Сonsectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
	2: 'Учиться всегда сгодится, трудиться должна девица, ',
	3: 'не плюй в колодец — пригодится… и, как говорится…',
	4: 'Dis parturient montes, nascetur ridiculus mus.	Onec quam felis, ultrici esnec,pelentesque.',
	5: 'Ален нови, ностра алис! Что означает — ежели один человек построил, ',
	6: 'другой завсегда разобрать может',
	7: 'Aenean massa. Cum sociis  natoque penatibus et magnis dis parturient montes, nascetur.',
	8: 'Огонь тоже считался божественным, пока Прометей не выкрал его. .	',
	9: 'Теперь мы кипятим на нём воду',
	10: 'Fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 	imperdiet a, venat.',
	11: 'Травами хорошо бы ещё подлечиться. Отвар ромашки, мяты… У вас в Италии мята есть?',
	12: '— Ну откуда в Италии мята? Видел я их Италию на карте: сапог сапогом, и всё.',

	13: 'Сonsectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
	14: 'Умное лицо — это ещё не признак ума, господа.',
	15: 'Я понял, в чем ваша беда. Вы слишком серьезны. ',

	16: 'Dis parturient montes, nascetur ridiculus mus.	Onec quam felis, ultrici esnec,pelentesque.',
	17: 'Я не боялся казаться смешным. Это не каждый может себе позволить.',
	18: '',

	19: 'Aenean massa. Cum sociis  natoque penatibus et magnis dis parturient montes, nascetur.',
	20: 'В свое время Сократ мне сказал: «Женись непременно. Попадется хорошая жена — станешь счастливым.',
	21: 'Плохая — станешь философом». Не знаю, что лучше.',

	22: 'Fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 	imperdiet a, venat.',
	23: ' Каждый день к девяти утра я должен идти в мой магистрат. Я не скажу, что это подвиг, но вообще что-то героическое в этом есть!',
	24: 'Я не скажу, что это подвиг, но вообще что-то героическое в этом есть!',


	25: 'Сonsectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
	26: 'Здесь могла бы быть Ваша реклама :-)',
	27: 'И здесь тоже',

	28: 'Dis parturient montes, nascetur ridiculus mus.	Onec quam felis, ultrici esnec,pelentesque.',
	29: 'Здесь могла бы быть Ваша реклама :-)',
	30: 'и на этом месте тоже',

	31: 'Aenean massa. Cum sociis  natoque penatibus et magnis dis parturient montes, nascetur.',
	32: 'Здесь могла бы быть Ваша реклама :-)',
	33: 'а также здесь',

	34: 'Fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, 	imperdiet a, venat.',
	35: 'Здесь могла бы быть Ваша реклама :-)',
	36: ' и вот здесь'
}
const $comment = $('.text-review a.circle');
const $firstRow = $('.firstRow');
const $secondRow = $('.secondRow');
const $triangleUp = $('.triangleUp');
const $triangleDown = $('.triangleDown');
const $socialContainerHref = $('.social-container a');

$(document).ready(function(){

	// $socialContainerHref.hover( function () {
	// 	$(this).html('<img src="./images/instagramHead.png" alt="instagram"></img>')
	// }, function () {
	// 	$(this).html('<img src="./images/twitterhead.png" alt="twiter"></img>')
	// })

	$comment.on('click', function(event){
		event.preventDefault();
		$comment.removeClass('active');
		$(this).addClass('active');
		$(this).parent().find('p').text($textComment[$(this).attr('data-text')]);
	});


	$('#slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
		        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
				arrows: true,
				autoplay: false,
				autoplaySpeed: 2000,
				fade: false,
				adaptiveHeight: true,
				infinite: false,
				useTransform: true,
				speed: 700,
				cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
	});
	$('#slider').on('beforeChange', function(event, slick, currentSlide){
		$triangleUp.removeClass('vertRotate');
		$triangleDown.removeClass('horRotate');
 	});
	$('#slider').on('afterChange', function(event, slick, currentSlide){

		$triangleUp.addClass('vertRotate');
		$triangleDown.addClass('horRotate');
 	});

	

});

var Count = {
	value: 1051,
	container: '',
	delay: 0,
	counter() {
		setInterval(() => {
			this.value += Math.floor(Math.random() * 10);
			console.log( this.value);
			$(this.container).find('p').text(this.value);
		}, this.delay)
	}
}
var count1 ={
	value: 1051,
	container: '.stat1_values_back',
	delay: 6000
}
var count2 = {
	value: 15,
	container: '.stat2_values_back',
	delay:4000
}
var count3 = {
	value: 15,
	container: '.stat3_values_back',
	delay: 2000,
}
var count4 = {
	value: 670,
	container: '.stat4_values_back',
	delay: 7000
}
count1.__proto__= Count;
count2.__proto__= Count;
count3.__proto__= Count;
count4.__proto__= Count;
count1.counter();
count2.counter();
count3.counter();
count4.counter();

$(document).ready(function() {
	$('.open-modal-btn').click(function(event) {
		event.preventDefault();
		$('.modal').fadeIn();
		// return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.modal').fadeOut();
		$(this).css("color", "red");
	});
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal').fadeOut();
		}
	});
	
	$('.modal').click(function(e) {
		if ($(e.target).closest('.content').length == 0) {
			$(this).fadeOut();
		}

	});
});

$(".burgerMenu").click(function () {
	$(".burgerMenu-container").slideToggle("slow");
	
});
$(".burgerMenu-container a").click( function (event) {
	event.preventDefault();
	$(".burgerMenu-container").fadeToggle('slow');
	const $id = $(this).attr('href');
	// console.log($id);
	// $.scrollTo($id,2000);
	$('html,body').animate({scrollTop: $($id).offset().top}, 1000);
})






