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
hobbies.push('Programming')