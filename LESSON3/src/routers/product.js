// const express = require('express')
import express from "express";
import { getProduct, getProductById, createProduct, deleteProduct, updateProduct } from "../controller/product";
const router = express.Router();


//MidleWare
router.use((req, res, next) => {
  console.log(req.url);
  next();
});

router.get('/products', getProduct)
//get by id
router.get('/products/:id', getProductById)
//create
router.post('/products', createProduct)
//update
router.put('/products/:id', updateProduct)
//delete
router.get('/products/:id', deleteProduct)



// module.exports = router
export default router;
