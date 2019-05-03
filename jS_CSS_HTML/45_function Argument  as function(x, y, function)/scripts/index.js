



let add=function (a,b) {       //normal function 1
    return a+b;
} 

let sub=function (a,b) {       //mormal function 2
    return a-b;
}

let multi_Func=function (x,y,fn) {     //function with function Argument  
    return console.log(fn(x,y)); 
}

multi_Func(4,2,add);
multi_Func(8,4,sub);