// code your solution here
function superbowlWin(arr) {
    //arr is array of objects
    //each object has year and result property
    //use find() to test if result === "W"
    const obj = arr.find(element => element.result === "W")
    if(obj){
        return obj.year
    }
    else {
        return undefined;
    }
}
