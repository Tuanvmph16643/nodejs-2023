// const express = require('express')
import express from "express";
const router = express.Router();

const data = [
  { id: 1, name: "Chuột", price: 100 },
  { id: 2, name: "Bàn phím", price: 200 },
  { id: 3, name: "Màn hình", price: 500 },
];

//MidleWare
router.use((req, res, next) => {
  console.log(req.url);
  next();
});

router.get("/products", (req, res) => {
  try {
    res.send(data);
    res.end();
  } catch (error) {
    res.status(500).send({
        message: "Loi Server"
    });
    res.end();
  }
});

//Get product by ID
router.get("/products/:id", (req, res) => {
  try {
    const id = req.params.id;
    const product = data.find((item) => item.id == id);
    if (product) {
      res.send(product);
    } else {
      res.status(400).send({
        message: "San pham khong ton tai"
      });
    }
  } catch (error) {
    res.status(500).send({
        message: 'Loi Server'
    })
    res.end()
  }
});

//Create

router.post("/products", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.send({
    message: "Them moi thanh cong"
  });
});

//Update
router.put("/products/:id", (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const productIndex = data.findIndex((item) => item.id == id);
  if (productIndex >= 0) {
    data[productIndex] = { ...data[productIndex], ...updateData };
    console.log(updateData);
    res.send(data[productIndex]);
    res.end();
  } else {
    res.status(400).send({
        message: "san pham khong ton tai"
    });
  }
});

//Delete
router.delete("/products/:id", (req, res) => {
  try {
    const id = req.params.id;
    const productIndex = data.findIndex((item) => item.id == id);
    if (productIndex >= 0) {
      data.splice(productIndex, 1);
      res.json(data);
      res.end();
    } else {
      res.status(400).send({
        message: "san pham khong ton tai"
      });
    }
  } catch (error) {
    res.status(500).send({
        message: "Loi Server"
    })
    res.end()
  }
});

// module.exports = router
export default router;
