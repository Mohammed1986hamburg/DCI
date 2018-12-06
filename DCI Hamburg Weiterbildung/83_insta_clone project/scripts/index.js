
let rightLi=document.querySelector("#instaClone");
let linkLi=document.querySelector("#FtechImgaes");
let BigImg=document.querySelector("#bigIMG");
const divContainer = document.querySelector('#container');
const localURL = "../json/insta.json";





    let FetchImages = async ev => {
    try {
             let getUrl =  await fetch(localURL);
             let data = await getUrl.json();
             console.log(data);
             for (const info of data) 
             {
                let section = document.createElement('SECTION');
                let image=document.createElement('IMG');  
               let imageCopy=document.createElement('IMG');
                let title = document.createElement('H3');
                let Paragraph = document.createElement('P');
                image.src=info.address;
                imageCopy.src=info.address;
                title.innerText = info.title;
                Paragraph.innerText = info.description;
               
                section.appendChild(image);
                section.appendChild(title);
                section.appendChild(Paragraph);
                divContainer.appendChild(section);

               section.addEventListener('click', ev=>{
               let bigDiv=document.createElement("DIV");
               bigDiv.classList.add('bigDiv');
               document.body.appendChild(bigDiv);
               bigDiv.appendChild(imageCopy);
               let spanCloseParagaph = document.createElement('SPAN');
               spanCloseParagaph.innerHTML = 'X';
               bigDiv.appendChild(spanCloseParagaph);
               spanCloseParagaph.addEventListener('click', function (ev) {
                  let paragraphToBeRemoved = ev.currentTarget.parentElement; // ev.currentTarget=spanInsideParagaph
                  paragraphToBeRemoved.parentElement.removeChild(paragraphToBeRemoved);  //paragraphToBeRemoved.parentElement.removeChild()=document.body.removeChild();
                })

               });
               
             }

             }
      
             catch(error)
     {
             console.warn(error);
    }
    linkLi.removeEventListener('click', FetchImages);
}
    

linkLi.addEventListener('click', FetchImages);
