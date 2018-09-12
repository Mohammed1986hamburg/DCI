var num = 1;
while (num<101) {
    var message=`The ${num} number you have out is `;
    num%2===0?message+='even':message+='odd';
    console.log(message);
    num++ 
}