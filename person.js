const person = {
    name: 'Rodrigo',
    age: 28,

    // The following function won't work, because this will refer to the global scope, and not to the object scope
    greet_wrong:() =>{
        console.log('Hi, I am ' + this.name);
    },

    // The following function will work
    greet_opt1: function () {
        console.log('Hi, I am ' + this.name);
    },

    // The following function will also work
    greet_opt2() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet_wrong();
person.greet_opt1();
person.greet_opt2();