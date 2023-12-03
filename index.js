const {addNewCar, generateRandomPlateNum, displayingCars, updatingCar, deletingCar} = require('./control/cars-activities')

// example usage of car adding
let carNew = {
    plateNumber: generateRandomPlateNum(),
    make: 'Suzuki',
    model: 'Focus',
    year: 2011,
    color: 'black',
    owner: 'Nancy Tesi'
}
addNewCar(carNew);

// displaying cars
displayingCars();


// updating a car by plate number and changing the property value
updatingCar('XYZ789A', 'owner', 'Kunda Guy');

// deleting a car by plate number
deletingCar('XYZ989A');

