// This is a JSON object
const jsonData = '{"book", {"name": "JSON Primer", "price": 29.99, "isStock": true, "rating": null } }';

// Converting a JSON object into a JS object
const jsObject = JSON.parse(jsonData);

// New JS object
const person = {
    name: 'Kate',
    age: 45,
    children: [{
        name: 'Kim',
        age: 3
    },
    {
        name: 'Lee',
        age: 1
    }]
}

// Converting a JS object to a JSON object
const convertToJSON = JSON.stringify(person);