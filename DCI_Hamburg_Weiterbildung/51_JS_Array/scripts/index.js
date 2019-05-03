

let schoolStaf = {
  math: 'soso',
  science: 'momo',
  history: 'zozo',
  geography: 'toto'
}

let programming_1=['fofo',"c#","php","JS"];
let programming_2=['nono',"c#","php","c#","php"];

let compare=function(x,y){
  x.length>y.length?schoolStaf.programming=x[0]:schoolStaf.programming=y[0];
}

compare(programming_1,programming_2);
console.log(schoolStaf);





// Compare polyglots

// Imagine that you are the manager of a school that teaches 5 topics. Math, science, history, geography and programming. For the first 4 topics you have already found the teachers to conduct the lessons and now you are actively looking for the fifth one.

// First of all create an object that holds the topics as keys and the fullname of the teacher as a string value. Thus you don't forget from now on who is going to teach what.

// Then create a method that accepts 2 arrays. These arrays contain the programming languages that candidates for the programming position have. Also the first and second element of each of these arrays contain the firstname and the lastname of each of the candidates as well. The method should compare, and understand who has more programming languages under his/her belt and put his/her name in the fifth property of the object.