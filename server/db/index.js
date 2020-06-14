import mongoose from "mongoose";

// todo - add production and dev connection
mongoose
  .connect("mongodb://127.0.0.1:27017/afrolink", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((e) => {
    console.error("Connection error", e.message);
  });

mongoose.set("debug", true);
const db = mongoose.connection;

export default db;
