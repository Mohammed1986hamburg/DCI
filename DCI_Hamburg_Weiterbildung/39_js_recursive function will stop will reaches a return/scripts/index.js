function printNums(intialPoint) {
    console.log(intialPoint);
    if (intialPoint===100) {
        return;             // the function will stop here
    }
    intialPoint++;
    printNums(intialPoint);   
}


printNums(1);