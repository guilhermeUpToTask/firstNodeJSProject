const {randomUUID} = require("crypto")
const express = require("express"); //import express

const app = express(); // iniatilizate express like a function

app.use(express.json()); // a middle that will be executed in between request and response

const products = []; // a simples imitation of a database

/*
      BASIC METHODS
    POST = CREATE A NEW DATA
    GET = FIND A DATA
    PUT = CHANGE A DATA
    DELETE = OF COURSE DELETE A DATA
*/

app.post("/products",(request,response) => {
    // expect reciving name and price of a product 
    
    const {name, price} = request.body; // destructure the body to get only name and price
    console.log("name of the product is " + name + " with the price of : " + price);

    const product = { // create a object product
        name,
        price,
        id: randomUUID() // generate a random id
    }

    products.push(product) //push our product to the products database

    response.json(product); // send our product back
})

app.listen(4002, () => console.log("server is running in port 4002"));