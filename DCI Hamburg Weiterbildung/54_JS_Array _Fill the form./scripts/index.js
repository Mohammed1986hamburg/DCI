let students = function(fullname,wichcourse,staticfaction) {

    this.fullname = fullname,
    this.wichcourse = wichcourse,
    this.staticfaction = staticfaction,
    this.interperpretfeel =function() {
      if(this.staticfaction > 80) this.mood =`He/she found the course perfect`;
      else if(this.staticfaction >= 50) this.mood =`He/she found the course oversall`;
      else this.mood =`Keeps complaining.potential  refund is comming`;
    }
  }
  
  let num1 = new students( `Mohamad lahham`,`course:js`,65);
  let num2 = new students( `Murhaf x`,`course:js`,70);
  let num3 = new students( `moh`,`course:java`,58);
  let num4 =new students ( `Marcelo`,`course:css`,85);
  let num5 = new students( `MURO VV`,`course:PAYTHON`,60);
  let num6 = new students( `JHANNES VGF`,`course:CSS`,70);
  let num7 = new students( `JAKE KO`,`course:js`,99);
  let num8 = new students( `yASMINE HJHJ`,`course:js`,65);
  let num9 = new students( `Mohamad w`,`course:js`,65);
  let num10 =new students(  `Mohamad nour`,`course:js`,65);
  
  let allofstudents = [
   num1,
   num2,
   num3,

   num4,
   num5,
   num6,
   num7,
   num8,
   num9,
   num10];
  let addMood=function (array) {
    for (let student of array) {
      console.log(student.mood);  
     student.interperpretfeel();
     console.log(student.mood);
     }
  }

  addMood(allofstudents);




// Fill the form.
// Suppose you are a web developer teacher that teaches 3 different types of courses. 'JS course', 'PHP course' and 'Ruby course' in an online platform. You ask for feedback from 10 people that have taken various courses from you (but each person only one course). 

// Create an object for each client that holds student's full name in one property, his level of satisfactory from 1-100 from the services you have offered him and the product course he has bought from you.

// ex.

// {fullName: 'Kostas Diakogiannis', courseHasTaken: 'PHP Course', levelOfSatisfaction: 45}

// Create 10 objects like that and store them in an array called clients. 

// For every object add a new property that is going to be a string and depends on levelOfSatifaction value.

// For example if the levelOfSatisfaction is more than 80 add a new property with a name of happinessCondition and assign to it a 'Found the course perfect'.

// For just more than 50 assign the value into it 'Content overall', 

// For 50 or lower, assing a value of  'Customer is compleining, potential refund is going to be asked'.

// After that, calculate the average satisfaction level per course. Store the results for each into an array and print the title of the course that has the biggest average of the three courses. 