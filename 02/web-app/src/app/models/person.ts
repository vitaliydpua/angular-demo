export class Person {
    /*firstname: string = '';
    lastname: string = '';
    age: number = '';

    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }*/
    constructor(public id: number, public firstname: string, public lastname: string, public age: number) {}
}