const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
//import routers TO DO****************

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/users", usersRouter);
// app.use("/posts", postsRouter);
// app.use("/events", eventsRouter);
// app.use("/resources", resourcesRouter);
// app.use("/downloads", downloadsRouter);
// app.use("/media", mediaRouter);
// app.use("/contacts", contactsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
