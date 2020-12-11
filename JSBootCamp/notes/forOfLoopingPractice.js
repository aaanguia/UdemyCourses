/** Iterating elements in an array to  */
const myFriends = ['Garrett', 'Nicky', 'Allen', 'Donald', 'JC', "The Rest of the bois"];

for( let friends of myFriends){
    console.log(friends);
}

/** Using for of loop on an object */
const fitbitData = {
    totalSteps : 300008,
    totalMiles : 100,
    avgCalorieBurn : 5755,
    workOutThisWeek : ' 5 of 7',
    avgGoodSleep : '2:13'
}

/** Printing the Properties/Keys from the object*/
for(let trackedStats of Object.keys(fitbitData)){
    console.log(trackedStats);
}

/** Printing the Values of the fitbitData Properties  */
for(let trackedStatsValues of Object.values(fitbitData)){
    console.log(trackedStatsValues);
}

