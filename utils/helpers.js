// Function to re-organize data from array of objects (specifically for
// Mongoose) to objects with id : data key-value pairs

function arrayToObjectById(dataArray) {
  const dataObj = {};

  // Id is _id field for mongoose/mongodb
  dataArray.forEach(datum => (dataObj[datum._id] = datum));

  return dataObj;
}

module.exports = arrayToObjectById;
