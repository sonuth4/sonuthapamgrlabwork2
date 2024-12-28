// Sample arrays
var colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var ordinals = ["th", "st", "nd", "rd"];

// Function to get the correct ordinal suffix
function getOrdinal(n) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return ordinals[1]; // 'st'
    } else if (n % 10 === 2 && n % 100 !== 12) {
        return ordinals[2]; // 'nd'
    } else if (n % 10 === 3 && n % 100 !== 13) {
        return ordinals[3]; // 'rd'
    }
    return ordinals[0]; // 'th'
}

// Display the colors with ordinals
colors.forEach((color, index) => {
    const position = index + 1; // Position starts from 1
    const ordinal = getOrdinal(position);
    console.log(`${position}${ordinal} choice is ${color}.`);
});
