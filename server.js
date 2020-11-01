// Again, got most of this from the Cat's example that we did in class.

// Declare my variables and const here to determine the rest of the layout of the page and how it will function:
const express = requires("express");
const app = express();
const PORT = process.env.PORT || 3306;

//setting the handlebars here for the rest of the layout.
const expressHandleBars = require("express-handlebars");

// Starting the server and setting.
app.engine("express handle-bars", expressHandleBars({ defaultLayout: "main" }));
app.set("engine", "express handle-bars");

// Declaring the route on where to redirect to once connected to the server.
var routes = require("./controllers/burgers_controller.js");

// Expressing what express methods to use.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); //setting public folder to static since that is standard practice.
app.use(routes);

// Telling the server to connect to this PORT.
app.listen(PORT, function() {
  console.log("App now listening at http://localhost:" + PORT);
});