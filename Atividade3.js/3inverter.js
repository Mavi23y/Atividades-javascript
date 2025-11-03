let originalArray = [1, 2, 3, 4, 5];
let inversaArray = [];

for (let i = originalArray.length -1; i >= 0; i--) {
    inversaArray.push(originalArray[i]);
}
console.log(inversaArray);