let man={
    bankAcount_$:1000,
    residenceCountry:'Germany ', 
} 

let jake=Object.create(man);
let daniel=Object.create(man);

let mhd={
    inherite:Object.create(man),    // the mhd object has inherite object
    firstName:'Ali',
    lastName:'Alsaher',

    showAcount:function () {
    return `${this.firstName}`+" has "+`${this.inherite.bankAcount_$}`;
    }
}

console.log(mhd.showAcount());







 



// Convert currency

// Create three person objects with the necessary info. Firstname, lastname, and bank account and country of residence. 

// The bank account is going to be a number that the person has to his/her bank account in US dollars. 

// Add a new property that corresponds to how much 1$ to the currency of every person's country corresponds.

// The persons are coming from Greece, Switzerland and Australia respectively. 

// Create a function that creates a new property for each person that shows the bank account in his country's money.


// ccRatio:1,    //Convert_Currency_Ratio
// convertToLocal: function (x) {
//     this.ccRatio=x;
//     return this.bankAcountCurrent=this.bankAcount_$*this.ccRatio;
// },