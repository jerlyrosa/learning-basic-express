const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

//FAKEDATA
let products = [
  {
    id: 1,
    title: "iPhone 9",
    price: 549,
  },
  {
    id: 2,
    title: "iPhone X",
    price: 899,
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    price: 1249,
  },
];

//SEETTING
app.set("appName", "Express Course");


// Middlewares

app.use(morgan("dev"));
app.use(express.json());

//GET

app.get("/products", (req, res) => {
  res.json(products);
});

//POST

app.post("/products", (req, res) => {
  const newProducts = { ...req.body, id: products.length + 1 };
  products.push(newProducts);
  res.send(newProducts);
});

//UPDATE

app.put("/products/:id", (req, res) => {
  const newData = req.body;
  const prodFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!prodFound)
    return res.status(404).json({
      message: "Product not found",
    });

  products = products.map((p) =>
    product.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );

  res.send(`update products`);
});

//DELETE

app.delete("/products/:id", (req, res) => {
  const prodFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!prodFound)
    return res.status(404).json({
      message: "Product not found",
    });

  products = products.filter((p) => p.id !== parseInt(req.params.id));

  res.send(`delete products`);
});

//GET:ID

app.get("/products/:id", (req, res) => {
  const prodFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!prodFound)
    return res.status(404).json({
      message: "Product not found",
    });

  res.json(prodFound);
});

//SERVER

app.listen(port, () => {
  console.log(`Server ${app.get("appName")} on port ${port}`);
});
