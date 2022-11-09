const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("lista de productos");
// });

// app.get("/user", (req, res) => {
//   res.json({ name: "jerly", lastname: "Rosa", age: 18 });
// });

// app.get("/isAlive", (req, res) => {
//     res.sendStatus(204)
//   });

// Request Body

// app.use(express.text())
// app.use(express.json())

// app.post('/user',(req,res )=>{

//     console.log(req.body)
//     res.send('Nuevo user')
// })

// Request Params

// app.get("/hello/:username", (req, res) => {
//   const { username } = req.params;
//   console.log(username);
//   res.send(`Hello ${username}`);
// });

// Queries

// app.get("/search", (req, res) => {
//   console.log(req.query);
//   if (req.query.q === "js") res.send("Listado de  libros js ");
//   else res.send(`Search`);
// });

// Middlewares

// app.use((req, res, next) => {
//   console.log(`Route: ${req.url} method: ${req.method}`);
//   next();
// });

// app.use((req, res, next) => {
//   if (req.query.login === "admin") next();
//   else res.send("No autorizado");

//   next();
// });

// app.get("/dashboard", (req, res) => {
//   res.send(`Dashboard page`);
// });

// app.get("/profile", (req, res) => {
//   res.send(`Profile page`);
// });

// Static files

// app.use('/static', express.static( path.join( __dirname,'static')));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

const HomeRoutes = require("./routes/index");
const UserRoutes = require("./routes/users");
require("ejs");

//Setting

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares

app.use(morgan("dev"));

app.use(HomeRoutes);
app.use(UserRoutes);

app.use("/static", express.static(path.join(__dirname, "static")));

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
