const express = require("express");

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

app.use((req, res, next) => {
  console.log(`Route: ${req.url} method: ${req.method}`);

  next();
});

app.get("/profile", (req, res) => {
  res.send(`Profile page`);
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
