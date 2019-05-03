// 1
let exampleUrl =`https://reqres.in/api/users`;
let btn =document.querySelector(`button`);

let getusers =ev => {
 fetch(exampleUrl)
  .then(response => response.json())
  .then(obje => {
 for ( user of obje.data) {
   let section= document.createElement(`SECTION`);
   let firstHeading =document.createElement(`H3`);
   let secoundHeading =document.createElement(`H4`);
   let imge =document.createElement(`IMG`);
   firstHeading.innerText=user.first_name;
   secoundHeading.innerText=user.last_name;
   imge.src =user.avatar;
   section.appendChild(firstHeading);
 section.appendChild(secoundHeading);
   section.appendChild(imge);
   document.body.appendChild(section);
 }
                             // console.log(obje.data); // or obje.data to see the data just
  })


}

btn.addEventListener(`click`,getusers); 

// 2
let exampleUrl2 =`http://35.156.88.18:3050/comments`;
let btn2 =document.querySelector('#my');

let getusers2 =ev => {
 fetch(exampleUrl2)
  .then(response => response.json())
  .then(commentsAll => {  console.table(commentsAll);
 for ( commentInfo of commentsAll) {
   let section= document.createElement(`SECTION`);
   let firstHeading =document.createElement(`H1`);
   let secoundHeading =document.createElement(`H5`);
   firstHeading.innerText=commentInfo.name;
   secoundHeading.innerText=commentInfo.body;
   section.appendChild(firstHeading);
    section.appendChild(secoundHeading);
   document.body.appendChild(section);
 }
                           
  })


}

btn2.addEventListener(`click`,getusers2); 