// Objects
var aaa = { 
    "key": "value", 
    "key1": "value1"
}

// declare object
var person = {
    firstName: "Art",
    lastName: "dvp",
    age: 26,
    gender: "Male",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// call object
// Method 1
// objectName.propertyName
console.log(person.firstName);

// Method 2
// objectName["propertyName"]
console.log(person["lastName"]);

// Method 3
// objectName.methodName()
console.log(person.fullName());

// Object Nested morethan 1 step
var user = {
    id: "1",
    email: "john@email.com",
    personinfo : {
        name: "John",
        address: {
            line1: "2444 moonstep",
            line2: "Bangpain Distric",
            city: "Ayuthaya",
            zipcode: "13000"
        },
        data: [
            'a',
            'b',
            'c'
        ]
    }
}

console.log(user.personinfo);
console.log(user.personinfo.name);
console.log(user.personinfo.address);
console.log(user.personinfo.address.city);