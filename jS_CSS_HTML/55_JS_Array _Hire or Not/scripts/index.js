let gotHired=[];
let languages=['php','js','ruby','python','java'];

  let can1 = [`Mohamad lahham`,'php','js','ruby','python','java'];
  let can2 = [`Murhaf x`,'c#','c++','c','python','java'];
  let can3 = [`moh`,'php','js','ruby','python','java'];
  let can4 = [ `Marcelo`,'php','js','ruby','python','java'];
  let can5 = [`MURO VV`,'php','js'];
  let can6 = [`JHANNES VGF`,'php'];
 
  let allCandidates=[can1,can2,can3,can4,can5,can6];
  
let addEmplyed=function (preequisites,allCan,toPush) {
    for (let person of allCan) {
      let count=0;
      for (let skillsOfperson of person) {
        if(preequisites.includes(skillsOfperson))count++;
        if(count==3){ toPush.push(person[0]); break;}
      }
    }
    console.log(toPush);
  }


addEmplyed(languages,allCandidates,gotHired);

 
// Imagine that you work currently as an HR manager in a company that wants to hire developers. The prerequisites for hiring someone is to know 3 of the 5 following programming languages. PHP, JavaScript, Ruby, Python and or Java.

// If the candidate has at least 3 of these 5 skills then he should be hire. 

// Create an array that holds the prerequisites. And a different array that holds every candidate's skills. Write a function so it can be re-usable for multiple pre-requisites and multiple candidates at the same time.

// Create an empty array to store the full name of the ones that got hired.

// If the guy is hired, push his name to the employed ones array. At the end this array is going to contain the names for every person that got hired.

// Hint: Use the push and the includes method you learned.