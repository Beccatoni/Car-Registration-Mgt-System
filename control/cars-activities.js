const {cars} = require('../db/cars_list');

function generateRandomPlateNum(){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    // Generate random letter
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    // console.log(randomLetter);
    const randomLetter2 = letters[Math.floor(Math.random() * letters.length)];
    const randomLetter3 = letters[Math.floor(Math.random() * letters.length)];
    const randomLetter4 = letters[Math.floor(Math.random() * letters.length)];
    
    // generate random number
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const randomNumber2 = numbers[Math.floor(Math.random() * numbers.length)];
    const randomNumber3 = numbers[Math.floor(Math.random() * numbers.length)];

    const plateNum = `${randomLetter}${randomLetter2}${randomLetter3}${randomNumber}${randomNumber2}${randomNumber3}${randomLetter4}`;
    return plateNum;
} 
// adding a new car to the list of cars

const addNewCar = (car) => {
//  car.plateNumber = generateRandomPlateNum();

 console.log("New car to add: ",car);

 cars.push(car);
 console.log("Added car to list and here is the list: ",cars);
}

// Listing the cars in the store
const displayingCars = () => {
    console.log("Here is the list of all of the cars in the store:",cars);
}

// updating a car by plate number
const updatingCar = (plateNumber, key, value) => {
    const carToUpdate = cars.find((car) => car.plateNumber === plateNumber);
    console.log(carToUpdate);
    carToUpdate[key] = value;
    console.log('The car updated successfully:\n',carToUpdate);
    console.log("Here is the list of all of the cars in the store:",cars);
}

// deleting a car from the store;

const deletingCar = (plateNumber) => {
    const carToDelete = cars.find((car) => car.plateNumber === plateNumber);
    if (carToDelete) {
        console.log(carToDelete);
        cars.splice(cars.indexOf(carToDelete), 1);
        console.log('The car deleted successfully:\n',carToDelete);
        console.log("Here is the list of all of the cars left in the store:",cars);
    }
    else {
        console.log('The car you are trying to delete does not exist in the store');
    }
    
}

module.exports = {
    addNewCar,
    generateRandomPlateNum,
    displayingCars,
    updatingCar,
    deletingCar,
}
