'use strict';

function hazardWarningCreator(typeOfWarning){
    let warningCounter=0;

    return location => {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);

    };
}

//instances
const godzillaWarning = hazardWarningCreator('Godzilla on the Loose');
const manholeWarning = hazardWarningCreator('Manhole Cover Uncovered');
const rockWarning = hazardWarningCreator('ROCKS ON THE ROAD');



godzillaWarning('East Lanvale St');
godzillaWarning('West Lanvale St');
manholeWarning('Saybrook View St');
rockWarning('Rocky Road');



