// Code your solution in this file!
const drivers = [];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function (value) {
        return fareMultiplier * value;
    }
}

const fareDoubler = function (fareMultiplier) {
    return fareMultiplier * 2;
}

const fareTripler = function (fareMultiplier) {
    return fareMultiplier * 3;
}

const selectDifferentDrivers = function (drivers, func) {
    return func(drivers);
}