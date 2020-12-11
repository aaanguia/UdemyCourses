/**
 * for...in loops over the keys of the object
 */
const fitbitData = {
    totalSteps : 300008,
    totalMiles : 100,
    avgCalorieBurn : 5755,
    workOutThisWeek : ' 5 of 7',
    avgGoodSleep : '2:13'
}

/** Get the key */
for (let prop in fitbitData){
    console.log(prop);
}


/** get the value */
for (let prop in fitbitData){
    console.log(fitbitData[prop]);
}