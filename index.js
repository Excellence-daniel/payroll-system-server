const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 4020;
const config = process.env.NODE_ENV || "dev";

const auth = require("./controllers/auth");
const { mongoUrl } = require("./utils/constants");
const admin = require("./controllers/admin");

mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);

mongoose.connect(mongoUrl);

var conn = mongoose.connection;
// conn.on('error', console.error.bind(console, 'connection error:'));
conn.on("error", function (err) {
  console.log("mongoose connection error:", err.message);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || port, () => {
  console.log({ config });
  console.log("start work on " + port);
});

// Auth
app.get("/auth/login", auth.login);
app.post("/auth/register", auth.register);

// Admin
app.post("/admin/createEmployee", admin.createEmployee);
app.get("/admin/getEmployees", admin.getEmployees);
app.post("/admin/createReport", admin.createReport);
app.get("/admin/getReports", admin.getReports);
