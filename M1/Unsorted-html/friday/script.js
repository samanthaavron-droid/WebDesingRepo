function Rolldice() {
    let randomNumber = Math.floor(Math.random() * 6);
    console.log(randomNumber);
}
document.getElementById("myButton").addEventListener("click", Rolldice);


let isActive = false;

document.getElementById("Print").addEventListener("click", function() {
    isActive = !isActive;
    console.log("Button clicked! isActive =", isActive);
    let i = 124;

    if (isActive){
        while (i > 123 && i < 456) {
        console.log(i);
        i++;
        } 
    } if (!isActive){
        i = 124;
        console.clear();
        console.log("Button clicked! isActive =", isActive);
    }
});

document.getElementById("Cube").addEventListener("click", function() {
    let sideLength1 = prompt("Enter the length of one side of the cube:");
    let sideLength2 = prompt("Enter the length of the second side of the cube:");
    let sideLength3 = prompt("Enter the length of the third side of the cube:");
    let volume = Math.pow(sideLength1 * sideLength2 * sideLength3, 1);
    console.log("The volume of the cube is: " + volume);
});

document.getElementById("Cylinder").addEventListener("click", function() {
    let radius = prompt("Enter the radius of the cylinder:");
    let height = prompt("Enter the height of the cylinder:");
    let volume = Math.PI * Math.pow(radius, 2) * height;
    console.log("The volume of the cylinder is: " + volume.toFixed(2));
});

document.getElementById("Pythagoras").addEventListener("click", function() {
    let sideA = prompt("Enter the length of side A:");
    let sideB = prompt("Enter the length of side B:");
    let sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    console.log("The length of side C is: " + sideC.toFixed(2));
});

document.getElementById("sevenAvarage").addEventListener("click", function() {
    let inputs = [];
    let sum = 0;
    let i = parseFloat(prompt("Enter amount of numbers to avarage:"));

    while (inputs.length < i) {
    inputs.push(parseFloat(prompt("Enter value:")));
    }

    for (let i = 0; i < inputs.length; i++) {
    sum += parseFloat(inputs[i]);
    }

    let result = sum / inputs.length;
    console.log(result);
});