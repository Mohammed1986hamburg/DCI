const fs=require('fs');
const util=require('util');

const readAbleStream=fs.createReadStream('./lorem.txt');
const writeAbleStream=fs.createWriteStream('./empty.txt');

readAbleStream.pipe(writeAbleStream);