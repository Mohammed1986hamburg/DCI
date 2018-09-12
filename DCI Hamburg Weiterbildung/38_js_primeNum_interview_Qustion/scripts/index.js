var num=prompt('enter the max');
var numInt=parseInt(num);
var i=1;
while (i<=numInt){
    var isPrime=true;
        var ii=2;
        while (ii<=i-1) {
            if(i%ii==0){
                isPrime=false;
                break;
            }
            ii++;
        }
        if(isPrime===true){
            console.log(i);
        }
    i++;
    
    
}