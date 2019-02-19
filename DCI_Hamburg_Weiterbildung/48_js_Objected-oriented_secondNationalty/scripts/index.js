let jake = {
    firstName: `Konstantinos`,
    lastName: `Diakogiannis`,
    nickName: `Jake`,
    age: 30,
    profession: `Machine Learning engineer`,
    livesAtHome: false,
    calculateAgeAfterTheseYears: function(afterYears) {
      console.log(this.age + afterYears);
    }
  };
  
  let eugen = {
    firstName: 'Jewgeny',
    lastName: 'Kuhn',
    nickName: 'Eugen',
    age: 32,
    profession: 'media designer',
    livesAtHome: false,
    calculateAgeAfterTheseYears: function(afterYears) {
      console.log(this.age + afterYears);
    },
    changeAge: function(newAge) {
      this.age = newAge;
    }
  }
  
  
  let foreigner = {
    firstName: 'Chris',
    lastName: 'Evans',
    age: 28,
    yearsOfResidence: 12,
    nationality: 'United States',
    currentProfession: 'Unemployed',
    currentSalary: 0,
    countryOfResidence: 'Greece',
    countryLimit: 10,
    allowedDoubleNationality: false,
    checkResidence: function() {
      if (this.yearsOfResidence >= this.countryLimit) {
        if (this.allowedDoubleNationality) {
          this.secondNationality = this.countryOfResidence;
        } else {
          this.nationality = this.countryOfResidence;
        }
      }
    }
  }
  
  foreigner.checkResidence();
  
  console.log(foreigner);