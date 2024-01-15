let raceNumber = Math.floor(Math.random() * 1000);

let registrationTime = false;

let runnersAge = 18;

if (registrationTime === true && runnersAge >= 18) {
    raceNumber += 1000;
}

if (runnersAge >= 18 && raceNumber > 1000) {
    console.log(`You will race at 9:30am and your race number is ${raceNumber}.`);
}
else if(runnersAge >= 18 && raceNumber <= 1000) {
    console.log(`You will race at 11:00am and your race number is ${raceNumber}`);
}
else {
    console.log(`Youth runtime will be at 12:30pm and your race number is ${raceNumber}.`)
}
