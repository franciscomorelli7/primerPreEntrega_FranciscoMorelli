import {promises as fs} from "fs"

class ProductManager{
    constructor(){
        this.path="./src/models/products.json"
    }

    leerProductos =async()=>{

        let productos = await fs.readFile(this.path, "utf-8")
        return JSON.parse(productos)
    }

    agregarProductos = async(product)=>{
        let productosViejos = await this.leerProductos()
        let todosLosProductos = [...productosViejos, product]
        await fs.writeFile(this.path, JSON.stringify(todosLosProductos));
        return "Se agrego correctamente."
    }
    getProducts = async()=>{
        return await this.leerProductos()
    }
}


export default ProductManager

