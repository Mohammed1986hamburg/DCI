let PayperMonth = {

    July:1000,
    August:2000,
    Septemper:5000,
    
    }
    
    let  calculateAvberage = function(obj) {
    
    let  sum = 0;
    let count =0;
    for(let props in obj ) {
    
     sum += obj[props];
     count++;
    }
    return obj.average = sum / count;
    
    
    }
    
    console.log(PayperMonth);
    
    console.log(calculateAvberage(PayperMonth));

    console.log(PayperMonth);
    



    // let PayperMonth = {

    //     July:1000,
    //     August:2000,
    //     Septemper:5000,
        
    //     }
        
    // let  calculateAvberage = function(obj) {
        
    //     let  sum = 0; 
    //     //create new properties count later without declaring in the object
    //     obj.count=0;
    //     for(let props in obj ) {
            
    //         obj.count++;
    //         }
    //         return obj.count;
    //     }
        
    // console.log(PayperMonth);
        
    // console.log(calculateAvberage(PayperMonth));
    
    // console.log(PayperMonth);