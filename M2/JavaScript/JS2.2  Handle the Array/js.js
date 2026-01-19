let myArray = [1,2,"b","c", true];

console.log(myArray.length);

let thisString = myArray.toString();
console.log(thisString);

console.log(myArray.at(2));

console.log(myArray.join("-"));

console.log(myArray.pop());

myArray.push("bugaga");
console.log(myArray);

console.log(myArray.shift());

myArray.unshift(0);
console.log(myArray);

myArray2 = [11,22,33,44];
myArray.concat(myArray2);
console.log(myArray);

console.log(myArray.copyWithin(0, 3, 4));

myArray3 = [1,[2,[3,[4]]]];
console.log(myArray3.flat(2));

myArray.splice(1,0, "February");
console.log(myArray);

myArray4 = myArray.toSpliced(2,2);
console.log(myArray4);

console.log(myArray.slice(2,4));

console.log(myArray.indexOf("c"));

console.log(myArray.lastIndexOf("b"));

console.log(myArray.includes(true));

console.log("before sorting: " + myArray);
console.log(myArray.sort());

console.log(myArray.reverse());