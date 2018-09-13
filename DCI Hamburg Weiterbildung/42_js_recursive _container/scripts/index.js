
function container(id,maxWeight,weightIncluded,weightNextContainer) {
 
    if (id <= 100) {
        weightIncluded += 10;
        weightNextContainer = 10;
    } else if (id <= 200) {
        weightIncluded += 20;
        weightNextContainer = 20;
    } else if (id <= 250)  {
        weightIncluded += 50;
        weightNextContainer = 50;
    } else if (id <= 300){
        weightIncluded += 100;
        weightNextContainer = 100;
    } else if (id <= 400) {
        weightIncluded += 200;
        id === 400 ? weightNextContainer = 500 : weightNextContainer = 200;
    } else {
        weightIncluded += 500;
        weightNextContainer = 500;
    }
    
    id++

if (maxWeight >= weightIncluded + weightNextContainer) {
    container(id,maxWeight,weightIncluded,weightNextContainer);
} else {
    return console.log(`I have included ${id} containers to the ship and the weightIncluded is ${weightIncluded}!`);
        }
}

container(1,10000,0,10);
