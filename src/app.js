import express from "express";
import ProductManager from "./controllers/ProductManager.js";
const products = new ProductManager


const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/products", async(req,res)=>{
    res.send(await products.getProducts())
})

app.post("/products", async(req, res)=>{
    let nuevoProducto = req.body;
    res.send (await products.agregarProductos(nuevoProducto))
})

app.listen (PORT, () => {
    console.log(`Servidor express en puerto ${PORT}`)
})