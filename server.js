const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');

console.log(faker.name.findName());

class User {
    constructor(){
        this.name = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.companyName = faker.company.companyName();
        this.streetName = faker.address.streetName();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();





    }
}

app.get("/api/users/new", (req,res) => {
    res.json(new User);

})

app.get("/api/companies/new", (req,res) => {
    res.json(new Company);

})

app.get("/api/user/company", (req,res) => {
    res.json({user : new User, company : new Company});
    

})

app.listen(port, () => console.log(`Running on port ${port}!!`));