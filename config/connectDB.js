const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://Yasmine:yasmine@checkpointmongoose.7jd4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            }
        );
        console.log("Database is connected");
    } catch (error) {
        console.log({ msg: "Database is not connected", error });
    }
};
module.exports = connectDB;
