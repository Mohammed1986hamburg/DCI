// function power(x,n) {
//     if(n == 0)return 1;
//     else return x*power(x,n-1);
// }

// console.log(power(5,8));




// function power_1_up_n(x,n) {

//     for (let i = 1; i <= n; i++) {

//         function power(x,i) {
//             if(i == 0)return 1;
//             else return x*power(x,i-1);
//         }
        
//         console.log(power(x,i))
     
//     }
   
// }

// power_1_up_n(3,5);



function power(x,n) {
    if(x == 0)return;
    else {
        for (let i = 1; i <=n; i++) {
            console.log(x*i);
            
        }
    }
    power(x-1,n); 
}
power(5,4);

