var a = new Date();let start=a.getTime();
// .........................................................



class Human {
    constructor (){
        this.species="human";
        this.eyes=2;
        this.legs=2;
        this.hands=2;
    }
}

class SouthAmer extends Human{
    constructor(dance,drink,lang){
      super();
      this.canDance=dance;
      this.loveFottball=true;
      this.drink=drink;
      this.lang=lang;
    } 
}

class Brazilians extends SouthAmer{
    constructor(){
      super(['Samba','salsa'],"piscola",'portuguese');
      this.music=true;
    }
}
   
class Chileans extends SouthAmer{
        constructor(hobbies,profession){
        super('everything',"vodca",'English');
        this.hobbies=hobbies;
        this.profession=profession;
        }
}

let Mauro= new Chileans(['fishing','Music'],'sprot');
let bobo= new Chileans();

console.table(Mauro);





















// .........................................................
var b = new Date();let end=b.getTime();console.log(`your code took ${end-start} milliseconds `);

