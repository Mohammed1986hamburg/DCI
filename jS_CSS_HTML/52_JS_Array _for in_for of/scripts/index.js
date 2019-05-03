
let all=[1,2,3,4,5,6,7,8,9];
let notLike=[1,3,5,7,9];

for (const x of all) {
  if (notLike.includes(x)) {
    continue;
  }
  console.log(x);
}



















