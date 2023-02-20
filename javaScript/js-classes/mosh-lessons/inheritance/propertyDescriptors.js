let person = { name: 'yorch' };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptors(objectBase, 'toString');

console.log(descriptor);

// Making the name property not writable 
Object.defineProperty(person, 'name', {

    // By default all this properties are set to true [enumerable, configurable, writable]
    writable: false,
    // Setting this property to false, It will not show the key, in this key name.
    enumerable: false,
    // If you set the configurable property to false, you won´t able to delete this property in this case name
    configurable: false

})

person.name = 'John';
console.log(person.name)

// To log the keys from an object
console.log(Object.keys(person));

// You can delete this property, cause the configurable property from the name property is set to false.
delete person.name;

console.log(person.name);