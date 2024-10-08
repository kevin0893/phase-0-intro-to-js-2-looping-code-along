function writeCards(array, name) {
    let emptyArrays = [];
    for (let i = 0; i < array.length; i++) {
        // Correctly format the message
        let emptyArray = `Thank you, ${array[i]}, for the wonderful surprise gift!`;
        emptyArrays.push(emptyArray);
    }
    return emptyArrays;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num); // Log the current number
        num--; // Decrement the number
    }
}

// Example usage
const names = ["Guadalupe", "Ollie", "Aki"];
const messages = writeCards(names, "surprise");
console.log(messages);

// Call countDown to see the output in the console
countDown(10); // This will log each number from 10 to 0
