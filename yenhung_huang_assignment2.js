//Question1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Generating a new array which doubles the quantity and price
function doubleQuantityPrice(itemsObject) {
  return itemsObject.map((item) => {
    // Using map to transform and create new array
    return {
      quantity: item.quantity * 2,
      price: item.price * 2,
    };
  });
}

function filterItems(itemsObject) {
  return itemsObject.filter((item) => {
    // Generating a new array by filter which contains item quantity > 2 and price > 300 only
    return item.quantity > 2 && item.price > 300;
  });
}

function totalValue(itemsObject) {
  return itemsObject.reduce((accumulator, item) => {
    // Using reduce to iterate through the itemsObject array and return the total value of all the items
    return accumulator + item.quantity * item.price; // return the total value
  }, 0);
}

//main function
console.log("Function for double \n", doubleQuantityPrice(itemsObject), "\n");
console.log("Function for Filter \n", filterItems(itemsObject), "\n");
console.log("Function for total \n", totalValue(itemsObject), "\n");

//Question2

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return\
The Sum Of  All The Elements In  An Array  ";

function removeSpace(string) {
  return string
    .split(/\s{2,}/) // Replace more spaces
    .join(" ") // to one space
    .toLowerCase(); // Lower
}

//main function
console.log(removeSpace(string), "\n");

//Question3
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

function merge(array1, array2) {
  let array3 = []; // Create new array

  for (let i = 0; i < array1.length; i++) {
    // Creating object with all properties
    tmp = {
      uuid: array1[i].uuid,
      name: array1[i].name,
      role: null, // Fill with null since first has no role
    };
    array3.push(tmp); //pushing the new object to the resultant array
  }

  for (let i = 0; i < array2.length; i++) {
    //Creating a new object with the required properties
    tmp = {
      uuid: array2[i].uuid,
      name: null, // Fill with null since second has no name
      role: array2[i].role,
    };
    array3.push(tmp); //pushing the new object to the resultant array
  }

  array3.sort((a, b) => {
    return a.uuid - b.uuid;
  });
  return array3; //returning the resultant array
}

//main function

console.log(merge(first, second));
