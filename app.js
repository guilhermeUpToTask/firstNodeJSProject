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

// ### POST ROUTE TO INSERT A NEW PRODUCT TO OUR DATA

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
});

//  ### GET ROUTE TO SEND ALL PRODUCTS ###
app.get("/products", (request, response) => {
    response.json(products);
});

// ### GET ROUTE TO FIND A PRODUCT IN OUR DATABASE 
app.get("/products/:id", (request, response) => { //expecting a parameter
    const {id} = request.params; // get the id atribute from params
    const product = products.find(prdct => prdct.id === id); // find the product usind the id
    response.json(product); // send it back the product we find
});


// ### PUT ROUTE TO UPDATE A PRODUCT
app.put("/products/:id", (request, response) => {
    const {id} = request.params;
    const {name, price} = request.body; // get name and price from body object

    const productIndex = products.findIndex(product => product.id === id); // find the index in our database of product

    products[productIndex] = {
        ...products[productIndex], // use rest parameters to fulffil the object minus =>
        name, // the name
        price// and the price
    }

    response.json({messsage : "product successfully changed"}); // send it back the message 
});

// ### DELETE ROUTE TO DELETE A PRODUCT
app.delete("/products/:id", (request, response) => {
    const {id} = request.params;
    const productIndex = products.findIndex(product => product.id === id);

    products.splice(productIndex, 1);

    response.json({message: "product sucessfully deleted"});
});

app.listen(4002, () => console.log("server is running in port 4002"));