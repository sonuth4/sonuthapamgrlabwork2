
var colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var ordinals = ["th", "st", "nd", "rd"];


function getOrdinal(n) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return ordinals[1]; 
    } else if (n % 10 === 2 && n % 100 !== 12) {
        return ordinals[2]; 
    } else if (n % 10 === 3 && n % 100 !== 13) {
        return ordinals[3]; 
    }
    return ordinals[0]; 
}


colors.forEach((color, index) => {
    const position = index + 1; 
    const ordinal = getOrdinal(position);
    console.log(`${position}${ordinal} choice is ${color}.`);
});
