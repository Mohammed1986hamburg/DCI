const form=document.querySelector('form');
let postBtn =document.querySelector(`#post`);
let allInputs =document.querySelectorAll(`input`);

const requiredFields=['firstName','lastName','userName','email','password'];

let url=`/users`;
// Example POST method implementation:
let postData= function(url = ``) {

    let data = {};
   
      for (let i = 0; i < allInputs.length; i++) {
        data[requiredFields[i]]=allInputs[i].value; 
      }

      // forEach
    return fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(res=> {
        const paragraph=document.createElement('p');
        paragraph.innerHTML=res.message;
        document.body.appendChild(paragraph);
      })
      .catch(error => {
        console.log(error);
        //const paragraph=document.createElement('p');
        //paragraph.innerHTML=error.TheErrors[0].msg;
        //document.body.appendChild(paragraph);  
      })
}


postBtn.addEventListener(`click`,ev=>{
  ev.preventDefault();
  postData(url);
})


