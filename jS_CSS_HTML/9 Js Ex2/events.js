var selectfield = document.querySelector('select');
var text = document.querySelector('article');


function changeTextSize() {                   // ev: means the event is its self
	text.style.fontSize = selectfield.value;
}
selectfield.addEventListener('change',changeTextSize)


// document.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red";
// });