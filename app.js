const { request } = require("express");
const express = require("express"); //import express

const app = express(); // iniatilizate express like a function

app.listen(4002, () => console.log("server is running in port 4002"));

app.get("/first_route", (request, response) => { // get the route /frist_route
    return response.json({
        message : "first route acessed"
    }); // send the response to that route
});