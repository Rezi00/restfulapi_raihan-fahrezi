/**
 * Student name
 * @type{string}
*/

const studentName = "Kazuma"

/**
 * Array of grades
 * @type{Array<number>
*/

const grades = [23, 3, 3.4, 44]

/**
 * Todo Object
 * @type{{id: number|string, text: string}}
*/

const todo = {
    id: 1,
    text: "hello",
}

/**
 * Calculate tax
 * @param {number} amount . total amount
 * @param {number} tax - tax percentage
 * @return {string} - total with a dollar sign
*/

const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`
}

/**
 * A Student
 * @typeof {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age
{optional}
 * @property {boolean} isActive - Student is active
*/

/**
 * @type {Student}
*/

const Student = {
    id: 1,
    name: "Akiyama Mio",
    age: 22,
    isActive: true,
}

/**
 * Class to create a person object
*/

class Person {
    /**
     * @param {Object} personInfo Information about the person
    */

    constructor(personInfo) {
        /**
         * @property {string} name Persons name
        */
        this.name = personInfo.name
        /**
         * @property {string} age Persons age
        */
        this.age = personInfo.age
    }
    /**
     * @property {Function} greet A greeting with name and age
     * @return void
    */
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
    }
}

/**
 * Person one
 * see {@link Person}
*/
const person1 = new Person({
    name: "Kazuma",
    age: 21,
})

const { add, subtract, divide, multiply } = require("./calculator")