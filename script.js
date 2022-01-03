let colors = ['yellow', 'blue', 'red', 'orange'];
let arrayLength = colors.length;
let i = 0; 

while(i < arrayLength) {
    let val = colors[i]
    console.log(colors[i]);
    i++
}
 
let colors = ['yellow', 'blue', 'red', 'orange'];
let arrayLength = colors.length;

for (i = 0; i < arrayLength; i++) {
    console.log(colors[i]);
}

let colors2 = ['yellow', 'blue', 'red', 'orange'];
colors2.forEach(element => {
    console.log(element);
});


// while loop takes 9 lines
// for loop takes 6 lines
// forEach method takes 4 lines
// forEach is makkelijker omdat het meteen de array laat zien
