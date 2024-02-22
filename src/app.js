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
app.get("/products/:id", async(req,res)=>{
    let id = req.params.id
     res.send(await products.getProductById(id))
})


app.post("/products", async(req, res)=>{
    let nuevoProducto = req.body;
    res.send (await products.agregarProductos(nuevoProducto))
})

app.delete("/products/:id", async (req,res)=>{
    let id = req.params.id
     res.send(await products.deleteProductsById(id))
})

app.put("/products/:id", async (req,res)=>{
    let id = req.params.id
    let updateBody = req.body
    res.send(await products.updateProductsById(id,updateBody))
})


app.listen (PORT, () => {
    console.log(`Servidor express en puerto ${PORT}`)
})