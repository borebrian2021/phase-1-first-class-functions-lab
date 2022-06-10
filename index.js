// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){

return drivers.slice(2)

}
// let   selectingDrivers=[['Amari', 'Mo',],'Antonia', 'Nuru',]
const selectingDrivers = [returnFirstTwoDrivers,
     returnLastTwoDrivers];




function createFareMultiplier(value) {
    return function(fare=5) {
        return fare * value;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
}