async function dataLoadTest(){
    const results = await fetch('/addToDB',{
    method:"GET"
})
// console.log(await results.json())  
displayResultsInTable(await results.json())
}
function displayResultsInTable(results) {
// Create table element
var table = document.createElement('table');
table.style.width = '100%';
table.setAttribute('border', '1');

// Create table header row based on object keys
var thead = table.createTHead();
var headerRow = thead.insertRow();
var firstObject = results[0];
for (var key in firstObject) {
var th = document.createElement('th');
th.textContent = key;
headerRow.appendChild(th);
}

// Create table body rows based on object values
var tbody = table.createTBody();
results.forEach(function(object) {
var tr = tbody.insertRow();
for (var key in object) {
    var td = tr.insertCell();
    td.textContent = object[key];
}
});

// Append the table to the body or a specific element
document.body.appendChild(table);
}


window.onload=dataLoadTest ;