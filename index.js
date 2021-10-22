const express = require("express");
const env = require("./config/environment");
const mongoose = require("./config/mongoose");
const Layout = require("express-ejs-layouts");
// creating express app instance
const app = express();
const port = process.env.PORT || env.PORT;

// here i set the ejs view engine which inshort converts ejs files to html file
app.set("view engine", "ejs");
app.set("views", "./views");

// setting these to layout so that script and style file can move to head and bottom in layout.
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.use(Layout);
// to parse the body of the req.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// this provide the static link that will be served direcly.
app.use(express.static("public"));

// my own scss middleware to write the files to css folder if any.
const dartScssMiddleware = require("./config/sass-middleware");
app.use(dartScssMiddleware("public/scss", "public/styles"));

// used to see the requests comming to the server TODO: remove in production
app.use((req, res, next) => {
  // this following line will help me to change the color of navigation
  res.locals.urlPath = req.url;
  console.log("Request for: ", `\x1b[36m"${req.url}"\x1b[0m`);
  next();
});

app.use("/", require("./router"));
// server is starts listening
app.listen(port, (error) => {
  if (error) console.log("server connection ERROR", error);
  else console.log("visit application by", '\x1b[36m"CTL+Click"\x1b[0m');
  // Second argument is inserted in place of %s
  console.log("\x1b[33m%s\x1b[0m", `http://localhost:${port}`); //yellow
});
