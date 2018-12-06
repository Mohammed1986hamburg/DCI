let paragraphCss = {'display':'block', 'color':'#000',"background":'#ccc', "padding": "2vw 0"};  // here is not DOM

$().ready( ev => {  // .ready it is the event when the DOM is ready    
//$() select thr body
console.log('it was loaded');

   
$('button').click(ev => {
    // $('p').fadeToggle();
    // $('p').slideToggle();
       $('p').animate({left: '250px'});

    })



















})