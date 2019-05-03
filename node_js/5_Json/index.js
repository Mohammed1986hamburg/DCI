const fs=require('fs'); // to work with filesystem core module
const util=require('util'); // to work with promise core module


const readPromiseWay = util.promisify(fs.readFile);
const writePromiseWay = util.promisify(fs.writeFile);
const appendPromiseWay = util.promisify(fs.appendFile);

const dealWithFiles = async (file1, file2, file3) => {

  try {
    const data = await readPromiseWay(file1);
    console.log('Read done!');
    await writePromiseWay('./empty.txt', data.toString('utf8'));
    console.log('Write done!');
    await appendPromiseWay('./empty.txt', 'That was added by Jake, minutes before the break');
    console.log('Append operation finished!');
    const results = await readPromiseWay('./lorem.txt');
    console.log('Read lorem ipsum');
    await appendPromiseWay('./empty.txt', ' ' + results.toString('utf8'));
    console.log('Appended the lorem ipsum');
} catch(error) {
    console.log(error);
  }
}

dealWithFiles('./example.txt', './empty.txt', './lorem.txt');

console.log('Execute first!');






/*
readFilePromise('./ex.txt')
.then(data=> console.log(data))
.catch(err=>console.error(err))
*/



/*
fs.readFile('./ex.txt',(err,data)=>{ //readFile is asyn it will  go to next line regadless finshing read file

    if (err) console.log(err);
    else console.log(data.toString('utf8'));

});
console.log('next, but still reading');


fs.writeFile('./newFile.txt',`Hallo Mohammed`,err=>{ //writeFile is asyn it will  go to next line regadless finshing read file

    if (err) console.log(err);
    else console.log('Writing done');
    
});
console.log('next, but still writing');
*/

//--------------------------------------------


//const text=fs.readFileSync('./ex.txt'); //readFileSync it will not go to next line until finshing read file 
//console.log(text.toString('utf8'));


//-------------------------------------------



//const studentsData= require('./first.json');

//let findNameFav=(array,name)=>array.find(object=>object.firstName.toLowerCase()===name.toLowerCase()).favTopic;
//console.log(findNameFav(studentsData, process.argv[2]));

//-------------------------------------------------------
/*fs.readFile('./ex.txt',(err,data)=>{
    if(err)console.log(err);
    else {

        fs.writeFile('./newFile2.txt',data.toString('utf8'), err=>{
            if(err)console.log(err);
            else fs.appendFile('./newFile2.txt',"Second Append is done",err=>{
                if(err) console.log(err);
            });
        })
    } 
})
*/



