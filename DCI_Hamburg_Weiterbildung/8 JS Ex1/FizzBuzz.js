// function FizzBuzz()
// {
// 	var num = prompt('Give your Nummer');
// 	for (var i=1; i <= num; i++) 
// 		{
// 		if (i%3==0 && i%5==0) document.write(i + '  is FizzBuzz '+ '<br>');
// 		else if (i%3==0) document.write(i +'  is Fizz'+ '<br>');
// 		else if (i%5==0) document.write(i + '  is Buzz'+ '<br>');
// 		else document.write(i+ '<br>');
// 		}

// }

// FizzBuzz();

// function earn_up_retirement(age,retirement,brutto,percentge)
// {

// 	var a= brutto-(percentge*brutto/100);
// 	var years= retirement-age;
// 	if (years<0) return alert('Pay attention to years that put!');
// 	else return a*12*years;
// }
// document.write(earn_up_retirement(prompt('Give your Age'),prompt('Give your retirement '),prompt('Give your Brutto'),prompt('Give your Tax as %')));

var inputMy = document.querySelector('input');
inputMy.addEventListener('change', function(ev){
	var newColor = ev.currentTarget.value;
	document.body.style.background 	= newColor;
});

var heading = document.querySelector('h1');
var counter = 1;
heading.addEventListener('click',function(){
	console.log('this event has happened' +counter+ 'times');
	 counter++;

})

// document.body.style.backgorund = inputMy.color;

