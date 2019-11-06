const person = {
    name: 'Rodrigo',
    age: 28,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies){
    console.log(hobby)
}

console.log(hobbies.map(hobby=>hobby.toUpperCase()));
// Old array will not be changed
console.log(hobbies);

// Constant arrays may be changed, as the variable will still be pointing to the same array. We are just changing the array, and not where the constant is pointing to

// How to copy arrays
const copiedArray1 = hobbies.slice();
hobbies.push('Flying')
console.log('Copy 1');
console.log(copiedArray1);
console.log(hobbies);

const copiedArray2 = [...hobbies];
hobbies.push('Playing Soccer')
console.log('Copy 2');
console.log(copiedArray2);
console.log(hobbies);

const copiedArray3 = hobbies;
hobbies.push('Programming')
console.log('Copy 3');
console.log(copiedArray3);
console.log(hobbies);
