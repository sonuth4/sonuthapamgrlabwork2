const countries = [
    "India", "United States", "Canada", "Brazil", "United Kingdom", "Germany",
    "France", "Italy", "Spain", "China", "Japan", "Australia", "New Zealand",
    "South Africa", "Mexico", "Argentina", "Colombia", "Russia", "South Korea", 
    "Indonesia", "Saudi Arabia", "Turkey", "Thailand", "Vietnam", "Egypt", 
    "Nigeria", "Kenya", "Ethiopia", "Pakistan", "Bangladesh", "Malaysia",
    "Philippines", "Singapore", "Greece", "Portugal", "Netherlands", "Sweden",
    "Switzerland", "Denmark", "Norway", "Finland", "Iceland", "Poland", "Ukraine"
];

const table = document.getElementById('countries-table');

function createCountriesTable(countries) {
    const numRows = Math.ceil(countries.length / 6); 
    let tableContent = "<thead><tr><th>Countries</th></tr></thead><tbody>"; 

    for (let i = 0; i < numRows; i++) {
        tableContent += "<tr>"; 
        for (let j = 0; j < 6; j++) {
            const countryIndex = i * 6 + j;
            if (countryIndex < countries.length) {
                tableContent += `<td>${countries[countryIndex]}</td>`;
            } else {
                tableContent += "<td></td>"; 
            }
        }
        tableContent += "</tr>";
    }

    tableContent += "</tbody>";
    table.innerHTML = tableContent; 
}

createCountriesTable(countries);
