const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

const Person = require("./Models/person");
app.use(express.json());
connectDB();
// Create Many Records

Person.create(
    [
        {
            name: "Mohamed",
            age: "28",
            favoriteFoods: ["Pizza", "Salade", "Makloub"],
        },
        {
            name: "Safa",
            age: "32",
            favoriteFoods: ["Baguette", "Spaguetti", "Makloub"],
        },
        {
            name: "Dali",
            age: "29",
            favoriteFoods: ["Pizza", "Cake", "Salade"],
        },
        {
            name: "Amal",
            age: "27",
            favoriteFoods: ["Ojja", "Poulet", "Couscous"],
        },
        {
            name: "Mary",
            age: "20",
            favoriteFoods: ["Pizza", "Salade", "Makloub"],
        },
    ],
    (err, data) => {
        err ? console.log(err) : console.log("People saved", data);
    }
);
//Use model.find() to Search

Person.find((err, data) => {

    err ? console.log(err) : console.log("People found", data);
});

//Use model.findOne()
Person.findOne({ favoriteFoods: "Pizsza" }, (err, data) => {
    err ? console.log(err) : console.log("Person found", data);
});

//Use model.findById()
Person.findById({ _id: "id" }, (err, data) => {
    err ? console.log(err) : console.log("Person found by id", data);
});

//Update
Person.findOneAndUpdate(
    { name: "Safa" },
    { name: "Sarra" },
    {
        new: true,
        runValidators: true,
    },
    (err, data) => {
        err ? console.log(err) : console.log("Person updated by name", data);
    }
);

//Delete
Person.findByIdAndRemove({ _id: "" }, (err, data) => {
    err ? console.log(err) : console.log("Person deleted by id", data);
});

// Delete Many Documents

Person.deleteMany({ name: "Marry" }, (err, data) => {
    err ? console.log(err) : console.log("Person deleted by name", data);
});

Person.find({ favoriteFoods: "Salade" })

    .limit(2) // limit to 2 items
    .sort({ name: 1 }) // sort ascending by name
    .select({ age: false }) // hide age
    .exec((err, data) => {
        err
            ? console.log(err)
            : console.log("Person found by food and sorted ..", data);
    });
const port = 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
