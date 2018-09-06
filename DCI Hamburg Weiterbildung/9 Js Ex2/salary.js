var form = document.querySelector('form');

var Input1age = document.querySelector('input:first-of-type');   // here  Input1age is refrence to 'input:first-of-type'  
var Input2re = document.querySelector('#second');
var Input3salary = document.querySelector('#third');
var Input4tax = document.querySelector('input:last-of-type');


function calc( age,reAge,money,tax){
	var yearsRem = reAge - age;
	var calcNettMonth = money - (money*tax/100);
	const monts = 12;
	return yearsRem*calcNettMonth*monts;
}

form.addEventListener('submit', function(ev){
	
	var a1 = parseInt(Input1age.value);        // parseInt to convert to number
	var a2 = parseInt(Input2re.value);
	var a3 = parseInt(Input3salary.value);
	var a4 = parseInt(Input4tax.value);

	ev.preventDefault();         // do not send the data 

	var myMoney = calc(a1,a2,a3,a4);
	// console.log(myMoney);

	var paragraph1 = document.createElement('P'); // 1  create the element
	paragraph1.innerHTML = 'MOhammed Wahba';     //  2  write in paragraph1 the text : Mohammed Wahba 
	document.body.appendChild(paragraph1);      //  3 set the paragraph1 in thr bottum in body 

	var paragraph2 = document.createElement('P');
	paragraph2.innerHTML = `your Total <span>${myMoney}</span>`;      //with ${}  ``  not '' 
	document.body.appendChild(paragraph2);      

	Input4tax.value = '';
	Input1age.value ='';
	Input3salary.value = '';
	Input2re.value = '';
});